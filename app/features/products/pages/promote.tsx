import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/promote";

export function loader({ request }: Route.LoaderArgs) {
  return {
    promotionPlans: [
      { id: "basic", name: "Basic", price: 29 },
      { id: "premium", name: "Premium", price: 99 },
      { id: "ultimate", name: "Ultimate", price: 299 }
    ]
  };
}

export function action({ request }: Route.ActionArgs) {
  // 제품 프로모션 신청 로직 구현
  return {
    success: true
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Your Product" },
    { name: "description", content: "Promote your product to reach more users" }
  ];
};

export default function ProductPromotePage({ loaderData, actionData }: Route.ComponentProps) {
  const { promotionPlans } = loaderData;
  
  return (
    <div>
      <h1>Promote Your Product</h1>
    </div>
  );
}