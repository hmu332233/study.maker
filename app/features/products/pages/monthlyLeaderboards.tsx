import { isRouteErrorResponse, Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/monthlyLeaderboards";
import { DateTime } from "luxon";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/productCard";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/productPagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});

export function loader({ request, params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw { error_code: 'invalid_params', message: 'Invalid parameters', status: 400 };
  }
  const { year, month } = parsedData;

  const date = DateTime.fromObject(
    { year, month, day: 1 },
    { zone: "Asia/Seoul" }
  );

  if (!date.isValid) {
    throw { error_code: 'invalid_date', message: 'Invalid date', status: 400 };
  }

  const now = DateTime.now().setZone("Asia/Seoul");
  if (date > now.endOf("month")) {
    throw {
      error_code: "future_date",
      message: "Future date",
      status: 400
    };
  }

  return {
    year,
    month
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const date = DateTime.fromObject(
    {
      year: Number(params.year),
      month: Number(params.month),
      day: 1
    },
    { zone: "Asia/Seoul" }
  );
  return [
    { title: `Monthly Leaderboards - ${date.toLocaleString(DateTime.DATE_MED)}` },
    { name: "description", content: "Top products for the month" }
  ];
};

export default function MonthlyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { year, month } = loaderData;
  const urlDate = DateTime.fromObject({ year, month, day: 1 });

  const previousDate = urlDate.minus({ months: 1 });
  const nextDate = urlDate.plus({ months: 1 });

  const isCurrentMonth = urlDate.hasSame(DateTime.now(), "month");

  return (
    <div>
      <Hero title={`The Best Products of ${urlDate.toFormat("yyyy MMMM")}`} />
      <div>
        <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/monthly/${previousDate.year}/${previousDate.month}`}>
            {previousDate.toFormat("yyyy MMMM")}
          </Link>
        </Button>
        {isCurrentMonth || <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/monthly/${nextDate.year}/${nextDate.month}`}>
            {nextDate.toFormat("yyyy MMMM")}
          </Link>
        </Button>}
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
        onPageChange={page => console.log(page)}
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
      <p>Something went wrong while loading the monthly leaderboards.</p>
    </div>
  );
}