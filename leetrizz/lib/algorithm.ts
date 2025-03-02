// Text Evaluation Algorithm for LeetRizz
// This algorithm evaluates text responses based on multiple factors

import type { TextScenario, GradeResult, Complexity, ScoreBreakdown, Category } from "@/components/types";

// Keywords related to different scenario categories
const CATEGORY_KEYWORDS: Record<Category, string[]> = {
  "Just Met": [
    "nice", "meet", "hi", "hello", "hey", "cool", "chat", "talk", "know", "connect", 
    "hangout", "sometime", "coffee", "drink", "number", "contact", "party", "friend"
  ],
  "First Date": [
    "fun", "time", "good", "great", "enjoy", "nice", "again", "next", "date", "dinner", 
    "movie", "like", "place", "restaurant", "had", "tonight", "tomorrow", "weekend"
  ],
  "Situationship": [
    "us", "we", "relationship", "feel", "together", "exclusive", "serious", "casual",
    "define", "talk", "about", "between", "seeing", "dating", "official", "label"
  ],
  "Breakup": [
    "sorry", "understand", "time", "space", "best", "feel", "meant", "right", "wrong",
    "work", "through", "chance", "respect", "decision", "wish", "well", "future", "appreciate"
  ],
  "Caught Cheating": [
    "sorry", "explain", "misunderstand", "situation", "happen", "trust", "honest", "truth",
    "mistake", "apologize", "forgive", "chance", "loyal", "wrong", "promise", "understand"
  ],
  "Ghosted": [
    "been", "busy", "miss", "sorry", "time", "away", "back", "respond", "reply", 
    "message", "text", "talk", "catch", "up", "disappear", "understand", "happened"
  ],
  "All": [] // Empty array for "All" category since it's not specific
};

// Positive words for sentiment analysis
const POSITIVE_WORDS = [
  "good", "great", "awesome", "amazing", "love", "happy", "excited", "fun", "enjoy", "nice",
  "like", "cool", "wonderful", "fantastic", "excellent", "perfect", "best", "beautiful",
  "glad", "appreciate", "thanks", "thank", "smile", "laugh", "joy", "pleasant", "positive"
];

// Negative words for sentiment analysis
const NEGATIVE_WORDS = [
  "bad", "sad", "sorry", "angry", "upset", "disappointed", "hate", "dislike", "terrible",
  "awful", "horrible", "worst", "annoyed", "frustrated", "mad", "regret", "unfortunate",
  "unhappy", "wrong", "mistake", "problem", "issue", "worry", "concerned", "negative"
];

// Question words/endings to detect engagement
const QUESTION_INDICATORS = [
  "?", "what", "how", "when", "where", "why", "who", "which", "could", "would", 
  "should", "will", "do you", "are you", "did you", "have you", "can you", "want to"
];

// Common boring/generic phrases to avoid
const GENERIC_PHRASES = [
  "how are you", "what's up", "that's cool", "nice to meet you", "sounds good",
  "I'm good", "same here", "ok", "okay", "sure", "yeah", "lol", "haha", "hahaha",
  "i see", "got it", "cool cool", "that's nice", "whatever", "oh"
];

// Popular emojis for detection
const COMMON_EMOJIS = [
  "😊", "😂", "🙂", "👍", "❤️", "😍", "😅", "😎", "😘", "🙄", "😉", "🙃", "😆",
  "🔥", "💯", "👀", "🤔", "🥺", "👌", "🤣", "🥰", "💕", "😜", "😬", "🙏", "😁", "💪"
];

/**
 * Count occurrences of items from a list in a text
 */
function countOccurrences(text: string, items: string[]): number {
  const lowerText = text.toLowerCase();
  return items.reduce((count, item) => {
    // For single characters (like emojis or "?"), count direct occurrences
    if (item.length === 1) {
      return count + (lowerText.split(item).length - 1);
    }
    // For words, match word boundaries
    const regex = new RegExp(`\\b${item.toLowerCase()}\\b`, 'g');
    const matches = lowerText.match(regex);
    return count + (matches ? matches.length : 0);
  }, 0);
}

/**
 * Calculate relevance score based on keyword matching with the original message
 */
function calculateRelevanceScore(response: string, scenario: TextScenario): number {
  const message = scenario.message.toLowerCase();
  const responseText = response.toLowerCase();
  
  // Extract key nouns and verbs from the original message (simplified approach)
  const messageWords = message.split(/\s+/).filter((word: string) => word.length > 3);
  
  // Count how many of these words appear in the response
  let wordMatches = 0;
  for (const word of messageWords) {
    if (responseText.includes(word)) {
      wordMatches++;
    }
  }
  
  // Calculate relevance based on category keywords
  const categoryKeywords = CATEGORY_KEYWORDS[scenario.category] || [];
  const categoryKeywordMatches = countOccurrences(responseText, categoryKeywords);
  
  // Combine both scores (original message relevance and category relevance)
  const messageRelevance = messageWords.length > 0 ? wordMatches / messageWords.length : 0;
  const categoryRelevance = categoryKeywordMatches / Math.min(responseText.split(/\s+/).length, 20);
  
  // Weight both types of relevance
  return Math.min(1, (messageRelevance * 0.6) + (categoryRelevance * 0.4)) * 100;
}

/**
 * Calculate engagement score based on questions and conversation hooks
 */
function calculateEngagementScore(response: string): number {
  const responseText = response.toLowerCase();
  const words = responseText.split(/\s+/);
  
  // Check for questions
  const hasQuestionMark = responseText.includes("?");
  const questionIndicators = countOccurrences(responseText, QUESTION_INDICATORS);
  
  // Check for conversation hooks
  const responseLength = words.length;
  const questionScore = hasQuestionMark ? 50 : (questionIndicators > 0 ? 30 : 0);
  
  // Personal sharing increases engagement
  const personalIndicators = countOccurrences(responseText, ["i", "me", "my", "mine", "we", "us", "our"]);
  const personalScore = Math.min(50, (personalIndicators / Math.max(1, responseLength)) * 100);
  
  return Math.min(100, questionScore + personalScore);
}

/**
 * Calculate tone appropriateness based on the scenario
 */
function calculateToneScore(response: string, scenario: TextScenario): number {
  const responseText = response.toLowerCase();
  
  // Count positive and negative sentiment words
  const positiveCount = countOccurrences(responseText, POSITIVE_WORDS);
  const negativeCount = countOccurrences(responseText, NEGATIVE_WORDS);
  
  // Calculate sentiment ratio
  const totalWords = responseText.split(/\s+/).length;
  const sentimentRatio = totalWords > 0 ? 
    (positiveCount - negativeCount) / Math.min(totalWords, 20) : 0;
  
  // Different scenarios call for different tones
  let idealSentimentRatio;
  switch(scenario.category) {
    case "Just Met":
    case "First Date":
      idealSentimentRatio = 0.3; // Positive but not overly enthusiastic
      break;
    case "Situationship":
      idealSentimentRatio = 0.1; // Balanced tone
      break;
    case "Breakup":
      idealSentimentRatio = -0.1; // Slightly somber
      break;
    case "Caught Cheating":
      idealSentimentRatio = -0.2; // More serious/apologetic
      break;
    case "Ghosted":
      idealSentimentRatio = 0.2; // Positive to reconnect
      break;
    default:
      idealSentimentRatio = 0;
  }
  
  // Calculate how close the sentiment is to the ideal
  const sentimentDifference = Math.abs(sentimentRatio - idealSentimentRatio);
  return Math.max(0, 100 - (sentimentDifference * 100));
}

/**
 * Calculate originality score based on avoiding clichés and generic responses
 */
function calculateOriginalityScore(response: string): number {
  const responseText = response.toLowerCase();
  
  // Check for generic phrases
  const genericPhraseCount = countOccurrences(responseText, GENERIC_PHRASES);
  
  // Calculate word variety (unique words / total words)
  const words = responseText.split(/\s+/);
  const uniqueWords = new Set(words.map(w => w.toLowerCase()));
  const wordVarietyRatio = words.length > 0 ? uniqueWords.size / words.length : 0;
  
  // Penalize for generic phrases
  const genericPenalty = Math.min(70, genericPhraseCount * 30);
  
  // Reward for word variety
  const varietyScore = wordVarietyRatio * 70;
  
  // Response length contributes to originality potential
  const lengthBonus = Math.min(30, Math.sqrt(words.length) * 5);
  
  return Math.max(0, Math.min(100, varietyScore + lengthBonus - genericPenalty));
}

/**
 * Calculate length score based on appropriate length for the context
 */
function calculateLengthScore(response: string, scenario: TextScenario): number {
  const words = response.split(/\s+/).length;
  
  // Ideal length ranges based on scenario category
  let idealMinLength, idealMaxLength;
  switch(scenario.category) {
    case "Just Met":
      idealMinLength = 5;
      idealMaxLength = 15;
      break;
    case "First Date":
      idealMinLength = 8;
      idealMaxLength = 20;
      break;
    case "Situationship":
      idealMinLength = 10;
      idealMaxLength = 25;
      break;
    case "Breakup":
      idealMinLength = 12;
      idealMaxLength = 30;
      break;
    case "Caught Cheating":
      idealMinLength = 15;
      idealMaxLength = 35;
      break;
    case "Ghosted":
      idealMinLength = 8;
      idealMaxLength = 20;
      break;
    default:
      idealMinLength = 8;
      idealMaxLength = 20;
  }
  
  // Calculate score based on how close to ideal range
  if (words < idealMinLength) {
    return Math.max(0, (words / idealMinLength) * 80);
  } else if (words > idealMaxLength * 2) {
    return Math.max(0, 100 - (((words - idealMaxLength * 2) / idealMaxLength) * 100));
  } else if (words > idealMaxLength) {
    // Gradually reduce score when exceeding ideal max
    return Math.max(0, 100 - (((words - idealMaxLength) / idealMaxLength) * 50));
  } else {
    // Within ideal range
    return 100;
  }
}

/**
 * Calculate emoji usage score
 */
function calculateEmojiScore(response: string): number {
  // Count emojis
  const emojiCount = countOccurrences(response, COMMON_EMOJIS);
  const words = response.split(/\s+/).length;
  
  // Calculate emoji to word ratio
  const emojiRatio = words > 0 ? emojiCount / words : 0;
  
  // Ideal ratio is about 1 emoji per 7-10 words, with at least 1 for short messages
  if (emojiCount === 0) {
    return 60; // No emojis is okay but not ideal
  } else if (emojiRatio > 0.5) {
    // Too many emojis
    return Math.max(0, 100 - ((emojiRatio - 0.5) * 200));
  } else if (emojiRatio >= 0.1 && emojiRatio <= 0.3) {
    // Ideal range
    return 100;
  } else {
    // Good but not ideal
    return 80;
  }
}

/**
 * Map a numerical score to a complexity rating
 */
function mapScoreToComplexity(score: number): Complexity {
  // Add randomness for low scores
  if (score < 40) {
    // For scores below 40, introduce significant randomness
    const randomValue = Math.random();
    
    if (score < 25) {
      // Mostly O(no Rizz), but occasionally bump up
      return randomValue < 0.8 ? "O(no Rizz)" : "O(1)";
    } else {
      // Scores 25-40: mostly O(1), but can randomly become O(no Rizz) or O(n)
      if (randomValue < 0.25) {
        return "O(no Rizz)"; // 25% chance to drop to no Rizz
      } else if (randomValue > 0.85) {
        return "O(n)"; // 15% chance to bump to O(n)
      } else {
        return "O(1)"; // 60% chance to stay O(1)
      }
    }
  }
  
  // Regular mapping with slightly lower thresholds for higher scores
  if (score < 45) {
    return "O(1)";
  } else if (score < 62) { // Lowered from 65
    return "O(n)";
  } else if (score < 78) { // Lowered from 82
    return "O(n log n)";
  } else {
    return "O(n²)";
  }
}

/**
 * Generate appropriate feedback based on scores
 */
function generateFeedback(scores: ScoreBreakdown, complexity: Complexity): string {
  // Find the lowest score area to give targeted feedback
  const lowestCategory = Object.entries({
    relevance: scores.relevanceScore,
    engagement: scores.engagementScore,
    tone: scores.toneScore,
    originality: scores.originalityScore,
    length: scores.lengthScore,
    emoji: scores.emojiScore
  }).reduce((min, current) => current[1] < min[1] ? current : min, ["", 100]);

  // General feedback based on overall score
  let feedback = "";
  if (scores.totalScore < 30) {
    feedback = "Bruh, put some effort in 💀";
  } else if (scores.totalScore < 50) {
    feedback = "Mid rizz, you can do better";
  } else if (scores.totalScore < 70) {
    feedback = "Not bad, they might respond";
  } else if (scores.totalScore < 85) {
    feedback = "You just saved the vibe 👑";
  } else {
    feedback = "Elite rizz game! Perfect response";
  }

  // Add specific advice based on lowest score
  if (scores.totalScore < 85) { // Only add specific advice if not already perfect
    switch(lowestCategory[0]) {
      case "relevance":
        feedback += " Try addressing what they actually said.";
        break;
      case "engagement":
        feedback += " Add a question to keep the convo going.";
        break;
      case "tone":
        feedback += " Adjust your tone to match the situation.";
        break;
      case "originality":
        feedback += " Be more unique and less generic.";
        break;
      case "length":
        if (scores.lengthScore < 50) {
          const isShort = scores.lengthScore < 30;
          feedback += isShort ? " Your response is too short." : " Watch your message length.";
        }
        break;
      case "emoji":
        if (scores.emojiScore < 70) {
          feedback += " Consider adding an emoji or two.";
        }
        break;
    }
  }

  return feedback;
}

/**
 * Generate appropriate emojis based on scores and complexity
 */
function generateEmojis(scores: ScoreBreakdown, complexity: Complexity): string[] {
  const emojis: string[] = [];
  
  // Add overall rating emoji
  if (scores.totalScore < 30) {
    emojis.push("💀");
  } else if (scores.totalScore < 50) {
    emojis.push("😐");
  } else if (scores.totalScore < 70) {
    emojis.push("👍");
  } else if (scores.totalScore < 85) {
    emojis.push("🔥");
  } else {
    emojis.push("💯");
  }
  
  // Add specific category emojis based on scores
  if (scores.relevanceScore < 50) emojis.push("❓");
  if (scores.engagementScore > 80) emojis.push("💬");
  if (scores.originalityScore > 80) emojis.push("✨");
  if (scores.toneScore > 80) emojis.push("🎯");
  if (scores.lengthScore < 40) emojis.push("📏");
  if (scores.emojiScore < 60) emojis.push("😊");
  
  // Fill up to 3 emojis if we don't have enough
  while (emojis.length < 3) {
    const options = ["👀", "👌", "🙌", "🤔", "😎", "🫠", "🫡", "🙂", "🙃"];
    const randomEmoji = options[Math.floor(Math.random() * options.length)];
    if (!emojis.includes(randomEmoji)) {
      emojis.push(randomEmoji);
    }
  }
  
  return emojis.slice(0, 3); // Return at most 3 emojis
}

/**
 * Main function to evaluate a response
 */
export function evaluateResponse(response: string, scenario: TextScenario): GradeResult {
  // Skip evaluation for empty responses
  if (!response.trim()) {
    return {
      complexity: "O(no Rizz)",
      feedback: "You didn't even write anything...",
      emojis: ["💀", "👎", "🤦‍♂️"],
    };
  }
  
  // Check if this is a contextually good short response
  const isGoodShortResponse = checkForGoodShortResponse(response, scenario);
  
  // Count words (but don't immediately penalize for short responses)
  const wordCount = response.trim().split(/\s+/).length;
  
  // Add randomness to short response evaluation
  // Sometimes even short responses that seem OK should get No Rizz
  if (wordCount <= 3 && Math.random() < 0.4 && !isGoodShortResponse) {
    return {
      complexity: "O(no Rizz)",
      feedback: "Too short and basic. Put in some effort! 💀",
      emojis: ["👎", "🥱", "💤"],
    };
  }
  
  // Penalize one-word responses that aren't clever
  if (wordCount === 1 && !isGoodShortResponse) {
    return {
      complexity: "O(no Rizz)",
      feedback: "One word? Really? Put in some effort! 💀",
      emojis: ["👎", "🥱", "💤"],
    };
  }
  
  // Calculate individual scores
  const relevanceScore = calculateRelevanceScore(response, scenario);
  const engagementScore = calculateEngagementScore(response);
  const toneScore = calculateToneScore(response, scenario);
  const originalityScore = calculateOriginalityScore(response);
  let lengthScore = calculateLengthScore(response, scenario);
  const emojiScore = calculateEmojiScore(response);
  
  // If it's a good short response, boost the length score
  if (isGoodShortResponse) {
    lengthScore = Math.max(lengthScore, 90); // Good short responses get high length scores
  }
  
  // Calculate vibe score (how well the message matches the scenario's context)
  const vibeScore = calculateVibeScore(response, scenario);
  
  // Weight the scores based on importance - add vibe score as a major factor
  const weights = {
    relevance: 0.20,
    engagement: 0.15,
    tone: 0.15,
    originality: 0.15,
    length: 0.05, // Reduced weight for length
    emoji: 0.05,  // Reduced weight for emoji
    vibe: 0.25    // New major component - vibe matching
  };
  
  // Calculate total score
  const totalScore = (
    (relevanceScore * weights.relevance) +
    (engagementScore * weights.engagement) +
    (toneScore * weights.tone) +
    (originalityScore * weights.originality) +
    (lengthScore * weights.length) +
    (emojiScore * weights.emoji) +
    (vibeScore * weights.vibe)
  );
  
  // Apply scenario-specific adjustments
  const scenarioAdjustedScore = applyCategoryAdjustments(totalScore, response, scenario);
  
  // Apply polarization to scores to make them more extreme, but less harshly
  let finalScore;
  if (scenarioAdjustedScore < 35) {
    // Make low scores lower
    finalScore = Math.max(0, scenarioAdjustedScore - 10);
  } else if (scenarioAdjustedScore > 68) { // Lowered from 70 to make high scores easier to achieve
    // Make high scores higher
    finalScore = Math.min(100, scenarioAdjustedScore + 12); // Increased bonus from 10 to 12
  } else {
    // Leave mid-range scores alone
    finalScore = scenarioAdjustedScore;
  }
  
  // Create score breakdown for feedback
  const scoreBreakdown: ScoreBreakdown = {
    relevanceScore,
    engagementScore,
    toneScore,
    originalityScore,
    lengthScore,
    emojiScore,
    vibeScore, // Add vibe score to breakdown
    totalScore: finalScore
  };
  
  // Map score to complexity
  const complexity = mapScoreToComplexity(finalScore);
  
  // Generate feedback and emojis
  const feedback = generateFeedback(scoreBreakdown, complexity);
  const emojis = generateEmojis(scoreBreakdown, complexity);
  
  return {
    complexity,
    feedback,
    emojis,
    // Include scores for debugging/display if needed
    scores: scoreBreakdown
  };
}

/**
 * Check if a short response is actually good in context
 */
function checkForGoodShortResponse(response: string, scenario: TextScenario): boolean {
  const cleanResponse = response.toLowerCase().trim();
  
  // Create a mapping of scenario messages to good short responses
  const goodShortResponseMap: Record<string, string[]> = {
    // Situationship scenarios
    "So what are we exactly?": [
      "whatever you want us to be",
      "everything you want us to be",
      "yours",
      "something special",
      "something good",
      "more than friends",
      "we're exclusive",
      "together",
    ],
    "My friends keep asking if you're my boyfriend lol": [
      "what do you tell them?",
      "what do you want to tell them?",
      "what would you like to tell them?",
      "am i?",
      "do you want me to be?",
      "i could be",
    ],
    "My family keeps asking about you... getting kinda awkward tbh": [
      "what do you tell them?",
      "tell them i'm your person",
      "let's make it official then",
      "let's give them something to talk about",
    ],
    
    // Just Met scenarios
    "Hey, I saw you at the party last night. You seemed cool.": [
      "you too",
      "you caught my eye too",
      "i noticed you too",
      "you made an impression",
      "when can i see you again?",
    ],
    
    // First Date follow-ups
    "I had a really good time tonight.": [
      "me too",
      "same here",
      "i did too",
      "when can i see you again?",
      "let's do it again soon",
      "the feeling is mutual",
    ],
    
    // Breakup responses
    "I think we need to take a break.": [
      "i understand",
      "i respect that",
      "i need to know why",
      "can we talk about this?",
      "if that's what you need",
    ],
    
    // Caught Cheating
    "Who was that girl I saw you with yesterday?": [
      "my friend",
      "my cousin",
      "just a friend",
      "my study partner",
      "my coworker",
    ]
  };
  
  // Generic good short responses that work in many contexts
  const genericGoodResponses = [
    "tell me more",
    "go on",
    "i'm listening",
    "i'm all yours",
    "that's interesting",
    "i like where this is going",
    "i've been thinking about you",
    "you're amazing",
    "i miss you",
    "can't wait to see you",
    "you make me smile",
    "let's talk about us",
    "i want you",
    "i'm yours",
  ];

  // Check if the response is in the map for this specific scenario
  const scenarioKey = Object.keys(goodShortResponseMap).find(
    key => scenario.message.includes(key)
  );
  
  if (scenarioKey) {
    // Check for fuzzy match with good responses for this scenario
    for (const goodResponse of goodShortResponseMap[scenarioKey]) {
      // Allow for minor variations (typos, extra/missing words, etc.)
      if (
        cleanResponse.includes(goodResponse) || 
        goodResponse.includes(cleanResponse) ||
        levenshteinDistance(cleanResponse, goodResponse) <= 3 // Allow for small typos
      ) {
        return true;
      }
    }
  }
  
  // Check for generic good responses
  for (const goodResponse of genericGoodResponses) {
    if (
      cleanResponse.includes(goodResponse) ||
      goodResponse.includes(cleanResponse) ||
      levenshteinDistance(cleanResponse, goodResponse) <= 3
    ) {
      return true;
    }
  }
  
  // Check for question responses - questions are often good engagement
  if (cleanResponse.includes("?") && cleanResponse.split(/\s+/).length > 2) {
    return true;
  }
  
  return false;
}

/**
 * Calculate how well the response matches the vibe of the scenario
 */
function calculateVibeScore(response: string, scenario: TextScenario): number {
  const cleanResponse = response.toLowerCase();
  
  // Determine expected vibe based on category
  let expectedVibe: 'playful' | 'serious' | 'flirty' | 'apologetic' | 'casual' | 'reassuring';
  
  switch (scenario.category) {
    case 'Just Met':
      expectedVibe = 'playful';
      break;
    case 'First Date':
      expectedVibe = 'flirty';
      break;
    case 'Situationship':
      expectedVibe = 'casual';
      break;
    case 'Caught Cheating':
      expectedVibe = 'apologetic';
      break;
    case 'Breakup':
      expectedVibe = 'serious';
      break;
    case 'Ghosted':
      expectedVibe = 'reassuring';
      break;
    default:
      expectedVibe = 'casual';
  }
  
  // Keywords that indicate different vibes
  const vibeKeywords = {
    playful: ['haha', 'lol', 'lmao', '😂', '😄', 'fun', 'cool', 'nice', 'awesome', 'love'],
    serious: ['understand', 'talk', 'feel', 'think', 'sorry', 'respect', 'honest', 'truth'],
    flirty: ['like', 'cute', 'hot', 'miss', 'soon', 'again', 'time', 'good', 'great', '❤️', '😍', 'can\'t wait'],
    apologetic: ['sorry', 'apologi', 'mistake', 'wrong', 'my fault', 'forgive', 'won\'t happen'],
    casual: ['yeah', 'sure', 'ok', 'cool', 'whatever', 'sounds good', 'let\'s', 'we can'],
    reassuring: ['been busy', 'miss', 'still', 'here', 'promise', 'make it up', 'explain']
  };
  
  // Count vibe matches
  let expectedVibeMatches = 0;
  for (const keyword of vibeKeywords[expectedVibe]) {
    if (cleanResponse.includes(keyword)) {
      expectedVibeMatches++;
    }
  }
  
  // Calculate base vibe score
  let vibeScore = Math.min(100, expectedVibeMatches * 20);
  
  // Bonus for message length appropriate to the vibe
  // Serious/apologetic messages should be longer
  if ((expectedVibe === 'serious' || expectedVibe === 'apologetic') && response.length > 80) {
    vibeScore += 15;
  }
  
  // Playful/casual can be shorter
  if ((expectedVibe === 'playful' || expectedVibe === 'casual') && response.length < 60 && response.length > 15) {
    vibeScore += 15;
  }
  
  // Check for mismatched vibes
  for (const [vibe, keywords] of Object.entries(vibeKeywords)) {
    if (vibe !== expectedVibe) {
      for (const keyword of keywords) {
        if (cleanResponse.includes(keyword)) {
          vibeScore -= 5; // Penalize for wrong vibe keywords
        }
      }
    }
  }
  
  // Check for modern texting style
  const hasModernTextingStyle = /[uU]r|[lL][oO][lL]|[yY]eah|[kK]|btw|ngl|fr|smh|tbh|idk|omg|lmk|wyd|hbu/.test(cleanResponse);
  if (hasModernTextingStyle && (expectedVibe === 'playful' || expectedVibe === 'casual' || expectedVibe === 'flirty')) {
    vibeScore += 10; // Bonus for using modern text speak in appropriate contexts
  }
  
  return Math.max(0, Math.min(100, vibeScore));
}

/**
 * Apply category-specific adjustments to the score
 */
function applyCategoryAdjustments(score: number, response: string, scenario: TextScenario): number {
  let adjustedScore = score;
  
  // Add some randomness to all scores (±5 points)
  const randomAdjustment = (Math.random() * 10) - 5;
  adjustedScore += randomAdjustment;
  
  switch (scenario.category) {
    case 'Just Met':
      // Reward shorter, playful messages for Just Met
      if (response.length < 100 && response.length > 20) {
        adjustedScore += 12; // Increased from 10
      }
      break;
      
    case 'First Date':
      // Reward enthusiasm and follow-up questions
      if (response.includes('?') && /great|fun|amazing|good|enjoyed|next|again/.test(response.toLowerCase())) {
        adjustedScore += 12; // Increased from 10
      }
      break;
      
    case 'Situationship':
      // Reward slightly ambiguous but positive responses
      if (!response.includes('boyfriend') && !response.includes('girlfriend') && 
          /special|good|enjoy|like you|feel|connection/.test(response.toLowerCase())) {
        adjustedScore += 12; // Increased from 10
      }
      break;
      
    case 'Caught Cheating':
      // Reward honesty and explanation without overexplaining
      if (/honest|truth|explain|understand|sorry/.test(response.toLowerCase()) && response.length < 150) {
        adjustedScore += 12; // Increased from 10
      }
      break;
      
    case 'Breakup':
      // Reward understanding and respect
      if (/understand|respect|feel|need|space|time/.test(response.toLowerCase())) {
        adjustedScore += 12; // Increased from 10
      }
      break;
      
    case 'Ghosted':
      // Reward lighthearted reconnection without being pushy
      if (/been|busy|missed|catch up|how are you|what's new/.test(response.toLowerCase()) && !response.includes('?')) {
        adjustedScore += 12; // Increased from 10
      }
      break;
  }
  
  return adjustedScore;
}

/**
 * Calculate Levenshtein distance between two strings
 * This helps detect similar responses even with typos
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix = [];

  // Increment along the first column of each row
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // Increment each column in the first row
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
} 