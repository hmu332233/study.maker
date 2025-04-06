import { Link, type MetaFunction } from "react-router";
import type { Route } from "../../../+types/products";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month } = params;
  
  return {
    products: [],
    year,
    month
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Monthly Product Leaderboards" },
    { name: "description", content: "Top products for the month" }
  ];
};

export default function MonthlyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products, year, month } = loaderData;
  
  return (
    <div>
      <h1>Monthly Product Leaderboards: {year}/{month}</h1>
    </div>
  );
}