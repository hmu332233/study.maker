// react-router root.tsx는 프레임워크 사용 기준 필수 컴포넌트
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

// NOTE: 이름 고정
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// NOTE: 이름 고정
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* meta에 있는 값이 랜더링되는 컴포넌트 */}
        <Meta />
        {/* links에 있는 값이 랜더링되는 컴포넌트 */}
        <Links />
      </head>
      <body>
        {/* NOTE: 기본적으로 export defualt 랜더링, 에러가 있으면 ErrorBoundary를 랜더링 */}
        {/* NOTE: 프레임워크 규칙 */}
        {children}

        {/* 스크롤 복구 컴포넌트, 페이지 뒤로 이동했을때 등 */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}


// NOTE: export default는 이름이 정해져있지 않아도 됨
export default function App() {
  return <Outlet />;
}


// NOTE: 이름 고정
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
