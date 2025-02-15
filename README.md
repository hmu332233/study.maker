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

## shacdn/ci

This is not a component library. It is how you build your component library.
- 기존 UI 라이브러리들(MUI, Chakra UI 등)은 미리 만들어진 컴포넌트를 제공하고, 개발자는 이를 가져다 사용하는 방식입니다
- 반면 shadcn/ui는 개발자가 직접 컴포넌트를 자신의 프로젝트로 복사해와서 수정하고 커스터마이징하는 것을 권장합니다

shadcn/ui는 "컴포넌트 라이브러리를 만드는 방법"을 제시하는 도구입니다.  미리 만들어진 컴포넌트를 제공하는 것을 넘어, 개발자가 자신의 프로젝트에 최적화된 컴포넌트 라이브러리를 구축할 수 있도록 돕는 것을 목표로 합니다

- install
  - https://ui.shadcn.com/docs/installation/remix

- components.json
  - cli 사용시 필요한 정보를 담고 있는 파일