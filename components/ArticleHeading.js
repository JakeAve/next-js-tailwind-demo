import React from "react";

export function ArticleHeading(props) {
  const { level = 3, children } = props;
  const Heading = `h${level}`;
  return (
    <Heading className="font-sans font-bold text-xl mb-2 mt-16">
      {children}
    </Heading>
  );
}
