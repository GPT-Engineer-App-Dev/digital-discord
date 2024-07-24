import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categories = [
  "Programming",
  "Hardware",
  "Software",
  "Networking",
  "AI & Machine Learning",
  "Cybersecurity",
  "Web Development",
  "Mobile Development",
  "Cloud Computing",
  "Data Science",
];

const Sidebar = () => {
  return (
    <aside className="w-64 border-r p-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-8" />
      </div>
      <nav className="mt-4">
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          Categories
        </h2>
        <div className="space-y-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="w-full justify-start"
            >
              {category}
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;