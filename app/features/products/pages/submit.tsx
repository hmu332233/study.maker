import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/submit";

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: ["SaaS", "Mobile App", "Developer Tool", "AI", "Web App"]
  };
}

export function action({ request }: Route.ActionArgs) {
  // 제품 제출 로직 구현
  return {
    success: true
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Your Product" },
    { name: "description", content: "Submit your product to our community" }
  ];
};

export default function ProductSubmitPage({ loaderData, actionData }: Route.ComponentProps) {
  const { categories } = loaderData;
  
  return (
    <div>
      <h1>Submit Your Product</h1>
    </div>
  );
}