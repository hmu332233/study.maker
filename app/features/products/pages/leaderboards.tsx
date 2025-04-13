import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/productCard";
import { Hero } from "~/common/components/hero"; // Import the new Hero component
import type { Route } from "./+types/leaderboards";

export function loader({ request }: Route.LoaderArgs) {
  return {
    title: "Product Leaderboards",
    subtitle: "Top products ranked by our community"
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Product Leaderboards" },
    { name: "description", content: "Top products ranked by our community" }
  ];
};

export default function ProductsLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { title, subtitle } = loaderData;
  return (
    <div className="space-y-40">
      <Hero title={title} subtitle={subtitle} />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day.
          </p>
        </div>
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            title={`Product Title ${index + 1}`}
            description="Product description goes here. It should be short and concise."
            commentCount={2}
            viewCount={5}
            upvoteCount={120}
          />
        ))}
        <Button variant={"link"} asChild className="text-lg p-0">
          <Link to="/products/leaderboards/daily">View More Products &rarr;</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by week.
          </p>
        </div>
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            title={`Product Title ${index + 1}`}
            description="Product description goes here. It should be short and concise."
            commentCount={2}
            viewCount={5}
            upvoteCount={120}
          />
        ))}
        <Button variant={"link"} asChild className="text-lg p-0">
          <Link to="/products/leaderboards/weekly">View More Products &rarr;</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by month.
          </p>
        </div>
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            title={`Product Title ${index + 1}`}
            description="Product description goes here. It should be short and concise."
            commentCount={2}
            viewCount={5}
            upvoteCount={120}
          />
        ))}
        <Button variant={"link"} asChild className="text-lg p-0">
          <Link to="/products/leaderboards/monthly">View More Products &rarr;</Link>
        </Button>
      </div>
    </div>
  );
}