import Foundation

/// 질문 모델
struct Question: Identifiable, Codable {
    let id: String
    let text: String
    let category: QuestionCategory
    let difficulty: Difficulty
    let ageGroups: [AgeGroup]
    let tags: [String]

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case text = "question_text"
        case category
        case difficulty
        case ageGroups = "age_group"
        case tags
    }
}

/// 질문 카테고리
enum QuestionCategory: String, Codable {
    case daily = "daily"
    case memory = "memory"
    case emotion = "emotion"
    case future = "future"
    case values = "values"

    var displayName: String {
        switch self {
        case .daily: return "일상"
        case .memory: return "추억"
        case .emotion: return "감정"
        case .future: return "미래"
        case .values: return "가치관"
        }
    }

    var emoji: String {
        switch self {
        case .daily: return "☀️"
        case .memory: return "💭"
        case .emotion: return "❤️"
        case .future: return "🌟"
        case .values: return "💎"
        }
    }
}

/// 질문 난이도
enum Difficulty: String, Codable {
    case easy = "easy"
    case medium = "medium"
    case hard = "hard"

    var displayName: String {
        switch self {
        case .easy: return "쉬움"
        case .medium: return "보통"
        case .hard: return "어려움"
        }
    }
}

/// 연령대
enum AgeGroup: String, Codable {
    case all = "all"
    case child = "child"
    case teen = "teen"
    case adult = "adult"
    case senior = "senior"
}

/// 답변 모델
struct Answer: Identifiable, Codable {
    let id: String
    let questionId: String
    let familyId: String
    let userId: String
    let text: String
    let mediaURLs: [URL]
    let isAnonymous: Bool
    let createdAt: Date
    let reactions: [Reaction]

    enum CodingKeys: String, CodingKey {
        case id = "_id"
        case questionId = "question_id"
        case familyId = "family_id"
        case userId = "user_id"
        case text = "answer_text"
        case mediaURLs = "media_urls"
        case isAnonymous = "is_anonymous"
        case createdAt = "created_at"
        case reactions
    }
}

/// 반응 (리액션)
struct Reaction: Codable {
    let userId: String
    let type: ReactionType
    let createdAt: Date

    enum CodingKeys: String, CodingKey {
        case userId = "user_id"
        case type
        case createdAt = "created_at"
    }
}

enum ReactionType: String, Codable {
    case heart = "heart"
    case thumbsUp = "thumbs_up"
    case laugh = "laugh"
    case sad = "sad"
    case surprised = "surprised"

    var emoji: String {
        switch self {
        case .heart: return "❤️"
        case .thumbsUp: return "👍"
        case .laugh: return "😂"
        case .sad: return "😢"
        case .surprised: return "😮"
        }
    }
}
