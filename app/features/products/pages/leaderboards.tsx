import { Link, type MetaFunction } from "react-router";
import type { Route } from "../../../+types/products";

export function loader({ request }: Route.LoaderArgs) {
  return {
    products: []
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Product Leaderboards" },
    { name: "description", content: "Top products ranked by our community" }
  ];
};

export default function ProductsLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products } = loaderData;
  
  return (
    <div>
      <h1>Product Leaderboards</h1>
    </div>
  );
}