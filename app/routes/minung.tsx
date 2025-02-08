import type { Route } from "./+types/home";
import { Hero } from "../minung/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "여기는 타이틀" },
    { name: "description", content: "Hello!" },
  ];
}

export default function Minung() {
  return <Hero />;
}