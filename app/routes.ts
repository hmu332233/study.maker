// // react-router routes.ts는 프레임워크 사용 기준 필수 컴포넌트
// 어떤 페이지가 있는지 정의하는 파일
import { type RouteConfig, index, route } from "@react-router/dev/routes";

// 여기서 정의
export default [
  index("common/pages/home.tsx"),
  route("/minung", "features/minung/pages/index.tsx"),
] satisfies RouteConfig;