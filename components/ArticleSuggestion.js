import Image from "next/image";
import React from "react";

export function ArticleSuggestion(props) {
  const { authorPhoto, articlePhoto, authorName, title } = props;
  return (
    <div className="flex gap-2">
      <div className="w-full lg:w-60">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={`/imgs/${authorPhoto}`}
            alt={authorName}
            height={20}
            width={20}
          />
          <span className="text-xs font-light">{authorName}</span>
        </div>
        <p className="font-medium text-sm">{title}</p>
      </div>
      <Image src={`/imgs/${articlePhoto}`} height={64} width={64} />
    </div>
  );
}
