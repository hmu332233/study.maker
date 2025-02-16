import type { Route } from "./+types/routes/minung";

export function loader({ request }: Route.LoaderArgs) {
  return {
    message: "Welcome to Minung's page"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

// NOTE: links는 미리 로드할 리소스를 정의하는 함수
// 꼭 root에만 있어야 하는 것은 아님
export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: "minung.css"}
];

// NOTE: meta는 페이지의 메타데이터를 정의하는 함수
// 꼭 root에만 있어야 하는 것은 아님
export function meta(): Route.MetaFunction {
  return [
    { title: "Minung's Page" },
    { description: "Welcome to Minung's personal page" }
  ];
}

export default function MinungPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Minung's Page</h1>
      <p>{loaderData.message}</p>
    </div>
  );
}
