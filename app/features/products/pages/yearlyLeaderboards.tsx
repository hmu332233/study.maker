import { isRouteErrorResponse, Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/yearlyLeaderboards";
import { DateTime } from "luxon";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/productCard";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/productPagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
});

export function loader({ request, params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw { error_code: 'invalid_params', message: 'Invalid parameters', status: 400 };
  }
  const { year } = parsedData;

  const date = DateTime.fromObject({ year, month: 1, day: 1 }, { zone: "Asia/Seoul" });

  if (!date.isValid) {
    throw { error_code: 'invalid_date', message: 'Invalid date', status: 400 };
  }

  const now = DateTime.now().setZone("Asia/Seoul");
  if (date > now.endOf("year")) {
    throw {
      error_code: "future_date",
      message: "Future date",
      status: 400
    };
  }

  return {
    year
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => [
  { title: "Yearly Product Leaderboards" },
  { name: "description", content: "Top products for the year" }
];

export default function YearlyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { year } = loaderData;
  const urlDate = DateTime.fromObject({ year });

  const previousYear = urlDate.minus({ years: 1 });
  const nextYear = urlDate.plus({ years: 1 });
  const now = DateTime.now();
  const isCurrentYear = urlDate.hasSame(now, "year");

  return (
    <div>
      <Hero title={`The Best Products of ${year}`} />
      <div className="flex gap-2 my-4">
        <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/yearly/${previousYear.year}`}>
            {previousYear.year}
          </Link>
        </Button>
        {!isCurrentYear && (
          <Button variant="secondary" asChild>
            <Link to={`/products/leaderboards/yearly/${nextYear.year}`}>
              {nextYear.year}
            </Link>
          </Button>
        )}
      </div>
      <div className="flex flex-col w-full gap-5 max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
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
      </div>
      <ProductPagination 
        totalPage={5}
        onPageChange={(page) => console.log(page)} 
      />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <p>{error.data?.message} / {error.data?.error_code}</p>
      </div>
    );
  }
  if (error instanceof Error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Error</h2>
      <p>Something went wrong while loading the yearly leaderboards.</p>
    </div>
  );
}
