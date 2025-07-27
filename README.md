# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.


---

## structure

- features base structure
  - common (공통)
    - components
    - hooks
    - utils
  - features (기능/도메인별)
    - feature1
      - components
      - hooks
      - pages
      - utils
    - feature2
      - components
      - hooks
      - pages
      - utils

## shacdn/ci

This is not a component library. It is how you build your component library.
- 기존 UI 라이브러리들(MUI, Chakra UI 등)은 미리 만들어진 컴포넌트를 제공하고, 개발자는 이를 가져다 사용하는 방식입니다
- 반면 shadcn/ui는 개발자가 직접 컴포넌트를 자신의 프로젝트로 복사해와서 수정하고 커스터마이징하는 것을 권장합니다

shadcn/ui는 "컴포넌트 라이브러리를 만드는 방법"을 제시하는 도구입니다.  미리 만들어진 컴포넌트를 제공하는 것을 넘어, 개발자가 자신의 프로젝트에 최적화된 컴포넌트 라이브러리를 구축할 수 있도록 돕는 것을 목표로 합니다

- install
  - https://ui.shadcn.com/docs/installation/remix

- components.json
  - cli 사용시 필요한 정보를 담고 있는 파일


- cn
  - classnames와 같이 조건부 className를 쉽게 작성할 수 있도록 도와주는 유틸리티

- navagationMenuTriggerStyle
  - NavigationMenuTrigger의 스타일을 정의하는 함수
  - 이런식으로 컴포넌트를 직접 사용하지 않고도 컴포넌트의 스타일을 가져오는 함수를 제공함
  ```jsx
  <Link className={cn(navagationMenuTriggerStyle())} to={to}>
    {children}
  </Link>
  ```
- asChild
  - 컴포넌트의 props를 자식 컴포넌트에 전달하는 기능
  - 예를 들어, NavigationMenuTrigger는 기본적으로 button으로 렌더링되지만, asChild prop을 사용하면 Link로 렌더링할 수 있음
  ```jsx
  <Button asChild>
    <Link to={to}>{children}</Link>
  </Button>
  ```


## react-router

- loader
```jsx
// NOTE: server side에서 실행됨 (react-router.config.tsx에 설정된 ssr: true에 따라)
// 화면이 랜더링 되기 전에 데이터를 미리 로드할 수 있음
// return은 loaderData로 전달됨
export const loader = async () => {};
```
  - UI 컴포넌트를 위한 데이터를 불러오기
  - redirect 등을 이용한 서버 측 작업
```jsx
export const loader = async () => {
  return redirect("/login");
}
```
  - response를 보내서 json을 반환하는 등의 작업
```jsx
export const loader = async () => {
  return Response.json({ message: "Hello World" });
}
```


- 페이지 type safety
  - react-router framework가 routes.ts를 읽고 각 route에 대해 +types 디렉토리가 생성되며, 여기에 해당 route의 type이 자동으로 정의됨
    - 개발시에는 .react-router
  - tsconfig의 rootDirs 옵션에 의해 다른 디렉토리에 있어도 같은 디렉토리에 있는 것처럼 상대경로로 접근이 가능하도록 되어있음 <= 이건 진짜 똑똑하네
  - 사용 방법
```jsx
// 페이지 
import type { Route } from "./+types/home";
```

## zod

- z.coerce
  - zod의 coerce는 타입을 강제로 변환하는 기능
  - 예를 들어, string 타입을 number로 변환할 때 사용됨
```jsx
const schema = z.object({
  id: z.coerce.number(),
});
```

## supabase
- supabase: postgresql을 기반으로 하는 firebase 대안이라고 주장하는 오픈소스
- 데이터베이스, 인증, 스토리지 등을 제공
- 무료 사용량이 괜찮아보여서 앞으로 자주 사용해도 좋을듯

## drizzle
- drizzle은 TypeScript와 함께 사용할 수 있는 ORM 라이브러리
- TypeScript의 타입 시스템을 활용하여 데이터베이스 쿼리를 작성할 수 있도록 도와줌
- SQL 쿼리를 작성하는 대신 TypeScript 코드로 데이터베이스 작업을 수행할 수 있음
- 관련 문서
  - https://orm.drizzle.team/docs/connect-supabase

## drizzle-kit
- drizzle-kit은 drizzle ORM을 위한 마이그레이션 도구
- 데이터베이스 스키마를 TypeScript 코드로 정의하고, 이를 기반으로 마이그레이션 파일을 생성할 수 있음
- 스키마가 변경될때 이를 자동으로 감지하고, 필요한 마이그레이션 파일을 생성함
- 생성된 마이그레이션 파일 (SQL)은 drizzle-kit이 바로 데이터베이스에 적용해줌

```
"db:generate": "drizzle-kit generate", // 스키마 파일을 살펴보고 변경사항이 있을 경우 마이그레이션 파일 생성
"db:migrate": "drizzle-kit migrate", // 생성된 마이그레이션 파일을 데이터베이스에 적용
"db:studio": "drizzle-kit studio" // 데이터베이스 스튜디오를 실행하여 데이터베이스를 시각적으로 관리 - supabase 쓸 예정이라 경우에는 안 쓸 예정
```


## 메모
- 배열 내에 최소 하나의 값이 있다는 것을 ts에 알려주는 방법
```
as [string, ...string[]]
// string[] 타입인데 안에 최소 하나의 string이 있음
```
