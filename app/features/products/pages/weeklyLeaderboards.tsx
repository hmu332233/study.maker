import { Link, type MetaFunction } from "react-router";
import type { Route } from "../../../+types/products";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, week } = params;
  
  return {
    products: [],
    year,
    month,
    week
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Product Leaderboards" },
    { name: "description", content: "Top products for the week" }
  ];
};

export default function WeeklyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products, year, month, week } = loaderData;
  
  return (
    <div>
      <h1>Weekly Product Leaderboards: {year}/{month}/Week {week}</h1>
    </div>
  );
}