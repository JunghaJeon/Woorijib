// 화면 네비게이션
function navigateTo(screenId) {
    // 모든 화면 숨기기
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // 선택된 화면 보이기
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // 네비게이션 버튼 활성화 상태 업데이트
    updateNavigation(screenId);
}

function updateNavigation(screenId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // 현재 화면에 해당하는 네비게이션 버튼 활성화
    const mapping = {
        'question-screen': 0,
        'pet-screen': 1,
        'questions-list-screen': 2,
        'family-screen': 3
    };
    
    if (mapping[screenId] !== undefined) {
        const activeIndex = mapping[screenId];
        const allNavs = document.querySelectorAll('.bottom-nav');
        allNavs.forEach(nav => {
            const items = nav.querySelectorAll('.nav-item');
            if (items[activeIndex]) {
                items[activeIndex].classList.add('active');
            }
        });
    }
}

// 답변 입력 모달
function showAnswerInput() {
    const modal = document.getElementById('answer-modal');
    modal.classList.add('active');
}

function hideAnswerInput() {
    const modal = document.getElementById('answer-modal');
    modal.classList.remove('active');
}

function submitAnswer() {
    const input = document.getElementById('answer-input');
    const answerText = input.value.trim();
    
    if (!answerText) {
        alert('답변을 입력해주세요!');
        return;
    }
    
    // 현재 사용자 (데모에서는 김딸로 고정, 실제로는 로그인 사용자)
    const currentUser = {
        id: 'user_003',
        name: '김딸'
    };
    
    // 답변 저장
    const today = new Date().toDateString();
    questionManager.saveAnswer(today, currentUser.id, {
        text: answerText,
        userId: currentUser.id,
        userName: currentUser.name
    });
    
    // UI 업데이트
    updateAnswersDisplay();
    
    // 입력 초기화 및 모달 닫기
    input.value = '';
    hideAnswerInput();
    
    // 성공 메시지
    const pet = questionManager.getPet();
    showToast(`답변이 등록되었습니다! 우리펫이 성장했어요 🎉 (레벨 ${pet.level}, EXP ${pet.experience})`);
    
    // 우리펫 경험치 증가 애니메이션
    setTimeout(() => {
        growPet();
        updatePetDisplay();
    }, 1000);
}

// 답변 목록 업데이트
function updateAnswersDisplay() {
    const answersContainer = document.querySelector('.answers-container');
    if (!answersContainer) return;
    
    const today = new Date().toDateString();
    const todayAnswers = questionManager.getAnswersForDate(today);
    const family = questionManager.getFamily();
    
    answersContainer.innerHTML = '';
    
    // 가족 구성원별 답변 표시
    family.members.forEach(member => {
        const answer = todayAnswers[member.id];
        const answerDiv = document.createElement('div');
        
        if (answer) {
            answerDiv.className = 'answer-item';
            answerDiv.innerHTML = `
                <div class="answer-author">${member.name}</div>
                <div class="answer-text">${answer.text}</div>
                <div class="answer-time">${formatTime(answer.timestamp)}</div>
            `;
        } else {
            answerDiv.className = 'answer-item pending';
            answerDiv.innerHTML = `
                <div class="answer-author">${member.name}</div>
                <div class="answer-placeholder">아직 답변하지 않았어요</div>
            `;
        }
        
        answersContainer.appendChild(answerDiv);
    });
}

// 시간 포맷팅
function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000 / 60); // 분 단위
    
    if (diff < 1) return '방금 전';
    if (diff < 60) return `${diff}분 전`;
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}시간 전`;
    return date.toLocaleDateString('ko-KR');
}

// 오늘의 질문 표시 업데이트
function updateTodayQuestion() {
    const todayQuestion = questionManager.getTodayQuestion();
    const questionTextEl = document.querySelector('.question-text');
    const questionMetaEl = document.querySelector('.question-meta');
    
    if (questionTextEl) {
        questionTextEl.textContent = todayQuestion.common.text;
    }
    
    if (questionMetaEl) {
        const date = new Date(todayQuestion.timestamp);
        questionMetaEl.textContent = `#${todayQuestion.common.id}번째 질문 ${date.toLocaleDateString('ko-KR')}`;
    }
    
    // 답변 목록도 업데이트
    updateAnswersDisplay();
}

// 우리펫 디스플레이 업데이트
function updatePetDisplay() {
    const pet = questionManager.getPet();
    const petInfoEl = document.querySelector('.pet-info');
    
    if (petInfoEl) {
        petInfoEl.innerHTML = `
            <span>${questionManager.getFamily().name}</span> ❤️ <span>${pet.name}</span>
            <div>레벨 <strong>${pet.level}</strong> | 경험치 <strong>${pet.experience}</strong>/${pet.level * 100}</div>
        `;
    }
}

// 토스트 메시지
function showToast(message) {
    // 기존 토스트 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // 토스트 스타일 추가
    if (!document.querySelector('#toast-style')) {
        const style = document.createElement('style');
        style.id = 'toast-style';
        style.textContent = `
            .toast {
                position: fixed;
                bottom: 100px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                font-size: 15px;
                z-index: 2000;
                animation: toastIn 0.3s, toastOut 0.3s 2.7s;
            }
            
            @keyframes toastIn {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            
            @keyframes toastOut {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 우리펫 성장 애니메이션
function growPet() {
    const petCharacter = document.querySelector('.pet-character.main');
    if (petCharacter) {
        petCharacter.style.transform = 'translate(-50%, -50%) scale(1.2)';
        petCharacter.style.transition = 'transform 0.5s';
        
        setTimeout(() => {
            petCharacter.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);
    }
}

// 모달 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    const modal = document.getElementById('answer-modal');
    if (e.target === modal) {
        hideAnswerInput();
    }
});

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('우리집 웹 프로토타입이 로드되었습니다! 🏠');
    
    // 메뉴 화면으로 시작
    navigateTo('menu-screen');
    
    // 질문 및 답변 초기화
    updateTodayQuestion();
    updatePetDisplay();
    
    // 오전 8시 체크 (시뮬레이션)
    checkDailyQuestionTime();
});

// 매일 오전 8시 체크 시뮬레이션
function checkDailyQuestionTime() {
    const now = new Date();
    const hours = now.getHours();
    
    // 오전 8시에 새 질문 생성
    if (hours === 8) {
        questionManager.checkAndGenerateDailyQuestion();
        showToast('🌅 새로운 질문이 도착했어요!');
    }
    
    // 1분마다 체크 (실제로는 백엔드 스케줄러가 처리)
    setInterval(() => {
        const now = new Date();
        if (now.getHours() === 8 && now.getMinutes() === 0) {
            questionManager.checkAndGenerateDailyQuestion();
            updateTodayQuestion();
            showToast('🌅 새로운 질문이 도착했어요!');
        }
    }, 60000); // 1분마다 체크
}

// 테스트용: 새 질문 강제 생성
function forceNewQuestion() {
    const today = new Date().toDateString();
    questionManager.generateDailyQuestion(today);
    updateTodayQuestion();
    showToast('✨ 새로운 질문이 생성되었습니다!');
}

// 테스트용: 데이터 초기화
function resetAllData() {
    if (confirm('모든 데이터를 초기화하시겠습니까?')) {
        localStorage.clear();
        questionManager.init();
        updateTodayQuestion();
        updatePetDisplay();
        showToast('🔄 데이터가 초기화되었습니다!');
    }
}

// ===== 질문 데이터베이스 =====
const QUESTION_DATABASE = {
    // 연령별 질문 풀 - 🏡 우리 가족 마음의 문을 여는 질문
    all: [
        // ☀️ 가벼운 시작을 위한 질문
        { id: 1, text: "요즘 나를 가장 웃게 만드는 것은 무엇인가요?", category: "light" },
        { id: 2, text: "최근에 가장 즐겨 듣는 노래가 있다면 알려주세요.", category: "light" },
        { id: 3, text: "가장 좋아하는 계절과 그 이유는 무엇인가요?", category: "light" },
        { id: 4, text: "우리 가족을 동물 가족에 비유한다면 각각 어떤 동물일까요?", category: "light" },
        { id: 5, text: "다시 태어난다면 지금과 같은 가족 구성원으로 만나고 싶나요?", category: "light" },
        
        // 🌙 서로의 하루와 생각을 나누는 질문
        { id: 6, text: "오늘 하루를 색깔로 표현한다면 무슨 색인가요? 그 이유는요?", category: "daily" },
        { id: 7, text: "오늘 하루 중 가장 행복했던 순간은 언제였나요?", category: "daily" },
        { id: 8, text: "요즘 나를 가장 편안하게 해주는 것은 무엇인가요?", category: "daily" },
        
        // 🕰️ 과거를 돌아보며 추억을 쌓는 질문
        { id: 9, text: "우리 가족과 함께한 가장 행복했던 추억은 무엇인가요?", category: "memory" },
        { id: 10, text: "우리 가족이 함께 먹었던 음식 중 가장 기억에 남는 것은 무엇인가요?", category: "memory" },
        { id: 11, text: "내가 가장 어렸을 때의 기억은 무엇인가요?", category: "memory" },
        
        // ❤️ 고마움과 사랑을 표현하는 질문
        { id: 12, text: "최근 가족에게 고마웠던 순간이 있다면 언제였나요?", category: "gratitude" },
        { id: 13, text: "가족이 나에게 어떤 의미인지 한 단어로 표현한다면?", category: "gratitude" },
        { id: 14, text: "가족이라서 가장 좋았던 순간은 언제였나요?", category: "gratitude" },
        { id: 15, text: "내가 생각하는 우리 가족의 가장 큰 장점은 무엇인가요?", category: "gratitude" },
    ],
    
    child: [
        // 어린이에게 적합한 질문
        { id: 21, text: "만약 하루 동안 투명인간이 될 수 있다면 무엇을 하고 싶나요?", category: "light" },
        { id: 22, text: "최근에 본 영화나 드라마 중에 가장 기억에 남는 장면이 있나요?", category: "light" },
        { id: 23, text: "요즘 나를 가장 편안하게 해주는 것은 무엇인가요?", category: "daily" },
        { id: 24, text: "어릴 적 장래희망은 무엇이었나요?", category: "future" },
        { id: 25, text: "만약 복권에 당첨된다면 가장 먼저 무엇을 하고 싶나요?", category: "future" },
        { id: 26, text: "가족과 함께 꼭 해보고 싶은 버킷리스트가 있다면 무엇인가요?", category: "future" },
    ],
    
    teenager: [
        // 청소년에게 적합한 질문
        { id: 31, text: "요즘 가장 큰 고민거리가 있다면 무엇인가요?", category: "daily" },
        { id: 32, text: "최근 나에게 가장 힘이 되었던 말은 무엇이었나요?", category: "daily" },
        { id: 33, text: "스트레스를 받을 때 나만의 해소법이 있나요?", category: "daily" },
        { id: 34, text: "학창 시절, 나는 어떤 학생이었나요?", category: "memory" },
        { id: 35, text: "서로에게 가장 본받고 싶은 점은 무엇인가요?", category: "gratitude" },
        { id: 36, text: "앞으로 1년 안에 꼭 이루고 싶은 목표가 있나요?", category: "future" },
        { id: 37, text: "서로에게 힘이 되는 응원의 한마디를 해준다면?", category: "gratitude" },
    ],
    
    adult: [
        // 성인에게 적합한 질문
        { id: 41, text: "내 인생에서 가장 큰 영향을 준 사람이 있다면 누구인가요?", category: "memory" },
        { id: 42, text: "부모님의 어린 시절은 어땠는지 궁금해요.", category: "memory" },
        { id: 43, text: "내 인생에서 가장 중요하게 생각하는 가치 3가지는 무엇인가요?", category: "values" },
        { id: 44, text: "돈, 성공, 행복에 대해 어떻게 생각하나요?", category: "values" },
        { id: 45, text: "어떤 사람을 볼 때 '존경스럽다'고 느끼나요?", category: "values" },
        { id: 46, text: "우리 가족이 꼭 지켰으면 하는 약속이나 규칙이 있다면 무엇일까요?", category: "values" },
        { id: 47, text: "10년 전과 지금, 나의 가장 큰 변화는 무엇이라고 생각하나요?", category: "values" },
        { id: 48, text: "삶에서 가장 감사하게 생각하는 것은 무엇인가요?", category: "gratitude" },
        { id: 49, text: "우리 가족의 다음 목표는 무엇이면 좋을까요?", category: "future" },
        { id: 50, text: "10년 후, 우리 가족은 어떤 모습일지 상상해 본 적 있나요?", category: "future" },
    ],
    
    senior: [
        // 노년층에게 적합한 질문
        { id: 51, text: "내가 가장 어렸을 때의 기억은 무엇인가요?", category: "memory" },
        { id: 52, text: "평생 살면서 가장 소중하게 생각하는 가치는 무엇인가요?", category: "values" },
        { id: 53, text: "가족들에게 전하고 싶은 인생의 지혜가 있다면 무엇인가요?", category: "values" },
        { id: 54, text: "젊은 시절 가장 이루고 싶었던 꿈은 무엇이었나요?", category: "memory" },
        { id: 55, text: "은퇴 후 어떤 삶을 살고 싶은가요?", category: "future" },
        { id: 56, text: "우리 가족의 가장 큰 장점은 무엇이라고 생각하나요?", category: "gratitude" },
    ]
};

// ===== 질문 관리 시스템 =====
class QuestionManager {
    constructor() {
        this.storageKey = 'woorijib_questions';
        this.answersKey = 'woorijib_answers';
        this.familyKey = 'woorijib_family';
        this.init();
    }
    
    init() {
        // 초기 데이터 설정
        if (!localStorage.getItem(this.familyKey)) {
            this.setDefaultFamily();
        }
        
        // 오늘의 질문 확인 및 생성
        this.checkAndGenerateDailyQuestion();
    }
    
    setDefaultFamily() {
        const defaultFamily = {
            id: 'family_001',
            name: '김씨네 가족',
            members: [
                { id: 'user_001', name: '김아빠', age: 45, role: 'adult' },
                { id: 'user_002', name: '이엄마', age: 43, role: 'adult' },
                { id: 'user_003', name: '김딸', age: 15, role: 'teenager' },
                { id: 'user_004', name: '김아들', age: 10, role: 'child' }
            ]
        };
        localStorage.setItem(this.familyKey, JSON.stringify(defaultFamily));
    }
    
    getFamily() {
        return JSON.parse(localStorage.getItem(this.familyKey));
    }
    
    // 매일 오전 8시 질문 생성 시뮬레이션
    checkAndGenerateDailyQuestion() {
        const today = new Date().toDateString();
        const savedQuestions = this.getSavedQuestions();
        
        // 오늘 날짜의 질문이 없으면 생성
        if (!savedQuestions[today]) {
            this.generateDailyQuestion(today);
        }
    }
    
    getSavedQuestions() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {};
    }
    
    // 연령별 맞춤 질문 생성
    generateDailyQuestion(date) {
        const family = this.getFamily();
        const savedQuestions = this.getSavedQuestions();
        
        // 공통 질문 1개
        const commonQuestion = this.getRandomQuestion(QUESTION_DATABASE.all);
        
        // 각 가족 구성원별 맞춤 질문
        const personalizedQuestions = {};
        family.members.forEach(member => {
            const ageGroup = member.role;
            const questions = QUESTION_DATABASE[ageGroup] || QUESTION_DATABASE.all;
            personalizedQuestions[member.id] = this.getRandomQuestion(questions);
        });
        
        // 저장
        savedQuestions[date] = {
            date: date,
            timestamp: new Date().toISOString(),
            common: commonQuestion,
            personalized: personalizedQuestions
        };
        
        localStorage.setItem(this.storageKey, JSON.stringify(savedQuestions));
        
        return savedQuestions[date];
    }
    
    getRandomQuestion(questionPool) {
        const randomIndex = Math.floor(Math.random() * questionPool.length);
        return questionPool[randomIndex];
    }
    
    // 오늘의 질문 가져오기
    getTodayQuestion() {
        const today = new Date().toDateString();
        const savedQuestions = this.getSavedQuestions();
        return savedQuestions[today] || this.generateDailyQuestion(today);
    }
    
    // 답변 저장
    saveAnswer(questionDate, userId, answerData) {
        const answers = this.getSavedAnswers();
        
        if (!answers[questionDate]) {
            answers[questionDate] = {};
        }
        
        answers[questionDate][userId] = {
            ...answerData,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem(this.answersKey, JSON.stringify(answers));
        
        // 우리펫 경험치 증가
        this.addPetExperience(10);
        
        return true;
    }
    
    getSavedAnswers() {
        const saved = localStorage.getItem(this.answersKey);
        return saved ? JSON.parse(saved) : {};
    }
    
    // 특정 날짜의 답변 가져오기
    getAnswersForDate(date) {
        const answers = this.getSavedAnswers();
        return answers[date] || {};
    }
    
    // 우리펫 경험치 관리
    addPetExperience(exp) {
        const petKey = 'woorijib_pet';
        let pet = JSON.parse(localStorage.getItem(petKey)) || {
            name: '복실이',
            level: 1,
            experience: 0,
            happiness: 100
        };
        
        pet.experience += exp;
        
        // 레벨업 체크 (100 exp당 1레벨)
        if (pet.experience >= pet.level * 100) {
            pet.level += 1;
            pet.experience = pet.experience - (pet.level - 1) * 100;
            showToast(`🎉 우리펫이 레벨 ${pet.level}로 성장했어요!`);
        }
        
        localStorage.setItem(petKey, JSON.stringify(pet));
        return pet;
    }
    
    getPet() {
        const petKey = 'woorijib_pet';
        return JSON.parse(localStorage.getItem(petKey)) || {
            name: '복실이',
            level: 1,
            experience: 0,
            happiness: 100
        };
    }
}

// 전역 QuestionManager 인스턴스
const questionManager = new QuestionManager();

// 감정 이모지 선택 (추후 확장)
const emotions = [
    { emoji: '😊', label: '기쁨' },
    { emoji: '😔', label: '슬픔' },
    { emoji: '😤', label: '화남' },
    { emoji: '😰', label: '불안' },
    { emoji: '😌', label: '평온' }
];

// ===== 새로운 기능: 감정 체크인 =====
let selectedEmotion = null;

function selectEmotion(element, emoji, label) {
    // 이전 선택 해제
    document.querySelectorAll('.emotion-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // 새 선택 활성화
    element.classList.add('selected');
    selectedEmotion = { emoji, label };
}

async function submitEmotion() {
    if (!selectedEmotion) {
        showToast('😊 감정을 선택해주세요!');
        return;
    }

    const message = document.getElementById('emotion-message').value.trim();
    const currentUser = getCurrentUser();

    try {
        // Mock API 호출
        const response = await MockAPI.emotion.createEmotion({
            userId: currentUser.id,
            familyId: 'family_001',
            emotion: selectedEmotion.emoji,
            emotionLabel: selectedEmotion.label,
            message: message
        });

        if (response.success) {
            showToast(`${selectedEmotion.emoji} 감정이 기록되었습니다!`);

            // 입력 초기화
            selectedEmotion = null;
            document.getElementById('emotion-message').value = '';
            document.querySelectorAll('.emotion-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // 홈으로 이동
            setTimeout(() => {
                navigateTo('home-new-screen');
            }, 1500);
        }
    } catch (error) {
        console.error('감정 저장 실패:', error);
        showToast('❌ 감정 저장에 실패했습니다.');
    }
}

// ===== 새로운 기능: 앨범 =====
async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // 파일 크기 체크 (5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
        showToast('❌ 파일 크기는 5MB 이하여야 합니다.');
        return;
    }

    // 이미지 파일 타입 체크
    if (!file.type.startsWith('image/')) {
        showToast('❌ 이미지 파일만 업로드할 수 있습니다.');
        return;
    }

    showToast('📤 사진 업로드 중...');

    try {
        // Mock API 호출
        const response = await MockAPI.media.uploadImage(file);

        if (response.success) {
            showToast('✅ 사진이 업로드되었습니다!');

            // 앨범 그리드에 새 이미지 추가
            addImageToAlbum(response.data);
            updatePhotoCount();
        }
    } catch (error) {
        console.error('이미지 업로드 실패:', error);
        showToast('❌ 사진 업로드에 실패했습니다.');
    }
}

function addImageToAlbum(mediaData) {
    const albumGrid = document.getElementById('album-grid');

    const albumItem = document.createElement('div');
    albumItem.className = 'album-item';
    albumItem.innerHTML = `
        <img src="${mediaData.url}" alt="${mediaData.fileName}">
        <div class="album-item-overlay">방금 전</div>
    `;

    // 맨 앞에 추가
    albumGrid.insertBefore(albumItem, albumGrid.firstChild);
}

function updatePhotoCount() {
    const albumGrid = document.getElementById('album-grid');
    const count = albumGrid.children.length;
    const photoCountEl = document.getElementById('photo-count');
    if (photoCountEl) {
        photoCountEl.textContent = `(${count})`;
    }
}

// 현재 사용자 가져오기 헬퍼
function getCurrentUser() {
    // 실제로는 로그인된 사용자 정보를 가져옴
    const user = JSON.parse(localStorage.getItem('woorijib_current_user') || 'null');

    if (!user) {
        // 기본 사용자 (데모용)
        return {
            id: 'user_003',
            name: '김딸',
            email: 'daughter@example.com'
        };
    }

    return user;
}

// 로컬 스토리지에 답변 저장 (선택사항)
function saveAnswerToLocal(questionId, answer) {
    const answers = JSON.parse(localStorage.getItem('woorijib_answers') || '{}');
    answers[questionId] = {
        text: answer,
        timestamp: new Date().toISOString(),
        author: '김딸'
    };
    localStorage.setItem('woorijib_answers', JSON.stringify(answers));
}

// 키보드 단축키 (개발용)
document.addEventListener('keydown', (e) => {
    // Ctrl + 1~4: 화면 전환
    if (e.ctrlKey) {
        switch(e.key) {
            case '1':
                navigateTo('question-screen');
                break;
            case '2':
                navigateTo('pet-screen');
                break;
            case '3':
                navigateTo('questions-list-screen');
                break;
            case '4':
                navigateTo('family-screen');
                break;
        }
    }
});

