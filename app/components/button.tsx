import { Link } from "@remix-run/react";
export default function Button({ children, to }: any) {
  return (
    <Link
      className="rounded-full border-2 border-black bg-black px-4 py-1.5 text-xs md:text-xs font-semibold uppercase
      text-white transition duration-200 ease-in-out hover:border-2 hover:border-black hover:bg-white
      hover:text-black;"
      to={to}
    >
      {children}
    </Link>
  );
}
