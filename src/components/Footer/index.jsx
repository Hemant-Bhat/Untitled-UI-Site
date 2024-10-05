import React from "react";
import logo from "/Logomark.svg";
import { Link } from "react-router-dom";

const footerSections = [
  {
    type: "Product",
    list: [
      {
        name: "Overview",
        url: "/",
      },
      {
        name: "Features",
        url: "/",
      },
      {
        name: "Solutions",
        url: "/",
      },
      {
        name: "Tutorial",
        url: "/",
      },
      {
        name: "Pricing",
        url: "/",
      },
      {
        name: "Releases",
        url: "/",
      },
    ],
  },
  {
    type: "Company",
    list: [
      {
        name: "About us",
        url: "/",
      },
      {
        name: "Careers",
        url: "/",
      },
      {
        name: "Press",
        url: "/",
      },
      {
        name: "News",
        url: "/",
      },
      {
        name: "Median kit",
        url: "/",
      },
      {
        name: "Contact",
        url: "/",
      },
    ],
  },
  {
    type: "Resources",
    list: [
      {
        name: "Blog",
        url: "/",
      },
      {
        name: "Newsletter",
        url: "/",
      },
      {
        name: "Events",
        url: "/",
      },
      {
        name: "Help center",
        url: "/",
      },
      {
        name: "Tutorials",
        url: "/",
      },
      {
        name: "Support",
        url: "/",
      },
    ],
  },
  {
    type: "Use cases",
    list: [
      {
        name: "Startups",
        url: "/",
      },
      {
        name: "Enterprise",
        url: "/",
      },
      {
        name: "Goverment",
        url: "/",
      },
      {
        name: "SaaS center",
        url: "/",
      },
      {
        name: "Marketplaces",
        url: "/",
      },
      {
        name: "Ecommerce",
        url: "/",
      },
    ],
  },
  {
    type: "Social",
    list: [
      {
        name: "Twitter",
        url: "/",
      },
      {
        name: "Linkedin",
        url: "/",
      },
      {
        name: "Facebook",
        url: "/",
      },
      {
        name: "Github",
        url: "/",
      },
      {
        name: "AngerlList",
        url: "/",
      },
      {
        name: "Dribble",
        url: "/",
      },
    ],
  },
  {
    type: "Legal",
    list: [
      {
        name: "Terms",
        url: "/",
      },
      {
        name: "Privacy",
        url: "/",
      },
      {
        name: "Cookies",
        url: "/",
      },
      {
        name: "Licenses",
        url: "/",
      },
      {
        name: "Setting",
        url: "/",
      },
      {
        name: "Contact",
        url: "/",
      },
    ],
  },
];

export default () => {
  return (
    <footer className="py-10 max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between">
        {footerSections.map((d, i) => {
          return <FooterSection key={i} type={d.type} list={d.list} />;
        })}
      </div>
      <div className="px-4 flex flex-col md:flex-row justify-between mt-10">
        <Link
          to="/"
          className="inline-flex gap-3 items-center hover:outline-dashed outline-1 mb-2 md:mb-0"
        >
          <img src={logo} alt="" />
          <h5 className="text-2xl font-bold">Untitled UI</h5>
        </Link>

        <span className="text-gray-500">
          © 2077 Untitled UI. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

const FooterSection = ({ type, list }) => {
  return (
    <div className="px-4 py-4 w-[50%] md:w-auto">
      <p className="mb-4 text-sm font-semibold text-gray-500">{type}</p>
      {list.map((d, i) => (
        <Link
          key={i}
          to={d.url}
          className="my-2 block font-semibold text-gray-700 hover:outline-dashed outline-1"
        >
          {d.name}
        </Link>
      ))}
    </div>
  );
};
