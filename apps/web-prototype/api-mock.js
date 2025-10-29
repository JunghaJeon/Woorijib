/**
 * Mock API Layer - 우리집 프로토타입
 * 실제 백엔드 서비스를 시뮬레이션하는 API 레이어
 */

// API 응답 시뮬레이션을 위한 딜레이
const API_DELAY = 300;

// Mock 데이터 저장소
const mockStore = {
    users: [],
    families: [],
    questions: [],
    answers: [],
    pets: [],
    emotions: [],
    media: []
};

// API 응답 포맷터
const apiResponse = (data, success = true, message = '') => ({
    success,
    data,
    message,
    timestamp: new Date().toISOString()
});

// 딜레이 헬퍼
const delay = (ms = API_DELAY) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Auth Service Mock
 */
const authAPI = {
    async signIn(email, password) {
        await delay();

        // localStorage에서 사용자 확인
        const users = JSON.parse(localStorage.getItem('woorijib_users') || '[]');
        const user = users.find(u => u.email === email);

        if (!user) {
            return apiResponse(null, false, '사용자를 찾을 수 없습니다.');
        }

        // 토큰 생성 (실제로는 JWT)
        const accessToken = `mock_access_token_${Date.now()}`;
        const refreshToken = `mock_refresh_token_${Date.now()}`;

        localStorage.setItem('woorijib_access_token', accessToken);
        localStorage.setItem('woorijib_refresh_token', refreshToken);
        localStorage.setItem('woorijib_current_user', JSON.stringify(user));

        return apiResponse({
            user,
            accessToken,
            refreshToken
        });
    },

    async signUp(userData) {
        await delay();

        const users = JSON.parse(localStorage.getItem('woorijib_users') || '[]');

        // 이메일 중복 체크
        if (users.find(u => u.email === userData.email)) {
            return apiResponse(null, false, '이미 존재하는 이메일입니다.');
        }

        const newUser = {
            id: `user_${Date.now()}`,
            ...userData,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('woorijib_users', JSON.stringify(users));

        return apiResponse(newUser);
    },

    async signOut() {
        await delay();

        localStorage.removeItem('woorijib_access_token');
        localStorage.removeItem('woorijib_refresh_token');
        localStorage.removeItem('woorijib_current_user');

        return apiResponse(null, true, '로그아웃되었습니다.');
    },

    async getMe() {
        await delay();

        const user = JSON.parse(localStorage.getItem('woorijib_current_user') || 'null');

        if (!user) {
            return apiResponse(null, false, '인증이 필요합니다.');
        }

        return apiResponse(user);
    }
};

/**
 * Family Service Mock
 */
const familyAPI = {
    async getFamilies() {
        await delay();

        const families = JSON.parse(localStorage.getItem('woorijib_families') || '[]');
        return apiResponse(families);
    },

    async getFamily(familyId) {
        await delay();

        const families = JSON.parse(localStorage.getItem('woorijib_families') || '[]');
        const family = families.find(f => f.id === familyId);

        if (!family) {
            return apiResponse(null, false, '가족을 찾을 수 없습니다.');
        }

        return apiResponse(family);
    },

    async createFamily(familyData) {
        await delay();

        const families = JSON.parse(localStorage.getItem('woorijib_families') || '[]');

        const newFamily = {
            id: `family_${Date.now()}`,
            ...familyData,
            members: [],
            createdAt: new Date().toISOString()
        };

        families.push(newFamily);
        localStorage.setItem('woorijib_families', JSON.stringify(families));

        return apiResponse(newFamily);
    },

    async addMember(familyId, memberData) {
        await delay();

        const families = JSON.parse(localStorage.getItem('woorijib_families') || '[]');
        const familyIndex = families.findIndex(f => f.id === familyId);

        if (familyIndex === -1) {
            return apiResponse(null, false, '가족을 찾을 수 없습니다.');
        }

        const newMember = {
            id: `member_${Date.now()}`,
            ...memberData,
            joinedAt: new Date().toISOString()
        };

        families[familyIndex].members.push(newMember);
        localStorage.setItem('woorijib_families', JSON.stringify(families));

        return apiResponse(newMember);
    }
};

/**
 * Question Service Mock
 */
const questionAPI = {
    async getDailyQuestion(familyId) {
        await delay();

        const questions = JSON.parse(localStorage.getItem('woorijib_questions') || '{}');
        const today = new Date().toDateString();

        return apiResponse(questions[today] || null);
    },

    async getQuestions(params = {}) {
        await delay();

        const questions = JSON.parse(localStorage.getItem('woorijib_questions') || '{}');
        const questionList = Object.values(questions);

        return apiResponse(questionList);
    },

    async createAnswer(questionId, answerData) {
        await delay();

        const answers = JSON.parse(localStorage.getItem('woorijib_answers') || '{}');
        const today = new Date().toDateString();

        if (!answers[today]) {
            answers[today] = {};
        }

        const newAnswer = {
            id: `answer_${Date.now()}`,
            questionId,
            ...answerData,
            timestamp: new Date().toISOString()
        };

        answers[today][answerData.userId] = newAnswer;
        localStorage.setItem('woorijib_answers', JSON.stringify(answers));

        return apiResponse(newAnswer);
    },

    async addReaction(answerId, reactionType) {
        await delay();

        // 실제로는 reactions 테이블에 저장
        const reaction = {
            id: `reaction_${Date.now()}`,
            answerId,
            type: reactionType,
            userId: 'current_user',
            timestamp: new Date().toISOString()
        };

        return apiResponse(reaction);
    }
};

/**
 * Pet Service Mock
 */
const petAPI = {
    async getFamilyPet(familyId) {
        await delay();

        const pet = JSON.parse(localStorage.getItem('woorijib_pet') || 'null');

        if (!pet) {
            // 기본 펫 생성
            const defaultPet = {
                id: `pet_${Date.now()}`,
                familyId,
                name: '복실이',
                level: 1,
                experience: 0,
                happiness: 100,
                hunger: 50,
                createdAt: new Date().toISOString()
            };

            localStorage.setItem('woorijib_pet', JSON.stringify(defaultPet));
            return apiResponse(defaultPet);
        }

        return apiResponse(pet);
    },

    async interact(petId, interactionType) {
        await delay();

        const pet = JSON.parse(localStorage.getItem('woorijib_pet'));

        // 상호작용 타입별 처리
        switch (interactionType) {
            case 'feed':
                pet.hunger = Math.max(0, pet.hunger - 20);
                pet.experience += 5;
                break;
            case 'pet':
                pet.happiness = Math.min(100, pet.happiness + 10);
                pet.experience += 3;
                break;
            case 'play':
                pet.happiness = Math.min(100, pet.happiness + 15);
                pet.hunger = Math.min(100, pet.hunger + 10);
                pet.experience += 10;
                break;
        }

        // 레벨업 체크
        const requiredExp = pet.level * 100;
        if (pet.experience >= requiredExp) {
            pet.level += 1;
            pet.experience -= requiredExp;
        }

        localStorage.setItem('woorijib_pet', JSON.stringify(pet));

        return apiResponse({
            pet,
            message: getInteractionMessage(interactionType),
            expGained: interactionType === 'feed' ? 5 : interactionType === 'pet' ? 3 : 10
        });
    }
};

/**
 * Emotion Service Mock
 */
const emotionAPI = {
    async createEmotion(emotionData) {
        await delay();

        const emotions = JSON.parse(localStorage.getItem('woorijib_emotions') || '[]');

        const newEmotion = {
            id: `emotion_${Date.now()}`,
            ...emotionData,
            timestamp: new Date().toISOString()
        };

        emotions.push(newEmotion);
        localStorage.setItem('woorijib_emotions', JSON.stringify(emotions));

        return apiResponse(newEmotion);
    },

    async getFamilyEmotions(familyId, date) {
        await delay();

        const emotions = JSON.parse(localStorage.getItem('woorijib_emotions') || '[]');
        const targetDate = date || new Date().toDateString();

        const filteredEmotions = emotions.filter(e =>
            e.familyId === familyId &&
            new Date(e.timestamp).toDateString() === targetDate
        );

        return apiResponse(filteredEmotions);
    },

    async getDailyEmotion(userId) {
        await delay();

        const emotions = JSON.parse(localStorage.getItem('woorijib_emotions') || '[]');
        const today = new Date().toDateString();

        const emotion = emotions.find(e =>
            e.userId === userId &&
            new Date(e.timestamp).toDateString() === today
        );

        return apiResponse(emotion || null);
    }
};

/**
 * Media Service Mock
 */
const mediaAPI = {
    async uploadImage(file) {
        await delay(1000); // 업로드는 더 오래 걸림

        // 실제로는 S3에 업로드하지만, 여기서는 Base64로 변환
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const media = JSON.parse(localStorage.getItem('woorijib_media') || '[]');

                const newMedia = {
                    id: `media_${Date.now()}`,
                    type: 'image',
                    url: e.target.result,
                    thumbnailUrl: e.target.result,
                    fileName: file.name,
                    fileSize: file.size,
                    uploadedBy: 'current_user',
                    uploadedAt: new Date().toISOString()
                };

                media.push(newMedia);
                localStorage.setItem('woorijib_media', JSON.stringify(media));

                resolve(apiResponse(newMedia));
            };
            reader.readAsDataURL(file);
        });
    },

    async getMedia(albumId) {
        await delay();

        const media = JSON.parse(localStorage.getItem('woorijib_media') || '[]');

        if (albumId) {
            return apiResponse(media.filter(m => m.albumId === albumId));
        }

        return apiResponse(media);
    },

    async deleteMedia(mediaId) {
        await delay();

        const media = JSON.parse(localStorage.getItem('woorijib_media') || '[]');
        const filtered = media.filter(m => m.id !== mediaId);

        localStorage.setItem('woorijib_media', JSON.stringify(filtered));

        return apiResponse(null, true, '미디어가 삭제되었습니다.');
    }
};

// 헬퍼 함수들
function getInteractionMessage(type) {
    const messages = {
        feed: ['맛있게 먹고 있어요! 😋', '냠냠! 고마워요! 🍖', '배가 부르네요~ 😊'],
        pet: ['기분이 좋아요! 😄', '더 쓰다듬어 주세요! 🥰', '행복해요~ 💕'],
        play: ['정말 재미있어요! 🎉', '같이 놀아줘서 고마워요! 🎮', '신나요! 더 놀아요! 🎪']
    };

    const messageList = messages[type] || messages.play;
    return messageList[Math.floor(Math.random() * messageList.length)];
}

// API 객체 내보내기
const MockAPI = {
    auth: authAPI,
    family: familyAPI,
    question: questionAPI,
    pet: petAPI,
    emotion: emotionAPI,
    media: mediaAPI
};

// 전역으로 노출
if (typeof window !== 'undefined') {
    window.MockAPI = MockAPI;
}

console.log('🎭 Mock API Layer가 로드되었습니다!');
