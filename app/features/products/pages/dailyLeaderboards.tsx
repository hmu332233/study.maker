import { data, isRouteErrorResponse, Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/dailyLeaderboards";
import { DateTime } from "luxon";
import { z } from "zod";

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
    date,
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
  const { date } = loaderData;
  
  return (
    <div>
      <h1>Daily Product Leaderboards: {year}/{month}/{day}</h1>
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