import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Best practices for React hooks",
    author: "reactdev",
    replies: 23,
    lastReply: "2023-03-15",
  },
  {
    id: 2,
    title: "Comparing different state management solutions",
    author: "statemanager",
    replies: 45,
    lastReply: "2023-03-14",
  },
  {
    id: 3,
    title: "Tips for optimizing database queries",
    author: "dbexpert",
    replies: 12,
    lastReply: "2023-03-13",
  },
  // Add more mock posts as needed
];

const ForumPosts = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Latest Discussions</h1>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>by {post.author}</span>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.replies} replies
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.lastReply}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-center mt-6">
        <Button variant="outline" className="mx-1">
          Previous
        </Button>
        <Button variant="outline" className="mx-1">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ForumPosts;