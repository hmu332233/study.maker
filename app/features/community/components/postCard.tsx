import { Link } from "react-router";
import { Card, CardFooter, CardHeader, CardTitle } from "../../../common/components/ui/card";
import { Button } from "../../../common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../../common/components/ui/avatar";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  authorName: string;
  authorAvatarUrl?: string;
  authorFallback: string;
  category: string;
  timeAgo: string;
}

export function PostCard({ 
  id, 
  title, 
  authorName, 
  authorAvatarUrl, 
  authorFallback, 
  category, 
  timeAgo 
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar>
            <AvatarFallback>
              {authorFallback}
            </AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2">
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
            <div className="flex items-center gap-2 text-sm leading-tight text-muted-foreground">
              <span>{authorName} on</span>
              <span>{category}</span>
              <DotIcon className="size-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant={"link"} asChild>
            <Link to={`/community/${id}`}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
