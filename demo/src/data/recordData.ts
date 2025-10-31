import { Question, Answer } from './personas';

export interface QuestionRecord {
  id: string;
  date: string;
  dateLabel: string; // "오늘", "어제", "10월 29일"
  question: Question;
  answers: {
    memberName: string;
    memberEmoji: string;
    answer: Answer;
  }[];
  completionRate: {
    completed: number;
    total: number;
  };
}

// 3세대 가족 (손주랑 나랑 세대공감) 샘플 기록 데이터
export const multigenerationRecords: QuestionRecord[] = [
  {
    id: 'q_2024_10_30',
    date: '2024.10.30',
    dateLabel: '오늘',
    question: {
      text: '어렸을 때 가장 좋아했던 놀이는?',
      category: 'memory'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '우리 어렸을 때는 고무줄놀이가 제일 재밌었어. 동네 친구들이랑 학교 끝나면 해질 때까지 놀았지.\n\n요즘 애들은 스마트폰만 보지만, 우린 그때 밖에서 뛰어노느라고 집에 들어가기 싫을 정도였단다. 손주야, 할머니가 고무줄놀이 가르쳐줄까?',
          voice: '🎤 음성 답변 (1:23)',
          time: '16:00'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '어머니께서 음성 답변 남기시는 걸 보니 제 어릴 적 추억이 떠오르네요.\n\n저도 초등학교 때 고무줄놀이 정말 좋아했어요. 친구들이랑 쉬는 시간마다 했던 기억이 나요. 아이들도 할머니 이야기 듣고 좋아해요!',
          time: '19:30'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '할머니 목소리 들으니 옛날 이야기 들려주시던 게 생각나요.\n\n고무줄놀이가 뭔지 잘 모르겠지만 할머니가 겪으신 일들 더 듣고 싶어요! 주말에 할머니 댁에 놀러가서 같이 해봐요 😊',
          time: '20:45',
          comment: '할머니 가르쳐주세요! ❤️'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_29',
    date: '2024.10.29',
    dateLabel: '어제',
    question: {
      text: '오늘 가장 감사했던 순간은?',
      category: 'daily'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '민서가 학교 다녀와서 제일 먼저 나한테 안기는 거. 그게 제일 감사하지.\n\n손주 얼굴만 봐도 힘이 나고 좋더라. 이 할멈이 무슨 복이 있다고 이렇게 예쁜 손주를 보나 싶어.',
          time: '18:20'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '어머니가 오늘 저녁 준비해주셔서 정말 감사했어요.\n\n회사 일이 너무 바빠서 힘들었는데, 집에 오니까 맛있는 저녁이 준비되어 있더라고요. 어머니 덕분에 우리 가족이 잘 지내는 것 같아요 ❤️',
          time: '21:00'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '할머니가 만들어주신 떡볶이가 진짜 세상에서 제일 맛있어요!!\n\n친구들한테 자랑했더니 다들 부러워했어요 ㅋㅋ 할머니표 떡볶이 최고 👍',
          stickers: ['❤️', '😋', '🍲', '👍'],
          time: '22:30'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_28',
    date: '2024.10.28',
    dateLabel: '그저께',
    question: {
      text: '이번 주 가장 기억에 남는 일은?',
      category: 'memory'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '일요일에 온 가족이 모여서 함께 식사한 거. 요즘은 다들 바빠서 자주 못 보는데 이렇게 다 같이 모이니 얼마나 좋은지.\n\n민서가 할머니 옆에 쪼르르 앉아서 밥 먹는 거 보니까 진짜 행복했어.',
          time: '15:45'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '주말에 가족 모임 정말 좋았어요. 어머니 음식 솜씨는 정말 따라갈 수가 없네요.\n\n민서가 어머니랑 같이 부엌에서 요리하는 거 보니까 저도 어릴 때 생각이 나더라고요. 이런 추억들이 쌓여가는 게 참 감사해요.',
          photo: '📸 가족식사.jpg',
          time: '20:15'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '할머니랑 같이 김치전 부친 거요! 처음에는 반죽이 너무 질척해서 실패할 뻔했는데 할머니가 비법 알려주셔서 성공했어요.\n\n친구들한테 사진 보냈더니 다들 맛있어 보인대요 ㅎㅎ',
          photo: '📸 김치전.jpg',
          stickers: ['👩‍🍳', '🥘', '😋'],
          time: '21:00',
          comment: '다음에 또 같이 해요!'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_27',
    date: '2024.10.27',
    dateLabel: '10월 27일',
    question: {
      text: '요즘 가장 기대되는 일은?',
      category: 'future'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '다음 주에 민서 학예회가 있다며? 그게 제일 기대돼.\n\n우리 손주가 무대에서 노래하고 춤추는 거 보면 얼마나 자랑스럽겠어. 카메라 준비해놨어.',
          time: '14:30'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '민서 학예회 정말 기대돼요! 몇 달 동안 연습한다고 고생했는데 드디어 보는구나.\n\n어머니랑 같이 가서 응원하기로 했어요. 민서야, 엄마가 제일 큰 박수 쳐줄게!',
          time: '19:00'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '학예회 진짜 떨려요 ㅠㅠ 그래도 할머니랑 엄마가 보러 온다니까 힘내서 잘해야겠어요!\n\n연습 엄청 많이 했으니까 실수 안 할 거예요. 화이팅!!',
          stickers: ['💪', '🎭', '🎤', '✨'],
          time: '22:00',
          comment: '응원해주세요!'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_26',
    date: '2024.10.26',
    dateLabel: '10월 26일',
    question: {
      text: '요즘 나를 행복하게 하는 것은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '아침에 일어나서 민서가 학교 가기 전에 "할머니 안녕히 계세요~" 하고 인사하는 거.\n\n그 목소리 듣는 게 하루의 시작이야. 요즘은 이 앱으로 가족들 일상도 알 수 있어서 더 좋아.',
          voice: '🎤 음성 답변 (0:58)',
          time: '16:00'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '퇴근하고 집에 오면 어머니가 항상 "수고했어" 하고 맞아주시는 거요.\n\n작은 말 한마디지만 하루 종일 쌓인 피로가 싹 풀리는 기분이에요. 정말 감사해요 어머니 ❤️',
          time: '21:30'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '할머니가 만들어주시는 간식이요! 매일매일 다른 걸 준비해주시는데 어떻게 그렇게 맛있는 걸 만드시는지 모르겠어요.\n\n오늘은 호떡 만들어주셨는데 친구들한테도 나눠줬어요 😊',
          stickers: ['🥞', '😋', '❤️', '👵'],
          time: '20:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_25',
    date: '2024.10.25',
    dateLabel: '10월 25일',
    question: {
      text: '가족에게 하고 싶은 말은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '지영아, 항상 일하느라 고생이 많구나. 엄마도 예전에 너를 키우면서 회사 다닐 때 정말 힘들었는데...\n\n넌 나보다 더 잘하고 있어. 민서도 잘 크고 있고. 너무 무리하지 말고, 엄마가 있으니까 언제든 기대.',
          time: '17:00'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '어머니... 어머니 말씀 보고 눈물이 났어요 ㅠㅠ\n\n정말 어머니 없으면 우리 가족 못 돌아가요. 민서도 저도 어머니 덕분에 행복하게 살고 있어요. 정말 사랑해요 어머니 ❤️',
          time: '22:00'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '할머니, 엄마 정말 사랑해요!! 💕\n\n할머니는 세상에서 제일 착하고, 엄마는 세상에서 제일 멋있어요. 저도 빨리 커서 할머니랑 엄마 도와드릴게요!',
          stickers: ['❤️', '💕', '😊', '👨‍👩‍👧', '🌟'],
          time: '22:30',
          comment: '우리 가족 최고!'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_24',
    date: '2024.10.24',
    dateLabel: '10월 24일',
    question: {
      text: '오늘 내가 잘한 일은?',
      category: 'growth'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '오늘 동네 친구들이랑 산책하면서 이 앱 이야기 자랑했어.\n\n요즘 젊은 것들이 만든 앱인데 나 같은 할매도 쉽게 쓸 수 있다고 했더니 다들 부러워하더라고. 스마트폰 잘 배워둔 보람이 있네.',
          time: '15:30'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '오늘 회의에서 제 아이디어가 채택됐어요! 몇 주 동안 준비한 보람이 있네요.\n\n팀장님이 칭찬해주셔서 기분이 너무 좋았어요. 집에 와서 어머니랑 민서한테 자랑했더니 박수 쳐줬어요 ㅎㅎ',
          time: '21:00'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '오늘 수학 시험에서 100점 받았어요!! 📝✨\n\n어제 할머니가 간식 주시면서 공부 열심히 하라고 하셨는데, 그 덕분에 힘내서 공부했어요. 할머니 감사해요!',
          photo: '📸 시험지.jpg',
          stickers: ['💯', '✨', '📚', '🎉'],
          time: '19:00',
          comment: '다음에도 100점 받을게요!'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_23',
    date: '2024.10.23',
    dateLabel: '10월 23일',
    question: {
      text: '내가 가장 소중히 여기는 가치는?',
      category: 'values'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '가족이지. 나는 평생 가족을 위해 살았어.\n\n젊었을 때는 힘들기도 했지만, 지금 이렇게 지영이랑 민서 보면 그때 고생이 다 보람으로 느껴져. 가족보다 소중한 건 없어.',
          voice: '🎤 음성 답변 (1:45)',
          time: '16:30'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '저도 어머니처럼 가족이 제일 소중해요.\n\n일도 중요하지만, 결국 돌아갈 곳은 가족이더라고요. 민서가 건강하게 잘 크고, 어머니가 건강하시면 그게 제일 큰 행복이에요.',
          time: '20:30'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '저는 할머니랑 엄마가 제일 소중해요!\n\n친구들도 중요하지만, 집에 오면 할머니랑 엄마가 기다리고 있다는 게 너무 좋아요. 우리 가족 영원히 함께 있었으면 좋겠어요 ❤️',
          stickers: ['👨‍👩‍👧', '❤️', '💕', '🏠'],
          time: '21:30'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_22',
    date: '2024.10.22',
    dateLabel: '10월 22일',
    question: {
      text: '오늘 기분을 색깔로 표현하면?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '따뜻한 주황색이야. 민서 웃는 얼굴 보니까 마음이 포근해져서.\n\n손주 키우는 재미가 이런 거구나 싶어. 요즘 날씨는 쌀쌀한데 마음만큼은 따뜻하네.',
          time: '17:00'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '오늘은 파란색이에요. 맑고 청명한 가을 하늘처럼 기분이 상쾌했어요.\n\n회사에서도 일이 잘 풀렸고, 저녁에 가족들이랑 산책도 했어요. 평온하고 좋은 하루였어요.',
          photo: '📸 가을하늘.jpg',
          time: '21:00'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '핑크색이요!! 오늘 친구한테 좋은 일이 있었거든요 ㅎㅎ\n\n그리고 할머니가 제가 제일 좋아하는 떡볶이 만들어주셔서 기분이 너무 좋았어요! 행복한 핑크색! 💗',
          stickers: ['💗', '💕', '🌸', '😊'],
          time: '22:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_21',
    date: '2024.10.21',
    dateLabel: '10월 21일',
    question: {
      text: '최근 새로 배운 것은?',
      category: 'growth'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '지영이가 스마트폰으로 영상통화 하는 법 가르쳐줬어.\n\n처음엔 어려울 줄 알았는데, 몇 번 해보니까 되더라고. 이제 시골 사는 친구들이랑 얼굴 보면서 통화할 수 있겠어.',
          time: '16:00'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '어머니한테 영상통화 가르쳐드렸는데, 금방 배우시더라고요!\n\n생각보다 디지털 기기도 잘 사용하셔서 놀랐어요. 이제 출장 가도 영상통화로 얼굴 볼 수 있겠어요 ❤️',
          time: '20:00'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '영어 단어 외우는 새로운 방법을 배웠어요!\n\n친구가 알려준 앱이 있는데 게임하면서 단어 외우는 거예요. 공부가 재미있어질 것 같아요 ㅎㅎ',
          stickers: ['📚', '✨', '💡', '😊'],
          time: '21:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_20',
    date: '2024.10.20',
    dateLabel: '10월 20일',
    question: {
      text: '오늘의 작은 행복은?',
      category: 'daily'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '할머니',
        memberEmoji: '👵',
        answer: {
          text: '아침에 민서가 학교 가면서 "할머니 사랑해요!" 하고 뽀뽀해준 거.\n\n그 한마디에 하루 종일 기분이 좋았어. 손주 사랑은 정말 특별해.',
          time: '18:00'
        }
      },
      {
        memberName: '지영',
        memberEmoji: '👩',
        answer: {
          text: '점심시간에 동료가 맛있는 빵 나눠줘서 같이 먹었어요.\n\n작은 것 같지만 바쁜 일상 속에서 이런 순간들이 힐링이 되더라고요. 감사한 하루였어요.',
          photo: '📸 카페.jpg',
          time: '19:30'
        }
      },
      {
        memberName: '민서',
        memberEmoji: '👧',
        answer: {
          text: '급식에 제가 제일 좋아하는 치킨이 나왔어요!! 🍗\n\n친구들이랑 같이 먹으면서 떠들었는데 너무 재밌었어요. 오늘 급식 최고!',
          stickers: ['🍗', '😋', '🎉', '👍'],
          time: '20:00',
          comment: '내일도 맛있는 거 나왔으면!'
        }
      }
    ]
  }
];

// 신혼부부 (알콩달콩 신혼일기) 기록 데이터
export const newlywedRecords: QuestionRecord[] = [
  {
    id: 'q_2024_10_30',
    date: '2024.10.30',
    dateLabel: '오늘',
    question: {
      text: '오늘 상대방에게 고마웠던 순간은?',
      category: 'daily'
    },
    completionRate: { completed: 2, total: 2 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '오늘 퇴근길에 아내가 좋아하는 케이크를 사왔어요. 깜짝 선물에 기뻐하는 모습이 정말 예뻤어요 ❤️',
          time: '18:30'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '남편이 갑자기 제 최애 케이크를 사와서 깜짝 놀랐어요! 작은 것에도 행복한 우리 😊',
          time: '19:15',
          comment: '오빠 너무 고마워요 ❤️'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_29',
    date: '2024.10.29',
    dateLabel: '어제',
    question: {
      text: '요즘 가장 설레는 순간은?',
      category: 'emotion'
    },
    completionRate: { completed: 2, total: 2 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '아침에 일어나면 옆에 아내가 자고 있는 게 아직도 믿기지 않아요. 매일 아침이 설레요 💕',
          time: '22:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '퇴근하고 집에 오면 "다녀왔어!"하고 맞아주는 남편 목소리. 이게 바로 행복이구나 싶어요 ❤️',
          time: '22:30'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_28',
    date: '2024.10.28',
    dateLabel: '그저께',
    question: {
      text: '신혼 생활에서 가장 좋은 점은?',
      category: 'daily'
    },
    completionRate: { completed: 2, total: 2 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '퇴근하고 집에 가면 누군가 기다리고 있다는 것. 혼자 살 때랑은 완전히 다른 기분이에요.',
          time: '21:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '함께 저녁 먹고, 드라마 보고, 이런저런 이야기 나누는 게 너무 좋아요. 매일이 데이트 같아요 💑',
          time: '21:30',
          stickers: ['💕', '😊', '🏠']
        }
      }
    ]
  },
  {
    id: 'q_2024_10_27',
    date: '2024.10.27',
    dateLabel: '10월 27일',
    question: {
      text: '주말에 함께 하고 싶은 것은?',
      category: 'future'
    },
    completionRate: { completed: 2, total: 2 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '아내랑 한강 자전거 타러 가고 싶어요. 날씨도 좋은데 함께 운동도 하고 데이트도 하고!',
          time: '19:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '저도 한강 좋아요! 그리고 맛있는 브런치 먹으러도 가요 🥐',
          time: '19:30',
          comment: '자전거 타고 브런치 먹으러 가자!'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_26',
    date: '2024.10.26',
    dateLabel: '10월 26일',
    question: {
      text: '결혼하고 나서 알게 된 상대방의 새로운 모습은?',
      category: 'growth'
    },
    completionRate: { completed: 2, total: 2 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '지은이가 생각보다 더 꼼꼼하고 계획적이에요. 덕분에 집안일이 체계적으로 돌아가요!',
          time: '20:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '준호 오빠가 의외로 요리를 잘해요! 주말에 같이 요리하는 게 너무 즐거워요 👨‍🍳',
          time: '20:30',
          stickers: ['👨‍🍳', '🍳', '😋']
        }
      }
    ]
  }
];

// 성인 자녀 + 부모 (어른이 되어 나누는 대화) 기록 데이터
export const adultChildRecords: QuestionRecord[] = [
  {
    id: 'q_2024_10_30',
    date: '2024.10.30',
    dateLabel: '오늘',
    question: {
      text: '어른이 되고 나서 부모님을 이해하게 된 순간은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '아버지',
        memberEmoji: '👨',
        answer: {
          text: '회사 다닐 때는 너한테 제대로 된 아빠 노릇을 못한 것 같아 늘 미안했어.\n\n주말에도 일하느라 네 운동회도 못 가고... 그래도 너를 보면서 희망을 가졌단다. 지금 네가 이렇게 잘 자라준 게 정말 자랑스러워.',
          time: '21:00'
        }
      },
      {
        memberName: '어머니',
        memberEmoji: '👩',
        answer: {
          text: '민준아, 엄마도 너를 키우면서 많이 배웠어. 완벽한 엄마가 되려고 했는데 그게 오히려 너한테 부담이었을 수도 있겠다 싶더라.\n\n이제 어른이 된 네가 엄마 마음을 조금은 이해해줄 것 같아서 이런 얘기도 할 수 있게 됐네. 고마워.',
          time: '21:30'
        }
      },
      {
        memberName: '민준',
        memberEmoji: '👦',
        answer: {
          text: '어렸을 때는 왜 아빠가 집에 안 계시는지, 엄마가 왜 그렇게 엄격한지 이해가 안 됐어요.\n\n근데 제가 사회생활 하면서 부모님이 얼마나 힘드셨을지 조금씩 알 것 같아요. 늦었지만 이렇게라도 대화할 수 있어서 좋아요. 사랑합니다.',
          time: '22:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_29',
    date: '2024.10.29',
    dateLabel: '어제',
    question: {
      text: '부모님께 하고 싶었지만 못했던 말은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '아버지',
        memberEmoji: '👨',
        answer: {
          text: '아빠도 잘 모르고 살았어. 그냥 가족 먹여 살리는 게 전부인 줄 알았지.\n\n너랑 이렇게 대화할 수 있다는 게 고맙구나. 앞으로는 더 자주 얘기하자.',
          time: '20:30'
        }
      },
      {
        memberName: '어머니',
        memberEmoji: '👩',
        answer: {
          text: '엄마도 완벽하지 않았어. 미안한 순간이 많았는데 말로 표현하지 못했네.\n\n민준아, 엄마도 너처럼 처음 부모가 된 거였어. 서툴렀던 것 이해해줘서 고마워.',
          time: '21:00'
        }
      },
      {
        memberName: '민준',
        memberEmoji: '👦',
        answer: {
          text: '사실 엄마 아빠한테 "사랑해요"라는 말을 제대로 해본 적이 없는 것 같아요.\n\n지금이라도 말씀드리고 싶어요. 저를 여기까지 키워주셔서 정말 감사하고 사랑합니다. ❤️',
          time: '22:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_28',
    date: '2024.10.28',
    dateLabel: '그저께',
    question: {
      text: '자녀를 키우면서 가장 행복했던 순간은?',
      category: 'memory'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '아버지',
        memberEmoji: '👨',
        answer: {
          text: '민준이가 대학 합격하고 전화로 "아빠 덕분이에요"라고 했을 때.\n\n그때 밤샘 야근하면서 학비 벌었던 게 다 보람으로 느껴지더라.',
          time: '19:00'
        }
      },
      {
        memberName: '어머니',
        memberEmoji: '👩',
        answer: {
          text: '네가 처음 사회생활 시작하고 첫 월급으로 우리 외식 시켜줬을 때.\n\n그때 정말 이 아이가 다 컸구나 싶어서 눈물이 났어.',
          time: '19:30'
        }
      },
      {
        memberName: '민준',
        memberEmoji: '👦',
        answer: {
          text: '부모님이 행복해하시는 모습 보면 저도 기뻐요.\n\n이제 제가 부모님을 더 챙겨드릴 수 있는 어른이 된 것 같아서 뿌듯해요.',
          time: '20:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_27',
    date: '2024.10.27',
    dateLabel: '10월 27일',
    question: {
      text: '함께 가고 싶은 곳은?',
      category: 'future'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '아버지',
        memberEmoji: '👨',
        answer: {
          text: '민준이랑 같이 등산 가고 싶네. 예전에 어렸을 때 같이 갔던 산에 다시 가보자.',
          time: '18:00'
        }
      },
      {
        memberName: '어머니',
        memberEmoji: '👩',
        answer: {
          text: '제주도 여행 가고 싶어. 가족 여행 오래 못 갔잖아. 민준이 일정 괜찮을 때 같이 가자.',
          time: '18:30'
        }
      },
      {
        memberName: '민준',
        memberEmoji: '👦',
        answer: {
          text: '제주도 정말 좋아요! 부모님이랑 여행 가는 거 정말 오래됐는데, 이번 기회에 꼭 가요! 🏝️',
          time: '21:00',
          stickers: ['✈️', '🏝️', '❤️']
        }
      }
    ]
  },
  {
    id: 'q_2024_10_26',
    date: '2024.10.26',
    dateLabel: '10월 26일',
    question: {
      text: '요즘 부모님께 감사한 점은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '아버지',
        memberEmoji: '👨',
        answer: {
          text: '민준이가 자주 전화해주는 것. 바쁠 텐데도 안부 챙겨주니까 고맙지.',
          time: '20:00'
        }
      },
      {
        memberName: '어머니',
        memberEmoji: '👩',
        answer: {
          text: '민준이가 이렇게 건강하게 잘 자라준 것만으로도 감사해.',
          time: '20:30'
        }
      },
      {
        memberName: '민준',
        memberEmoji: '👦',
        answer: {
          text: '혼자 살면서 집에 갈 때마다 반찬 챙겨주시는 것. 부모님 사랑 덕분에 잘 살고 있어요. 감사합니다.',
          time: '22:00'
        }
      }
    ]
  }
];

// 청소년 자녀 가족 (질풍노도 십대탐구) 기록 데이터
export const teenRecords: QuestionRecord[] = [
  {
    id: 'q_2024_10_30',
    date: '2024.10.30',
    dateLabel: '오늘',
    question: {
      text: '요즘 가장 고민되는 일은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '요즘 딸아이가 말수가 줄어서 걱정했는데, 이 앱으로 소통하니 속마음을 조금씩 알 수 있어서 좋네요.\n\n서연아, 학교에서 힘든 일 있으면 언제든 얘기해. 아빠가 들어줄게 ❤️',
          time: '21:30'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '서연이가 오늘 답변 보니 생각이 많이 깊어졌더라고요. 우리 딸 이렇게 컸구나 싶어요.\n\n친구 관계에서 스트레스 받는다니 속상하네요. 주말에 맛있는 거 먹으러 가자!',
          time: '22:00',
          comment: '서연아 힘내! 엄마가 응원해 💪'
        }
      },
      {
        memberName: '서연',
        memberEmoji: '👧',
        answer: {
          text: '학교에서 친구 문제로 스트레스 받았는데, 엄마한테 직접 말하긴 어렵고...\n\n여기 쓰니까 좀 나아지는 것 같아요. 말로 하면 울 것 같아서 이렇게라도 표현할 수 있어서 다행이에요.',
          privacy: 'parents_only',
          time: '23:15',
          comment: '고마워요 아빠 ㅠㅠ'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_29',
    date: '2024.10.29',
    dateLabel: '어제',
    question: {
      text: '오늘 기분이 좋았던 순간은?',
      category: 'daily'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '서연이가 저녁 먹으면서 학교 이야기 해주더라고요. 요즘 잘 안 그랬는데 오늘은 기분이 좋았나 봐요.',
          time: '22:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '서연이가 "엄마 오늘 요리 맛있어요"라고 해줘서 너무 기뻤어요. 칭찬 한마디에 힘이 나네요!',
          time: '22:30'
        }
      },
      {
        memberName: '서연',
        memberEmoji: '👧',
        answer: {
          text: '친구가 내 고민 들어줘서 기분이 좀 나아졌어요.\n\n그리고 집에 오니까 엄마가 제가 좋아하는 반찬 해놓으셨더라고요. 엄마 고마워요 ❤️',
          time: '23:00',
          stickers: ['❤️', '😊']
        }
      }
    ]
  },
  {
    id: 'q_2024_10_28',
    date: '2024.10.28',
    dateLabel: '그저께',
    question: {
      text: '부모님께 고마운 점은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '서연이가 이렇게 건강하게 잘 자라줘서 고마워요. 가끔 말 안 듣고 사춘기지만, 그래도 착한 우리 딸.',
          time: '21:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '서연이가 동생 잘 돌봐주는 게 정말 고마워요. 오빠로서 책임감도 생기고.',
          time: '21:30'
        }
      },
      {
        memberName: '서연',
        memberEmoji: '👧',
        answer: {
          text: '부모님이 제 얘기 들어주려고 노력하시는 게 보여요.\n\n잔소리처럼 느껴질 때도 있지만, 다 저를 걱정해서 그러시는 거 알아요. 사랑해요.',
          time: '23:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_27',
    date: '2024.10.27',
    dateLabel: '10월 27일',
    question: {
      text: '장래 희망이나 하고 싶은 일은?',
      category: 'future'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '서연이가 하고 싶은 거 하면서 행복하게 살았으면 좋겠어요. 아빠는 언제나 응원할게.',
          time: '20:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '서연이 꿈이 계속 바뀌는데, 그것도 다 과정이라고 생각해요. 천천히 찾아가면 돼.',
          time: '20:30'
        }
      },
      {
        memberName: '서연',
        memberEmoji: '👧',
        answer: {
          text: '아직 확실하게 정하진 못했지만, 사람들한테 도움이 되는 일을 하고 싶어요.\n\n상담사나 선생님 같은 거요. 아직 고민 중이에요.',
          time: '22:00'
        }
      }
    ]
  },
  {
    id: 'q_2024_10_26',
    date: '2024.10.26',
    dateLabel: '10월 26일',
    question: {
      text: '가족에게 하고 싶은 말은?',
      category: 'emotion'
    },
    completionRate: { completed: 3, total: 3 },
    answers: [
      {
        memberName: '준호',
        memberEmoji: '👨',
        answer: {
          text: '서연아, 아빠가 잔소리 많이 하지? 미안해. 그래도 다 너를 생각해서 그러는 거야. 사랑해.',
          time: '21:00'
        }
      },
      {
        memberName: '지은',
        memberEmoji: '👩',
        answer: {
          text: '서연아, 엄마도 완벽하지 않아. 가끔 화낼 때도 있지만, 너를 정말 사랑한다는 건 알아줬으면 좋겠어.',
          time: '21:30'
        }
      },
      {
        memberName: '서연',
        memberEmoji: '👧',
        answer: {
          text: '엄마 아빠, 저도 사랑해요. 가끔 짜증 낼 때도 있지만 속으로는 고마워하고 있어요.\n\n이런 말 직접 하기 부끄러워서 여기다 써요. 진심이에요 ❤️',
          time: '23:00',
          stickers: ['❤️', '💕', '🥰']
        }
      }
    ]
  }
];
