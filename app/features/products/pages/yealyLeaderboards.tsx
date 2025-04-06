import { Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/yealyLeaderboards";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year } = params;
  
  return {
    products: [],
    year
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Product Leaderboards" },
    { name: "description", content: "Top products for the year" }
  ];
};

export default function YearlyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products, year } = loaderData;
  
  return (
    <div>
      <h1>Yearly Product Leaderboards: {year}</h1>
    </div>
  );
}