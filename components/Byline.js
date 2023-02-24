import Image from "next/image";
import React from "react";
import starIcon from "../public/icons/star.svg";
import playCircle from "../public/icons/play_circle.svg";
import publicIcon from "../public/icons/public.svg";
import faceIcon from "../public/icons/sentiment_satisfied.svg";
import buldIcon from "../public/icons/emoji_objects.svg";
import linkIcon from "../public/icons/link.svg";
import bookmarkIcon from "../public/icons/bookmark_add.svg";

export default function Byline(props) {
  const { photo, authorName, authorLink, publishedDate, readTime, socials } =
    props;
  const short = new Intl.DateTimeFormat("en-US").format(publishedDate);
  const readable = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(publishedDate);
  return (
    <div className="flex my-8 justify-between items-center">
      <div className="flex items-center">
        <Image
          className="rounded-full"
          src={`/imgs/${photo}`}
          alt={authorName}
          width={48}
          height={48}
        />
        <div className="pl-4">
          <address className="font-light not-italic">
            <a href={authorLink}>{authorName}</a>
          </address>
          <div className="text-dark-grey text-sm font-light">
            <time pubdate datetime={short} title={readable}>
              {readable}
            </time>{" "}
            •{" "}
            <span>
              {readTime}{" "}
              <Image
                className="fill-dark-grey"
                src={starIcon}
                alt="Favorite"
                height={15}
                width={15}
              />
            </span>{" "}
            •{" "}
            <span className="text-green">
              <Image src={playCircle} alt="Listen" height={15} width={15} />{" "}
              Listen
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-10">
        <div className="flex justify-evenly gap-3">
          <Image src={publicIcon} alt="Twitter" height={20} width={20} />
          <Image src={faceIcon} alt="Twitter" height={20} width={20} />
          <Image src={buldIcon} alt="Twitter" height={20} width={20} />
          <Image src={linkIcon} alt="Twitter" height={20} width={20} />
        </div>
        <div>
          <Image src={bookmarkIcon} alt="Twitter" height={20} width={20} />
        </div>
      </div>
    </div>
  );
}
