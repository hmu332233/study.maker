import type { Route } from "./+types/minung";
import { Hero } from "../minung/hero";

// NOTE: meta는 페이지의 메타데이터를 정의하는 함수
// 꼭 root에만 있어야 하는 것은 아님
export function meta({}: Route.MetaArgs) {
  return [
    { title: "여기는 타이틀" },
    { name: "description", content: "Hello!" },
  ];
}

// NOTE: links는 미리 로드할 리소스를 정의하는 함수
// 꼭 root에만 있어야 하는 것은 아님
export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: "minung.css"}
];

export default function Minung() {
  return <Hero />;
}