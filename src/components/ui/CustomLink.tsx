import { LinkProps, Link } from "react-router-dom";

interface Props extends LinkProps {
  children: string;
}

export const TraditionalLink = ({ children, ...linkProps }: Props) => {
  return (
    <Link className="text-gray-600 underline text-xl" {...linkProps}>
      {children}
    </Link>
  );
};
