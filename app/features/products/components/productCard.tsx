import { Link } from "react-router";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../common/components/ui/card";
import { Button } from "../../../common/components/ui/button";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  commentCount: number;
  viewCount: number;
  upvoteCount: number;
}

export function ProductCard({
  id,
  title,
  description,
  commentCount,
  viewCount,
  upvoteCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`}>
      <Card className="w-full flex items-center justify-between bg-transparent hover:bg-card/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-px text-xs text-muted-foreground"> 
              <MessageCircleIcon className="w-4 h-4 text-muted-foreground" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-px text-xs text-muted-foreground">
              <EyeIcon className="w-4 h-4 text-muted-foreground" />
              <span>{viewCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant={"outline"} className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvoteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
