export interface Answer {
  text: string;
  photo?: string;
  voice?: string;
  drawing?: string;
  stickers?: string[];
  time: string;
  privacy?: 'all' | 'parents_only' | 'private';
  comment?: string;
}

export interface FamilyMember {
  name: string;
  age: number;
  role: string;
  emoji: string;
  ageGroup: 'child' | 'teenager' | 'adult' | 'senior';
  sampleAnswer: Answer;
}

export interface Question {
  text: string;
  category: 'daily' | 'memory' | 'emotion' | 'future' | 'values' | 'growth';
}

export interface Persona {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  gradient: string;
  members: FamilyMember[];
  sampleQuestion: Question;
  highlights: string[];
}

// 페르소나 1: 알콩달콩 신혼일기
export const newlywedPersona: Persona = {
  id: 'newlywed',
  title: '알콩달콩 신혼일기',
  subtitle: '2인 가족',
  emoji: '💑',
  description: '사랑이 넘치는 신혼부부의 일상 공유',
  gradient: 'from-pink-200 via-purple-200 to-pink-300',
  members: [
    {
      name: '준호',
      age: 28,
      role: '남편',
      emoji: '👨',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '오늘 퇴근길에 아내가 좋아하는 케이크를 사왔어요. 깜짝 선물에 기뻐하는 모습이 정말 예뻤어요 ❤️',
        time: '18:30'
      }
    },
    {
      name: '지은',
      age: 27,
      role: '아내',
      emoji: '👩',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '남편이 갑자기 제 최애 케이크를 사와서 깜짝 놀랐어요! 작은 것에도 행복한 우리 😊',
        time: '19:15',
        comment: '오빠 너무 고마워요 ❤️'
      }
    }
  ],
  sampleQuestion: {
    text: '오늘 상대방에게 고마웠던 순간은?',
    category: 'daily'
  },
  highlights: [
    '💕 서로를 향한 애정 표현',
    '📸 신혼 추억 아카이브',
    '💬 일상 소통 습관 형성'
  ]
};

// 페르소나 2: 어른이 되어 나누는 대화
export const adultChildPersona: Persona = {
  id: 'adult-child',
  title: '어른이 되어 나누는 대화',
  subtitle: '성인 자녀 + 부모',
  emoji: '🤝',
  description: '어른이 되어서야 이해하게 되는 부모님과의 진솔한 대화',
  gradient: 'from-blue-100 via-sky-100 to-blue-200',
  members: [
    {
      name: '아버지',
      age: 58,
      role: '아버지',
      emoji: '👨',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '회사 다닐 때는 너한테 제대로 된 아빠 노릇을 못한 것 같아 늘 미안했어.\n\n주말에도 일하느라 네 운동회도 못 가고... 그래도 너를 보면서 희망을 가졌단다. 지금 네가 이렇게 잘 자라준 게 정말 자랑스러워.',
        time: '21:00'
      }
    },
    {
      name: '어머니',
      age: 56,
      role: '어머니',
      emoji: '👩',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '민준아, 엄마도 너를 키우면서 많이 배웠어. 완벽한 엄마가 되려고 했는데 그게 오히려 너한테 부담이었을 수도 있겠다 싶더라.\n\n이제 어른이 된 네가 엄마 마음을 조금은 이해해줄 것 같아서 이런 얘기도 할 수 있게 됐네. 고마워.',
        time: '21:30'
      }
    },
    {
      name: '민준',
      age: 28,
      role: '아들',
      emoji: '👦',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '어렸을 때는 왜 아빠가 집에 안 계시는지, 엄마가 왜 그렇게 엄격한지 이해가 안 됐어요.\n\n근데 제가 사회생활 하면서 부모님이 얼마나 힘드셨을지 조금씩 알 것 같아요. 늦었지만 이렇게라도 대화할 수 있어서 좋아요. 사랑합니다.',
        time: '22:00'
      }
    }
  ],
  sampleQuestion: {
    text: '어른이 되고 나서 부모님을 이해하게 된 순간은?',
    category: 'emotion'
  },
  highlights: [
    '💬 세대를 넘어 진솔한 소통',
    '❤️ 늦었지만 나누는 이해와 공감',
    '🌱 함께 성장하는 가족 관계'
  ]
};

// 페르소나 3: 질풍노도 십대탐구
export const teenPersona: Persona = {
  id: 'teenager',
  title: '질풍노도 십대탐구',
  subtitle: '청소년 자녀 가족',
  emoji: '🎒',
  description: '사춘기 자녀와의 소통 다리 만들기',
  gradient: 'from-teal-200 via-cyan-200 to-teal-300',
  members: [
    {
      name: '준호',
      age: 42,
      role: '아빠',
      emoji: '👨',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '요즘 딸아이가 말수가 줄어서 걱정했는데, 이 앱으로 소통하니 속마음을 조금씩 알 수 있어서 좋네요.\n\n서연아, 학교에서 힘든 일 있으면 언제든 얘기해. 아빠가 들어줄게 ❤️',
        time: '21:30'
      }
    },
    {
      name: '지은',
      age: 40,
      role: '엄마',
      emoji: '👩',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '서연이가 오늘 답변 보니 생각이 많이 깊어졌더라고요. 우리 딸 이렇게 컸구나 싶어요.\n\n친구 관계에서 스트레스 받는다니 속상하네요. 주말에 맛있는 거 먹으러 가자!',
        time: '22:00',
        comment: '서연아 힘내! 엄마가 응원해 💪'
      }
    },
    {
      name: '서연',
      age: 16,
      role: '딸',
      emoji: '👧',
      ageGroup: 'teenager',
      sampleAnswer: {
        text: '학교에서 친구 문제로 스트레스 받았는데, 엄마한테 직접 말하긴 어렵고...\n\n여기 쓰니까 좀 나아지는 것 같아요. 말로 하면 울 것 같아서 이렇게라도 표현할 수 있어서 다행이에요.',
        privacy: 'parents_only',
        time: '23:15',
        comment: '고마워요 아빠 ㅠㅠ'
      }
    }
  ],
  sampleQuestion: {
    text: '요즘 가장 고민되는 일은?',
    category: 'emotion'
  },
  highlights: [
    '🔒 프라이버시 존중 소통',
    '💬 비대면 진솔한 대화',
    '🧠 자녀 내면 이해하기'
  ]
};

// 페르소나 4: 손주랑 나랑 세대공감
export const multigenerationPersona: Persona = {
  id: 'multigen',
  title: '손주랑 나랑 세대공감',
  subtitle: '조부모 포함 가족',
  emoji: '👵',
  description: '3세대가 함께 만드는 가족 역사',
  gradient: 'from-orange-100 via-amber-100 to-orange-200',
  members: [
    {
      name: '할머니',
      age: 72,
      role: '할머니',
      emoji: '👵',
      ageGroup: 'senior',
      sampleAnswer: {
        text: '우리 어렸을 때는 고무줄놀이가 제일 재밌었어. 동네 친구들이랑 학교 끝나면 해질 때까지 놀았지.\n\n요즘 애들은 스마트폰만 보지만, 우린 그때 밖에서 뛰어노느라고 집에 들어가기 싫을 정도였단다. 손주야, 할머니가 고무줄놀이 가르쳐줄까?',
        voice: '🎤 음성 답변 (1:23)',
        time: '16:00'
      }
    },
    {
      name: '지영',
      age: 45,
      role: '엄마',
      emoji: '👩',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '어머니께서 음성 답변 남기시는 걸 보니 제 어릴 적 추억이 떠오르네요.\n\n저도 초등학교 때 고무줄놀이 정말 좋아했어요. 친구들이랑 쉬는 시간마다 했던 기억이 나요. 아이들도 할머니 이야기 듣고 좋아해요!',
        time: '19:30'
      }
    },
    {
      name: '민서',
      age: 14,
      role: '손녀',
      emoji: '👧',
      ageGroup: 'teenager',
      sampleAnswer: {
        text: '할머니 목소리 들으니 옛날 이야기 들려주시던 게 생각나요.\n\n고무줄놀이가 뭔지 잘 모르겠지만 할머니가 겪으신 일들 더 듣고 싶어요! 주말에 할머니 댁에 놀러가서 같이 해봐요 😊',
        time: '20:45',
        comment: '할머니 가르쳐주세요! ❤️'
      }
    }
  ],
  sampleQuestion: {
    text: '어렸을 때 가장 좋아했던 놀이는?',
    category: 'memory'
  },
  highlights: [
    '🎤 음성 답변으로 쉬운 참여',
    '📖 가족 역사 아카이브',
    '💞 세대 간 이해와 존중'
  ]
};

export const allPersonas: Persona[] = [
  newlywedPersona,
  adultChildPersona,
  teenPersona,
  multigenerationPersona
];
