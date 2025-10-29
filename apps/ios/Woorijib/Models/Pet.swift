import Foundation

/// 패밀리 펫 모델
struct FamilyPet: Identifiable, Codable {
    let id: String
    let familyId: String
    let name: String
    let type: PetType
    let level: Int
    let experience: Int
    let happiness: Int
    let hunger: Int
    let lastFedAt: Date?
    let lastInteractedAt: Date?
    let costume: Costume?
    let createdAt: Date

    enum CodingKeys: String, CodingKey {
        case id
        case familyId = "family_id"
        case name
        case type
        case level
        case experience
        case happiness
        case hunger
        case lastFedAt = "last_fed_at"
        case lastInteractedAt = "last_interacted_at"
        case costume
        case createdAt = "created_at"
    }

    var nextLevelExperience: Int {
        level * 100
    }

    var experienceProgress: Double {
        Double(experience) / Double(nextLevelExperience)
    }

    var happinessStatus: HappinessStatus {
        switch happiness {
        case 80...100: return .veryHappy
        case 60..<80: return .happy
        case 40..<60: return .neutral
        case 20..<40: return .sad
        default: return .verySad
        }
    }

    var hungerStatus: HungerStatus {
        switch hunger {
        case 80...100: return .full
        case 60..<80: return .satisfied
        case 40..<60: return .hungry
        case 20..<40: return .veryHungry
        default: return .starving
        }
    }
}

/// 펫 타입
enum PetType: String, Codable {
    case dog = "dog"
    case cat = "cat"
    case rabbit = "rabbit"

    var displayName: String {
        switch self {
        case .dog: return "강아지"
        case .cat: return "고양이"
        case .rabbit: return "토끼"
        }
    }
}

/// 코스튬
struct Costume: Codable {
    let id: String
    let name: String
    let imageURL: URL

    enum CodingKeys: String, CodingKey {
        case id
        case name
        case imageURL = "image_url"
    }
}

/// 행복도 상태
enum HappinessStatus {
    case veryHappy
    case happy
    case neutral
    case sad
    case verySad

    var emoji: String {
        switch self {
        case .veryHappy: return "😄"
        case .happy: return "😊"
        case .neutral: return "😐"
        case .sad: return "😢"
        case .verySad: return "😭"
        }
    }

    var description: String {
        switch self {
        case .veryHappy: return "매우 행복해요"
        case .happy: return "행복해요"
        case .neutral: return "보통이에요"
        case .sad: return "슬퍼요"
        case .verySad: return "매우 슬퍼요"
        }
    }
}

/// 배고픔 상태
enum HungerStatus {
    case full
    case satisfied
    case hungry
    case veryHungry
    case starving

    var emoji: String {
        switch self {
        case .full: return "😋"
        case .satisfied: return "🙂"
        case .hungry: return "😕"
        case .veryHungry: return "😫"
        case .starving: return "😵"
        }
    }

    var description: String {
        switch self {
        case .full: return "배불러요"
        case .satisfied: return "만족해요"
        case .hungry: return "배고파요"
        case .veryHungry: return "매우 배고파요"
        case .starving: return "굶주리고 있어요"
        }
    }
}
