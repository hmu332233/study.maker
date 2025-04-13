import { Link, redirect type MetaFunction } from "react-router";
import type { Route } from "./+types/index";

// NOTE: UI가 없어도 loader를 실행할 수 있음
// redirect 등 서버에서 처리하는 로직을 작성할 수 있음
export function loader() {
  return redirect("/products/leaderboards");
}