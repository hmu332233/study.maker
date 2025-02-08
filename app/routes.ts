// routes.ts 이름 고정
// 어떤 페이지가 있는지 정의하는 파일
import { type RouteConfig, index, route } from "@react-router/dev/routes";

// 여기서 정의
export default [index("routes/home.tsx"),
  route("/minung", "routes/minung.tsx"),
] satisfies RouteConfig;
