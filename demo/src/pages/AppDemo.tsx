import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allPersonas } from '../data/personas';
import {
  multigenerationRecords,
  newlywedRecords,
  adultChildRecords,
  teenRecords
} from '../data/recordData';

type TabType = 'home' | 'calendar' | 'record' | 'family';

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
      {/* 헤더 - Safe area 고려 */}
      <div className={`bg-gradient-to-r ${persona.gradient} px-4 pt-12 pb-3 shadow-sm flex-shrink-0`}>
        <div className="flex items-start justify-between gap-2">
          <h1 className="text-sm font-bold text-gray-800 leading-snug break-words flex-1">
            <span className="text-lg">{persona.emoji}</span> {persona.title}
          </h1>
          <button
            onClick={() => navigate(`/complete/${personaId}`)}
            className="bg-white text-purple-600 font-semibold px-2.5 py-1 rounded-lg text-xs shadow-sm hover:shadow-md transition-all flex-shrink-0 whitespace-nowrap"
          >
            체험 완료
          </button>
        </div>
      </div>

      {/* 탭별 내용 영역 */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'home' && <HomeTabContent persona={persona} />}
        {activeTab === 'calendar' && <CalendarTabContent persona={persona} />}
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
            icon="📅"
            label="캘린더"
            active={activeTab === 'calendar'}
            onClick={() => setActiveTab('calendar')}
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
    <div className="p-4 space-y-3">
      {/* 오늘의 질문 - 메인 포커스 */}
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 rounded-2xl p-4 shadow-md">
        <div className="text-center mb-3">
          <p className="text-xs text-purple-600 font-medium mb-1">📅 2024년 10월 30일</p>
          <h2 className="text-lg font-bold text-gray-800">💭 오늘의 질문</h2>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-3 shadow-sm">
          <p className="text-base text-gray-800 font-semibold text-center leading-relaxed">
            {persona.sampleQuestion.text}
          </p>
        </div>

        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
          💬 답변하기
        </button>
      </div>

      {/* 가족 감정 상태 - 작게 서브로 */}
      <div className="bg-white rounded-xl p-3 shadow-sm">
        <h3 className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1">
          <span>✨</span>
          <span>오늘 우리 가족은요</span>
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {persona.members.map((member: any, idx: number) => (
            <div
              key={idx}
              className={`${moodColors[idx % moodColors.length]} rounded-lg p-2 flex items-center justify-between`}
            >
              <p className="font-semibold text-gray-800 text-xs truncate flex-1">{member.name}</p>
              <span className="text-2xl ml-1">😊</span>
            </div>
          ))}
        </div>
      </div>

      {/* 파몽이 - 작게 서브로 */}
      <div
        onClick={() => setShowPetModal(true)}
        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 shadow-sm cursor-pointer hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-2">
          <div className="text-4xl">🐶</div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-gray-800">파몽이</h4>
            <p className="text-xs text-gray-600">모두 답변하면 더 행복해져요!</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-amber-600">85%</p>
          </div>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-amber-400 to-orange-400 h-1.5 rounded-full transition-all" style={{ width: '85%' }}></div>
          </div>
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

// 캘린더 탭 내용
function CalendarTabContent({ persona }: { persona: any }) {
  // 페르소나별 미션
  const getMissionsForPersona = () => {
    switch (persona.id) {
      case 'newlywed':
        return [
          { icon: '🍽️', text: '좋아하는 음식 함께 만들어 먹기', completed: false },
          { icon: '📸', text: '데이트 사진 찍고 추억 공유하기', completed: true },
          { icon: '💌', text: '서로에게 손편지 쓰기', completed: false }
        ];
      case 'adult-child':
        return [
          { icon: '🌅', text: '각자 찍은 하늘 사진 공유하기', completed: false },
          { icon: '📱', text: '부모님께 영상통화로 안부 전하기', completed: true },
          { icon: '☕', text: '부모님과 차 한잔 하며 대화하기', completed: false }
        ];
      case 'teenager':
        return [
          { icon: '🍕', text: '자녀가 좋아하는 음식 다 같이 만들어 먹기', completed: false },
          { icon: '📱', text: '부모님께 스마트폰 꿀팁 1가지 알려드리기', completed: true },
          { icon: '🎮', text: '가족 게임 대회 열기', completed: false }
        ];
      case 'multigen':
        return [
          { icon: '📖', text: '할머니 옛날 이야기 듣고 기록하기', completed: false },
          { icon: '🎨', text: '3세대가 함께 그림 그리기', completed: true },
          { icon: '🍪', text: '할머니와 손주가 함께 요리하기', completed: false }
        ];
      default:
        return [];
    }
  };

  const missions = getMissionsForPersona();

  // 10월 2024 캘린더 데이터
  const daysInMonth = 31;
  const firstDayOfWeek = 2; // 10월 1일은 화요일 (0=일, 1=월, 2=화)
  const today = 30;

  // 일정 데이터
  const events: { [key: number]: { title: string; type: 'family' | 'birthday' | 'trip' } } = {
    5: { title: '가족 여행', type: 'trip' },
    12: { title: '엄마 생일', type: 'birthday' },
    20: { title: '가족 모임', type: 'family' },
    25: { title: '할머니 생신', type: 'birthday' }
  };

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="p-4 space-y-4">
      {/* 이달의 미션 */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">🎯 이달의 가족 미션</h2>
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-semibold">
            {missions.filter(m => m.completed).length}/{missions.length} 완료
          </span>
        </div>
        <div className="space-y-2">
          {missions.map((mission, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                mission.completed
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <span className="text-2xl">{mission.icon}</span>
              <p className={`flex-1 text-sm ${mission.completed ? 'text-gray-500 line-through' : 'text-gray-800 font-medium'}`}>
                {mission.text}
              </p>
              {mission.completed ? (
                <span className="text-green-500 text-sm">✅</span>
              ) : (
                <button className="text-purple-600 text-xs font-semibold hover:text-purple-700">
                  시작하기
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 캘린더 */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">📅 10월 2024</h2>
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-gray-600">◀</button>
            <button className="text-gray-400 hover:text-gray-600">▶</button>
          </div>
        </div>

        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day, idx) => (
            <div key={idx} className="text-center text-xs font-semibold text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7 gap-1">
          {/* 빈 칸 (첫째 주 시작 전) */}
          {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
            <div key={`empty-${idx}`} className="aspect-square"></div>
          ))}

          {/* 날짜 */}
          {Array.from({ length: daysInMonth }).map((_, idx) => {
            const day = idx + 1;
            const event = events[day];
            const isToday = day === today;

            return (
              <div
                key={day}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm relative ${
                  isToday
                    ? 'bg-purple-500 text-white font-bold'
                    : event
                    ? 'bg-blue-50 text-gray-800 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-xs">{day}</span>
                {event && !isToday && (
                  <div className="absolute bottom-0.5">
                    <div className={`w-1 h-1 rounded-full ${
                      event.type === 'birthday' ? 'bg-pink-500' :
                      event.type === 'trip' ? 'bg-blue-500' :
                      'bg-green-500'
                    }`}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 이벤트 범례 */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-600 mb-2">예정된 일정</p>
          <div className="space-y-1.5">
            {Object.entries(events).map(([day, event]) => (
              <div key={day} className="flex items-center gap-2 text-xs">
                <div className={`w-2 h-2 rounded-full ${
                  event.type === 'birthday' ? 'bg-pink-500' :
                  event.type === 'trip' ? 'bg-blue-500' :
                  'bg-green-500'
                }`}></div>
                <span className="text-gray-600">{day}일</span>
                <span className="text-gray-800 font-medium">{event.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 일정 추가 버튼 */}
        <button className="w-full mt-4 border-2 border-dashed border-gray-300 text-gray-500 py-3 rounded-lg hover:border-purple-400 hover:text-purple-600 transition-colors text-sm font-medium">
          + 새 일정 추가
        </button>
      </div>
    </div>
  );
}

// 기록 탭 내용
function RecordTabContent({ persona }: { persona: any }) {
  const [expandedRecordId, setExpandedRecordId] = useState<string | null>(null);

  // 페르소나에 맞는 기록 데이터 가져오기
  const getRecordsForPersona = () => {
    switch (persona.id) {
      case 'multigen':
        return multigenerationRecords;
      case 'newlywed':
        return newlywedRecords;
      case 'adult-child':
        return adultChildRecords;
      case 'teenager':
        return teenRecords;
      default:
        // 기본 fallback
        return [
          {
            id: 'q_today',
            date: '2024.10.30',
            dateLabel: '오늘',
            question: persona.sampleQuestion,
            completionRate: { completed: persona.members.length, total: persona.members.length },
            answers: persona.members.map((m: any) => ({
              memberName: m.name,
              memberEmoji: m.emoji,
              answer: m.sampleAnswer
            }))
          }
        ];
    }
  };

  const records = getRecordsForPersona();

  const toggleRecord = (recordId: string) => {
    setExpandedRecordId(expandedRecordId === recordId ? null : recordId);
  };

  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-gray-800">📋 우리 가족 이야기</h2>
        <span className="text-sm text-gray-500">{records.length}개의 기록</span>
      </div>

      {records.map((record) => (
        <div key={record.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
          {/* 질문 헤더 - 클릭 가능 */}
          <div
            onClick={() => toggleRecord(record.id)}
            className="p-3 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-gray-500">{record.date}</p>
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">👥</span>
                <span className={`text-xs font-semibold ${
                  record.completionRate.completed === record.completionRate.total
                    ? 'text-green-500'
                    : 'text-yellow-500'
                }`}>
                  {record.completionRate.completed}/{record.completionRate.total}
                </span>
                <span className={`text-gray-400 text-xs transition-transform ${expandedRecordId === record.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </div>
            <p className="text-gray-800 font-medium text-sm">{record.question.text}</p>
          </div>

          {/* 답변 상세 - 확장 시 표시 */}
          {expandedRecordId === record.id && record.answers.length > 0 && (
            <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
              <div className="p-5 space-y-4">
                <h3 className="text-sm font-bold text-gray-700 mb-3">💬 가족 답변</h3>
                {record.answers.map((answerData: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    {/* 답변자 정보 */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">{answerData.memberEmoji}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{answerData.memberName}</p>
                        <p className="text-xs text-gray-500">{answerData.answer.time}</p>
                      </div>
                      {answerData.answer.privacy && (
                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                          🔒 {answerData.answer.privacy === 'parents_only' ? '부모만' : '비공개'}
                        </span>
                      )}
                    </div>

                    {/* 답변 텍스트 */}
                    <div className="mb-3">
                      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {answerData.answer.text}
                      </p>
                    </div>

                    {/* 음성 답변 */}
                    {answerData.answer.voice && (
                      <div className="mb-3">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 flex items-center gap-2">
                          <span className="text-purple-600">{answerData.answer.voice}</span>
                        </div>
                      </div>
                    )}

                    {/* 사진 */}
                    {answerData.answer.photo && (
                      <div className="mb-3">
                        <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-2">
                          <span className="text-blue-600">{answerData.answer.photo}</span>
                        </div>
                      </div>
                    )}

                    {/* 스티커 */}
                    {answerData.answer.stickers && answerData.answer.stickers.length > 0 && (
                      <div className="mb-3">
                        <div className="flex gap-2 flex-wrap">
                          {answerData.answer.stickers.map((sticker: string, sIdx: number) => (
                            <span key={sIdx} className="text-2xl">{sticker}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 댓글 */}
                    {answerData.answer.comment && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm text-gray-600 italic">
                          💭 {answerData.answer.comment}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* 더보기 버튼 (향후 확장용) */}
      <button className="w-full py-3 text-gray-500 text-sm hover:text-purple-600 transition-colors">
        더 많은 기록 보기 →
      </button>
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
