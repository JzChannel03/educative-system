import React from "react";
import { LinkProps, Link } from "react-router-dom";

interface Props extends LinkProps {
  children: string;
}

const TraditionalLink = ({ children, ...linkProps }: Props) => {
  return (
    <Link className="text-gray-600 underline text-xl" {...linkProps}>
      {children}
    </Link>
  );
};

export default TraditionalLink;
