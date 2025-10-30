import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allPersonas } from '../data/personas';

type TabType = 'home' | 'question' | 'record' | 'family';

export default function AppDemo() {
  const { personaId } = useParams<{ personaId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const persona = allPersonas.find((p) => p.id === personaId);

  if (!persona) {
    navigate('/select');
    return null;
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* 헤더 */}
      <div className={`bg-gradient-to-r ${persona.gradient} p-4 shadow-sm flex-shrink-0`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">{persona.emoji} {persona.title}</h1>
            <p className="text-sm text-gray-700">{persona.subtitle}</p>
          </div>
          <button
            onClick={() => navigate(`/complete/${personaId}`)}
            className="bg-white text-purple-600 font-semibold px-4 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-all"
          >
            체험 완료
          </button>
        </div>
      </div>

      {/* 탭별 내용 영역 */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'home' && <HomeTabContent persona={persona} />}
        {activeTab === 'question' && <QuestionTabContent persona={persona} />}
        {activeTab === 'record' && <RecordTabContent persona={persona} />}
        {activeTab === 'family' && <FamilyTabContent persona={persona} />}
      </div>

      {/* 하단 탭 네비게이션 */}
      <div className="bg-white border-t border-gray-200 shadow-lg flex-shrink-0">
        <div className="flex justify-around items-center h-16">
          <TabButton
            icon="🏠"
            label="홈"
            active={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
          />
          <TabButton
            icon="💬"
            label="질문"
            active={activeTab === 'question'}
            onClick={() => setActiveTab('question')}
          />
          <TabButton
            icon="📋"
            label="기록"
            active={activeTab === 'record'}
            onClick={() => setActiveTab('record')}
          />
          <TabButton
            icon="👨‍👩‍👧‍👦"
            label="우리가족"
            active={activeTab === 'family'}
            onClick={() => setActiveTab('family')}
          />
        </div>
      </div>
    </div>
  );
}

// 탭 버튼 컴포넌트
function TabButton({ icon, label, active, onClick }: {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 px-3 py-2 transition-colors ${
        active ? 'text-purple-600' : 'text-gray-400'
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

// 홈 탭 내용
function HomeTabContent({ persona }: { persona: any }) {
  const [showPetModal, setShowPetModal] = useState(false);

  // 감정별 색상 배경
  const moodColors = [
    'bg-gradient-to-br from-pink-50 to-pink-100',
    'bg-gradient-to-br from-blue-50 to-blue-100',
    'bg-gradient-to-br from-green-50 to-green-100',
    'bg-gradient-to-br from-purple-50 to-purple-100',
  ];

  return (
    <div className="p-5 space-y-5">
      {/* 파몽이 - 상단으로 이동, 더 크고 귀엽게 */}
      <div
        onClick={() => setShowPetModal(true)}
        className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 shadow-sm cursor-pointer hover:shadow-md transition-all"
      >
        <div className="text-center">
          <div className="text-8xl mb-3 animate-bounce">🐶</div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">파몽이</h3>
          <p className="text-sm text-gray-600 mb-4">오늘도 모두 답변해주세요!</p>

          <div className="bg-white/70 rounded-2xl p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">건강도</span>
              <span className="text-sm font-bold text-amber-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-amber-400 to-orange-400 h-2.5 rounded-full transition-all" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 가족 감정 상태 - 카드 스타일 개선 */}
      <div className="bg-white rounded-3xl p-5 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-4">✨ 오늘 우리 가족은요</h2>
        <div className="space-y-3">
          {persona.members.map((member: any, idx: number) => (
            <div
              key={idx}
              className={`${moodColors[idx % moodColors.length]} rounded-2xl p-4 transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{member.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-800">{member.name}</p>
                    <p className="text-xs text-gray-600">{member.role} · {member.age}세</p>
                  </div>
                </div>
                <div className="text-center bg-white/70 rounded-xl px-3 py-2">
                  <span className="text-3xl block">😊</span>
                  <p className="text-xs text-gray-600 font-medium mt-1">기쁨</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 파몽이 모달 */}
      {showPetModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPetModal(false)}>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="text-9xl mb-4 animate-bounce">🐶</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">파몽이</h3>
              <p className="text-sm text-gray-600 mb-4">우리 가족의 소중한 친구</p>

              <div className="bg-white/80 rounded-2xl p-5 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-700">건강도</span>
                  <span className="text-xl font-bold text-amber-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 h-3 rounded-full transition-all" style={{ width: '85%' }}></div>
                </div>
                <div className="bg-amber-50 rounded-xl p-3">
                  <p className="text-sm text-gray-700">
                    오늘 <span className="font-bold text-amber-600">{persona.members.length}명</span> 중 <span className="font-bold text-amber-600">{persona.members.length}명</span> 답변 완료! 🎉
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-5">
                💬 모두 답변하면 파몽이가 더 행복해져요!
              </p>

              <button
                onClick={() => setShowPetModal(false)}
                className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 질문 탭 내용
function QuestionTabContent({ persona }: { persona: any }) {
  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 mb-1">📅 2024년 10월 30일</p>
          <h2 className="text-xl font-bold text-gray-800">💭 오늘의 질문</h2>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 mb-4">
          <p className="text-lg text-gray-800 font-medium text-center">
            {persona.sampleQuestion.text}
          </p>
        </div>
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl shadow-lg">
          💬 답변하기
        </button>
      </div>

      {/* 가족 답변 현황 */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">가족 답변 현황</h3>
        <div className="space-y-2">
          {persona.members.map((member: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{member.emoji}</span>
                <span className="font-medium text-gray-700">{member.name}</span>
              </div>
              <span className="text-green-500">✅ 완료</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 기록 탭 내용
function RecordTabContent({ persona }: { persona: any }) {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">📋 질문 기록</h2>

      {/* 오늘 질문 */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-sm text-purple-600 font-semibold">오늘</span>
            <p className="text-xs text-gray-500">2024.10.30</p>
          </div>
          <span className="text-green-500 text-sm font-semibold">✅ {persona.members.length}/{persona.members.length}</span>
        </div>
        <p className="text-gray-800 font-medium mb-3">{persona.sampleQuestion.text}</p>
        <div className="flex gap-2">
          {persona.members.map((member: any, idx: number) => (
            <span key={idx} className="text-2xl">{member.emoji}</span>
          ))}
        </div>
      </div>

      {/* 과거 질문들 */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-sm text-gray-600 font-semibold">어제</span>
            <p className="text-xs text-gray-500">2024.10.29</p>
          </div>
          <span className="text-green-500 text-sm font-semibold">✅ {persona.members.length}/{persona.members.length}</span>
        </div>
        <p className="text-gray-800 font-medium">오늘 가장 감사했던 순간은?</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-md">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-sm text-gray-600 font-semibold">그저께</span>
            <p className="text-xs text-gray-500">2024.10.28</p>
          </div>
          <span className="text-yellow-500 text-sm font-semibold">⏳ {persona.members.length - 1}/{persona.members.length}</span>
        </div>
        <p className="text-gray-800 font-medium">이번 주 가장 기억에 남는 일은?</p>
      </div>
    </div>
  );
}

// 우리가족 탭 내용
function FamilyTabContent({ persona }: { persona: any }) {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">👨‍👩‍👧‍👦 우리가족</h2>

      {/* 가족 구성원 */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-4">가족 구성원</h3>
        <div className="space-y-3">
          {persona.members.map((member: any, idx: number) => (
            <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <span className="text-4xl">{member.emoji}</span>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role} · {member.age}세</p>
              </div>
              <button className="text-purple-600 text-sm font-medium">수정</button>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 border-2 border-dashed border-gray-300 text-gray-500 py-3 rounded-lg hover:border-purple-400 hover:text-purple-600 transition-colors">
          + 가족 구성원 추가
        </button>
      </div>

      {/* 설정 */}
      <div className="bg-white rounded-2xl p-5 shadow-md">
        <h3 className="font-semibold text-gray-800 mb-4">설정</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="text-gray-700">🔔 알림 설정</span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="text-gray-700">🔒 프라이버시</span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="text-gray-700">❓ FAQ</span>
            <span className="text-gray-400">›</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <span className="text-gray-700">📧 고객지원</span>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
