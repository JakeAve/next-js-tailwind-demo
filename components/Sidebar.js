import React from "react";
import { AuthorInfo } from "./AuthorInfo";
import { LoginSignup } from "./LoginSignup";
import { SearchInput } from "./SearchInput";
import { Suggestions } from "./Suggestions";

export function Sidebar() {
  return (
    <aside className="shadow-md pt-5 px-5 md:pl-5 sticky top-0 col-start-1 md:col-start-2 lg:col-start-3 md:h-screen">
      <div className="m-auto max-w-lg lg:w-96">
        <LoginSignup />
        <SearchInput />
        <AuthorInfo
          name="Grant Piper"
          photo="grant-piper.jpeg"
          followers="5K Followers"
          tagline="Through provoking articles daily. Guaranteed."
          emailRef="foo@gmail.com"
        />
        <Suggestions
          suggestions={[
            {
              authorPhoto: "grant-piper.jpeg",
              authorName: "Grant Piper",
              title: "The Longest Suspension Bridge In The World Just Opened",
              articlePhoto: "city.jpg",
            },
            {
              authorPhoto: "grant-piper.jpeg",
              authorName: "Michael Stein",
              title:
                "How the Nazis Financed an Economic Miracle and Prapared a War",
              articlePhoto: "bird.jpeg",
            },
            {
              authorPhoto: "grant-piper.jpeg",
              authorName: "Karthick Na..",
              title:
                "The Two Hindu philosophy which is in conflict now in India",
              articlePhoto: "motor-cycle.jpg",
            },
          ]}
        />
      </div>
    </aside>
  );
}
