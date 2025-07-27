import { isRouteErrorResponse, Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/weeklyLeaderboards";
import { DateTime } from "luxon";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/productCard";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/productPagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

export function loader({ request, params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw { error_code: 'invalid_params', message: 'Invalid parameters', status: 400 };
  }
  const { year, week } = parsedData;

  const date = DateTime.fromObject({ weekYear: year, weekNumber: week, weekday: 1 }, { zone: "Asia/Seoul" });

  if (!date.isValid) {
    throw { error_code: 'invalid_date', message: 'Invalid date', status: 400 };
  }

  const now = DateTime.now().setZone("Asia/Seoul");
  if (date > now.endOf("week")) {
    throw {
      error_code: "future_date",
      message: "Future date",
      status: 400
    };
  }

  return {
    year,
    week
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const date = DateTime.fromObject(
    {
      weekYear: Number(params.year),
      weekNumber: Number(params.week),
      weekday: 1
    },
    { zone: "Asia/Seoul" }
  );
  return [
    { title: `Weekly Leaderboards - ${date.toLocaleString(DateTime.DATE_MED)}` },
    { name: "description", content: "Top products for the week" }
  ];
};

export default function WeeklyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { year, week } = loaderData;
  const urlDate = DateTime.fromObject({ weekYear: year, weekNumber: week, weekday: 1 });

  const previousDate = urlDate.minus({ weeks: 1 });
  const nextDate = urlDate.plus({ weeks: 1 });

  const isCurrentWeek = urlDate.hasSame(DateTime.now(), "week");

  return (
    <div>
      <Hero title={`The Best Products of Week ${week}, ${year}`} />
      <div>
        <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/weekly/${previousDate.weekYear}/${previousDate.weekNumber}`}>
            {`Week ${previousDate.weekNumber}, ${previousDate.weekYear}`}
          </Link>
        </Button>
        {isCurrentWeek || <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/weekly/${nextDate.weekYear}/${nextDate.weekNumber}`}>
            {`Week ${nextDate.weekNumber}, ${nextDate.weekYear}`}
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
      <p>Something went wrong while loading the weekly leaderboards.</p>
    </div>
  );
}