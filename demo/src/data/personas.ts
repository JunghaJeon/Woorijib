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

// 페르소나 2: 우리아이 성장앨범
export const infantPersona: Persona = {
  id: 'infant',
  title: '우리아이 성장앨범',
  subtitle: '영유아 자녀 가족',
  emoji: '👶',
  description: '아이의 소중한 첫걸음을 기록하는 가족',
  gradient: 'from-blue-100 via-sky-100 to-blue-200',
  members: [
    {
      name: '엄마',
      age: 32,
      role: '엄마',
      emoji: '👩',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '오늘 처음으로 "엄마"라고 불렀어요! 눈물이 날 만큼 감동이었어요 😭❤️\n\n아침에 기저귀 갈아주다가 갑자기 "엄마~" 하는 소리가 들려서 깜짝 놀랐어요. 몇 번이고 다시 불러달라고 했답니다.',
        time: '14:20'
      }
    },
    {
      name: '아빠',
      age: 34,
      role: '아빠',
      emoji: '👨',
      ageGroup: 'adult',
      sampleAnswer: {
        text: '아내한테 영상 받았는데 정말 기적 같은 순간이네요. 퇴근하자마자 달려갑니다!\n\n나도 지우야 "아빠" 불러줄 날 기대하면서 오늘도 열심히 일했어요 ㅎㅎ',
        time: '15:40',
        comment: '지은이 고생 많았어요 👏'
      }
    },
    {
      name: '지우',
      age: 2,
      role: '아이',
      emoji: '👶',
      ageGroup: 'child',
      sampleAnswer: {
        text: '(엄마가 대신 작성)\n오늘은 처음으로 "엄마"라고 말했어요!\n그리고 혼자서 컵에 있는 물도 마셨답니다 👏',
        stickers: ['⭐', '❤️', '😊', '👶'],
        time: '20:00'
      }
    }
  ],
  sampleQuestion: {
    text: '오늘 아이가 새로 배운 것은?',
    category: 'growth'
  },
  highlights: [
    '📸 성장 순간 실시간 기록',
    '👨‍👩‍👧 부모 협력 육아 일지',
    '🎨 그림/스티커로 아이 참여'
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
  infantPersona,
  teenPersona,
  multigenerationPersona
];
