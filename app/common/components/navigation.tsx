
import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";



const menus = [{
  name: "prodcuts",
  to: "/products",
  items: [
    {
      name: "Leaderboard",
      description: "See the top players in the world",
      to: "/products/leaderboard",
    },
    {
      name: "Categories",
      description: "Browse products by category",
      to: "/products/categories",
    },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search", 
      },
      {
        name: "Submit a Product",
        description: "Submit a new product to our community",
        to: "/products/submit",
      },
      {
        name: "Promote a Product",
        description: "Promote a product to our community",
        to: "/products/promote",
      },
  ],
}, {
  name: "Jobs",
  to: "/jobs",
  items: [
    {
      name: "Remote Jobs",
      description: "Find remote jobs in our community",
      to: "/jobs?location=remote",
    },
    {
      name: "Full-Time Jobs",
      description: "Find full-time jobs in our community",
      to: "/jobs?type=full-time",
    },
    {
      name: "Freelance Jobs",
      description: "Find freelance jobs in our community",
      to: "/jobs?type=freelance",
    },
    {
      name: "Internships",
      description: "Find internships in our community",
      to: "/jobs?type=internship",
    },
    {
      name: "Submit a Job",
      description: "Submit a new job to our community",
      to: "/jobs/submit",
    },
    {
      name: "Submit a Job",
      description: "Submit a new job to our community",
      to: "/jobs/submit",
    }
  ],
},{
  name: "Cummunity",
  to: "/community",
  items: [
    {
      name: "All Posts",
      description: "See all posts in our community",
      to: "/community",
    },
    {
      name: "Top Posts",
      description: "See the top posts in our community",
      to: "/community?sort=top",
    },
    {
      name: "New Posts",
      description: "See the new posts in our community",
      to: "/community?sort=new",
    },
    {
      name: "Create a Post",
      description: "Create a new post in our community",
      to: "/community/create",
    },
  ]
}, {
  name: "Ideas GPT",
  to: "/ideasgpt",
}, {
  name: "Teams",
  to: "/teams",
  items: [
    {
      name: "All Teams",
      description: "See all teams in our community",
      to: "/teams",
    },
    {
      name: "Create a Team",
      description: "Create a new team in our community",
      to: "/teams/create",
    }
  ]
}];

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div>
        <Link to="/" className="font-bold tracking-tight text-lg">wemake</Link>
      </div>
      <Separator orientation="vertical" className="h-6 mx-4" />
      <NavigationMenu>
        <NavigationMenuList>
          {menus.map((menu) => (
            <NavigationMenuItem key={menu.name}>
              <NavigationMenuTrigger>
                {menu.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {menu.items?.map((item) => (
                  <NavigationMenuLink key={item.name}>
                    {item.name}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
} 