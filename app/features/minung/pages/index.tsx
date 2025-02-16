import React from 'react';
import type { Route } from "../../../+types/features/minung";

export function loader({}: Route.LoaderArgs) {
  return {
    title: "Minung's Page"
  };
}

export function meta({}: Route.MetaFunction) {
  return [{ title: "Minung | Study Maker" }];
}

interface MinungPageProps {
  // 필요한 props가 있다면 여기에 정의
}

export default function MinungPage({}: MinungPageProps) {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">민웅의 페이지</h1>
      <div>
        <p>이곳은 민웅의 페이지입니다.</p>
      </div>
    </div>
  );
}