import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/dailyLeaderboards";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, day } = params;
  
  return {
    products: [],
    year,
    month,
    day
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Product Leaderboards" },
    { name: "description", content: "Top products for the day" }
  ];
};

export default function DailyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products, year, month, day } = loaderData;
  
  return (
    <div>
      <h1>Daily Product Leaderboards: {year}/{month}/{day}</h1>
    </div>
  );
}