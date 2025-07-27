import { data, Form, Link, type MetaFunction } from "react-router";
import type { Route } from "./+types/search";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/productPagination";
import { ProductCard } from "../components/productCard";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );

  if (!success) {
    throw data(
      { error_code: 'invalid_params', message: 'Invalid parameters' },
      { status: 400 }
    );
  }

  const { query, page } = parsedData;

  return {
    products: [],
    query,
    page
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products" },
    { name: "description", content: "Search for products in our community" }
  ];
};

export default function ProductSearchPage({ loaderData, actionData }: Route.ComponentProps) {
  const { products, query } = loaderData;
  
  return (
    <div className="space-y-10">
      <Hero title="Search Products" />
      <Form>
        <Input
          name="query"
          placeholder="Search for products..."
          defaultValue={query}
        />
        <Button type="submit" className="mt-4">
          Search
        </Button>
      </Form>
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