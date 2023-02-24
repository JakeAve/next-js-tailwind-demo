import Image from "next/image";
import React from "react";

export function NavButton(props) {
  const { icon, ariaLabel, height = 28, width = 28 } = props;
  return (
    <a href="#" ariaLabel={ariaLabel}>
      <Image src={icon} width={width} height={height} />
    </a>
  );
}
