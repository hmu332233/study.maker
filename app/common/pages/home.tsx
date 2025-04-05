import { Link, type MetaFunction } from "react-router";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "../../features/products/components/productCard";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "../../features/community/components/postCard";
import { IdeaCard } from "../../features/ideas/components/ideaCard";
import { JobCard } from "../../features/jobs/components/jobCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to wemake" },
  ]
}

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Products</h2>
          <p className="text-xl font-light text-foreground">The best products made by our community today.</p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
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
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Latest Discussions</h2>
          <p className="text-xl font-light text-foreground">The best discussions made by our community today.</p>
          <Button variant={"link"} asChild className="text-lg p-0">
            <Link to="/discussions/leaderboards">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            key={index}
            id={`postId-${index}`}
            title="what is the best productivity tool?"
            authorName="John Doe"
            authorAvatarUrl="https://example.com/avatar.jpg"
            authorFallback="JD"
            category="General"
            timeAgo="2 hours ago"
          />
        ))}
      </div>  
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={index}
            id={`idea-${index}`}
            title={`Amazing SaaS Idea ${index + 1}`}
            viewsCount={120 + index * 10}
            postedAt="3 days ago"
            likesCount={45 + index}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 9 }).map((_, index) => (
          <JobCard
            key={index}
            id={`job-${index}`}
            title={`Senior Software Engineer ${index + 1}`}
            company={`Tech Company ${index + 1}`}
            companyLogoUrl="https://github.com/microsoft.png"
            postedAt="2 days ago"
            type="Full-time"
            positionLocation="Remote"
            salary="$120K - $150K"
            companyHq="San Francisco, CA"
          />
        ))}
      </div>
    </div>
  );
}