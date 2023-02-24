import React from "react";
import Image from "next/image";

export function ArticleImage(props) {
  const { src, alt, credits } = props;
  return (
    <figure className="mb-8 max-w-3xl">
      <img src={`/imgs/${src}`} alt={alt} />
      <figcaption className="text-center text-sm font-thin my-3">
        {credits}
      </figcaption>
    </figure>
  );
}
