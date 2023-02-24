import React from "react";
import Image from "next/image";
import emailIcon from "../public/icons/mail.svg";

export function AuthorInfo(props) {
  const { name, photo, followers, tagline, emailRef } = props;
  return (
    <div className="mt-8">
      <Image
        className="rounded-full"
        src={`/imgs/${photo}`}
        alt={name}
        width={64}
        height={64}
      />
      <div className="font-medium">{name}</div>
      <div className="font-light text-dark-grey">{followers}</div>
      <div className="font-light text-sm text-dark-grey mt-2">{tagline}</div>
      <div className="mt-4 flex gap-2 items-center">
        <button className="px-4 py-1.5 text-sm rounded-full bg-green text-white">
          Follow
        </button>
        <a
          className="p-1.5 h-8 w-8 text-sm rounded-full bg-green text-white flex justify-center items-center"
          ariaLabel="Email"
          href={`mailto:${emailRef}`}
        >
          <Image src={emailIcon} height={16} width={16} />
        </a>
      </div>
    </div>
  );
}
