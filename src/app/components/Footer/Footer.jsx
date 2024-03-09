import Link from "next/link";
import React from "react";

export const Footer = () => {
  const links = [
    { href: "api/area", text: "Area" },
    { href: "api/bar", text: "Bar" },
    { href: "api/line", text: "Line" },
    { href: "api/composed", text: "Composed" },
    { href: "api/pie", text: "Pie" },
    { href: "api/scatter", text: "Scatter" },
    { href: "api/treemap", text: "Treemap" },
    { href: "api/radar", text: "Radar" },
    { href: "api/radial", text: "Radial" },
    { href: "api/funnel", text: "Funnel" },
  ];

  return (
    <div className="mt-2 py-4 w-full">
      <div className="text-center pb-10">
        <h3 className="text-white/40 pb-5">APIs</h3>
        <p className="text-yellow-200/60 p-4">
          Data sources I used to create the charts
        </p>
        {/* <ul className="grid grid-rows-1 grid-flow-col gap-4"> */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <li className="mx-12 bg-slate-600 hover:bg-slate-800 rounded-xl transition duration-300 ease-in-out">
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <p className="text-center">
        Developed by
        <a
          href="https://jpdiaz.dev/"
          className="text-white/40 px-2 hover:underline"
        >
          Juan Diaz
        </a>
      </p>
    </div>
  );
};
