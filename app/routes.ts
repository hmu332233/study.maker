// // react-router routes.ts는 프레임워크 사용 기준 필수 컴포넌트
// 어떤 페이지가 있는지 정의하는 파일
import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

// 여기서 정의
export default [
  index("common/pages/home.tsx"),
  // route("/minung", "features/minung/pages/index.tsx"),
  ...prefix("/products", [
    index("features/products/pages/index.tsx"),
    ...prefix("/leaderboards", [
      index("features/products/pages/leaderboards.tsx"),
      route("/yealy/:year", "features/products/pages/yealyLeaderboards.tsx"),
      route("/monthly/:year/:month", "features/products/pages/monthlyLeaderboards.tsx"),
      route("/weekly/:year/:month/:week", "features/products/pages/weeklyLeaderboards.tsx"),
      route("/daily/:year/:month/:day", "features/products/pages/dailyLeaderboards.tsx"),
    ]),
    ...prefix("/categories", [
      index("features/products/pages/categories.tsx"),
      // route("/:category", "features/products/pages/categories.tsx"),
    ]),
    route("/search", "features/products/pages/search.tsx"),
    route("/submit", "features/products/pages/submit.tsx"),
    route("/promote", "features/products/pages/promote.tsx"),
  ]),
] satisfies RouteConfig;