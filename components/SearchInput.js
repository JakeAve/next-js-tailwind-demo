import Image from "next/image";
import React from "react";
import searchIcon from "../public/icons/search.svg";

export function SearchInput() {
  return (
    <div className="relative mt-6">
      <input
        className="py-2 pr-4 pl-10 rounded-full border-2 border-light-grey w-full"
        type="text"
        placeholder="Seach"
      />
      <span className="absolute top-3 left-3">
        <Image src={searchIcon} width={24} height={24} />
      </span>
    </div>
  );
}
