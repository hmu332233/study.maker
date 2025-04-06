import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/index";

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
    { title: "Products" },
    { name: "description", content: "Discover amazing products made by our community" }
  ];
};

export default function ProductsIndexPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products } = loaderData;
  
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}