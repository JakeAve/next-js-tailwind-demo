import Image from "next/image";
import React from "react";
import mediumIcon from "../public/icons/medium_logo.svg";
import { NavButton } from "./NavButton";
import homeIcon from "../public/icons/home.svg";
import notificationIcon from "../public/icons/notifications.svg";
import bookmarksIcon from "../public/icons/bookmarks.svg";
import descriptionIcon from "../public/icons/description.svg";
import editNoteIcon from "../public/icons/edit_note.svg";

export function Navigation() {
  return (
    <nav className="bg-white shadow-md sm:pl-6 pr-2 pt-2 md:pt-5 md:pr-5 sticky top-0 md:h-screen flex justify-center md:justify-start md:flex-col sm:gap-6 md:items-end">
      <NavButton icon={mediumIcon} width={36} height={36} />
      <div className="md:mt-48 flex items-center md:flex-col gap-6">
        <NavButton icon={homeIcon} ariaLabel="Home" />
        <NavButton icon={notificationIcon} ariaLabel="Home" />
        <NavButton icon={bookmarksIcon} ariaLabel="Home" />
        <NavButton icon={descriptionIcon} ariaLabel="Home" />
        <hr className="text-dark-grey" />
        <NavButton icon={editNoteIcon} ariaLabel="Home" />
      </div>
    </nav>
  );
}
