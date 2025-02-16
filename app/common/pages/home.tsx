import React from 'react';

interface HomePageProps {
  // 필요한 props가 있다면 여기에 정의
}

export function meta() {
  return [{ title: "홈 | Study Maker" }];
}

export default function HomePage({}: HomePageProps) {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Study Maker</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">메뉴</h2>
        <nav className="space-y-2">
          <a 
            href="/minung" 
            className="block p-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            민웅의 페이지로 이동
          </a>
          {/* 추가 메뉴 항목들은 여기에 */}
        </nav>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">최근 스터디</h2>
        <div className="grid gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-gray-600">아직 참여중인 스터디가 없습니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 