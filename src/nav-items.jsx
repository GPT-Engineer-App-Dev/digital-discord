import { Home, LayoutGrid, Clock, TrendingUp, Info } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Categories",
    to: "/categories",
    icon: <LayoutGrid className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Categories page component when created
  },
  {
    title: "Latest",
    to: "/latest",
    icon: <Clock className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Latest page component when created
  },
  {
    title: "Top",
    to: "/top",
    icon: <TrendingUp className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Top page component when created
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual About page component when created
  },
];