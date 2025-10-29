// MongoDB 초기 컬렉션 및 인덱스 설정

db = db.getSiblingDB('woorijib');

// Questions 컬렉션 생성 및 인덱스
db.createCollection('questions');
db.questions.createIndex({ category: 1 });
db.questions.createIndex({ difficulty: 1 });
db.questions.createIndex({ ageGroup: 1 });
db.questions.createIndex({ tags: 1 });

// Answers 컬렉션 생성 및 인덱스
db.createCollection('answers');
db.answers.createIndex({ questionId: 1 });
db.answers.createIndex({ familyId: 1, createdAt: -1 });
db.answers.createIndex({ userId: 1 });
db.answers.createIndex({ createdAt: -1 });

// Missions 컬렉션 생성 및 인덱스
db.createCollection('missions');
db.missions.createIndex({ type: 1 });
db.missions.createIndex({ difficulty: 1 });
db.missions.createIndex({ expiresAt: 1 });

// 샘플 질문 데이터 삽입
db.questions.insertMany([
  {
    questionText: {
      ko: "오늘 가장 감사했던 순간은 무엇인가요?",
      en: "What moment were you most grateful for today?"
    },
    category: "daily",
    difficulty: "easy",
    ageGroup: ["all"],
    tags: ["gratitude", "daily", "emotion"]
  },
  {
    questionText: {
      ko: "우리 가족만의 가장 재미있는 추억은 무엇인가요?",
      en: "What is the most fun memory of our family?"
    },
    category: "memory",
    difficulty: "medium",
    ageGroup: ["all"],
    tags: ["memory", "fun", "family"]
  },
  {
    questionText: {
      ko: "가족에게 전하고 싶은 사랑의 말은?",
      en: "What words of love would you like to tell your family?"
    },
    category: "emotion",
    difficulty: "medium",
    ageGroup: ["teenager", "adult"],
    tags: ["love", "emotion", "expression"]
  },
  {
    questionText: {
      ko: "10년 후 우리 가족은 어떤 모습일까요?",
      en: "What will our family look like in 10 years?"
    },
    category: "future",
    difficulty: "hard",
    ageGroup: ["teenager", "adult"],
    tags: ["future", "imagination", "planning"]
  },
  {
    questionText: {
      ko: "우리 가족만의 특별한 전통이나 규칙이 있나요?",
      en: "Does our family have any special traditions or rules?"
    },
    category: "values",
    difficulty: "medium",
    ageGroup: ["all"],
    tags: ["tradition", "values", "culture"]
  }
]);

print('MongoDB 초기화 완료!');

