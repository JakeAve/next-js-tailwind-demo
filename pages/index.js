import Article from "@components/Article";
import InPageAlert from "@components/InPageAlert";
import { Navigation as Nav } from "@components/Navigation";
import { Sidebar } from "@components/Sidebar";

const articleProps = {
  title: "There Are Zero Bridges Across The Amazon. Here Is Why",
  subtitle: "A fun fact that scratches the brain",
  byline: {
    photo: "grant-piper.jpeg",
    authorName: "Grant Piper",
    authorLink:
      "https://grantpiperwriting.medium.com/?source=post_page-----90f61f0573dc--------------------------------",
    readTime: "4 min read",
    publishedDate: new Date("June 6, 2022"),
  },
};

export default function Home() {
  return (
    <div className="grid grid-cols-sm-layout md:grid-cols-md-layout lg:grid-cols-lg-layout xl:grid-cols-main-layout">
      <Nav />
      <main className="mx-auto px-2 lg:px-4 xl:px-0 pt-6 max-w-3xl">
        <InPageAlert>
          This is your <span className="font-bold">last</span> free member-only
          story this month.{" "}
          <a className="underline">Sign up for Medium and get an extra one</a>
        </InPageAlert>
        <Article {...articleProps} />
      </main>
      <Sidebar />
    </div>
  );
}
