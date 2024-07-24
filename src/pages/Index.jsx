import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ForumPosts from "./components/ForumPosts";
import Footer from "./components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex">
        <Sidebar />
        <main className="flex-grow p-6">
          <ForumPosts />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;