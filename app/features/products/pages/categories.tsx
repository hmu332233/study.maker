import { Link, type MetaFunction } from "react-router";
import type { Route } from "../../../+types/products";

export function loader({ request, params }: Route.LoaderArgs) {
  const { category } = params;
  
  return {
    categories: ["SaaS", "Mobile App", "Developer Tool", "AI", "Web App"],
    products: [],
    currentCategory: category
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Product Categories" },
    { name: "description", content: "Browse products by category" }
  ];
};

export default function ProductCategoriesPage({ loaderData, actionData }: Route.ComponentProps) {
  const { categories, products, currentCategory } = loaderData;
  
  return (
    <div>
      <h1>Product Categories {currentCategory ? `: ${currentCategory}` : ""}</h1>
    </div>
  );
}