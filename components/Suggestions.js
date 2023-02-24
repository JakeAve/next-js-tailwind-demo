import React from "react";
import { ArticleSuggestion } from "./ArticleSuggestion";

export function Suggestions(props) {
  const { suggestions } = props;
  console.log({ suggestions });
  return (
    <div className="mt-8">
      <p className="font-medium">More from Medium</p>
      <div className="mt-4 flex flex-col gap-4">
        {suggestions.map((s, idx) => (
          <ArticleSuggestion key={idx} {...s} />
        ))}
      </div>
    </div>
  );
}
