import { data, isRouteErrorResponse, Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/dailyLeaderboards";
import { DateTime } from "luxon";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/productCard";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/productPagination";

const paramsSchema = z.object({
  // NOTE: z.coerce.number()를 사용하여 string을 number로 변환
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export function loader({ request, params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data({ error_code: 'invalid_params', message: 'Invalid parameters' }, { status: 400 });
  }
  const { year, month, day } = parsedData;

  const date = DateTime.fromObject(
    { year, month, day },
    { zone: "Asia/Seoul" }
  );

  if (!date.isValid) {
    // throw new Error('Invalid date');
    throw data({ error_code: 'invalid_date', message: 'Invalid date' }, { status: 400 });
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      { status: 400 }
    );
  }
  
  return {
    year,
    month,
    day
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

// params: url에서 추출된 파라미터
// data: loader에서 반환된 데이터
export const meta: MetaFunction = ({ params, data }) => {
  const date = DateTime.fromObject(
    { 
      year: Number(params.year), 
      month: Number(params.month), 
      day: Number(params.day) 
    },
    { zone: "Asia/Seoul" }
  );
  return [
    { title: `Daily Leaderboards - ${date.toLocaleString(DateTime.DATE_MED)}` },
    { name: "description", content: "Top products for the day" }
  ];
};

export default function DailyLeaderboardsPage({ loaderData, actionData }: Route.ComponentProps) {
  const { year, month, day } = loaderData;
  const urlDate = DateTime.fromObject(
    { year, month, day },
  );

  const previousDate = urlDate.minus({ days: 1 });
  const nextDate = urlDate.plus({ days: 1 });

  const isToday = urlDate.hasSame(DateTime.now(), "day");
  
  return (
    <div>
      <Hero title={`The Best Products of ${urlDate.toLocaleString(DateTime.DATE_MED)}`} />
      <div>
        <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/daily/${previousDate.year}/${previousDate.month}/${previousDate.day}`}>
            {previousDate.toLocaleString(DateTime.DATE_MED)}
          </Link>
        </Button>
        {isToday || <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/daily/${nextDate.year}/${nextDate.month}/${nextDate.day}`}>
          {nextDate.toLocaleString(DateTime.DATE_MED)}
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
        onPageChange={(page) => console.log(page)} 
      />
    </div>
  );
}

// NOTE: 이 페이지만을 위한 ErrorBoundary도 선언할 수 있음
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
      <p>Something went wrong while loading the daily leaderboards.</p>
    </div>
  );
}