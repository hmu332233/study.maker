import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/search";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  
  return {
    products: [],
    query
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products" },
    { name: "description", content: "Search for products in our community" }
  ];
};

export default function ProductSearchPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products, query } = loaderData;
  
  return (
    <div>
      <h1>Search Products: {query}</h1>
    </div>
  );
}