import React from "react";

import AccordianMenu from "../components/AccordianMenu";
import BlogPosts from "../components/BlogPosts";
import { FeatureCard } from "../components/FeatureCard";
import ClientShowCase from "../components/ClientShowCase";

import * as data from "../data";

import mockScreen1 from "/mock-screen-1.png";
import mockScreen2 from "/mock-screen-2.png";
import mockScreen3 from "/mock-screen-3.png";
import iphoneMockScreen from "/iphoneMockScreen.png";

import ClientLogo1 from "../assets/clients/companyLogo1.svg";
import ClientLogo3 from "../assets/clients/companyLogo3.svg";
import ClientLogo4 from "../assets/clients/companyLogo4.svg";
import ClientLogo5 from "../assets/clients/companyLogo5.svg";
import ClientLogo7 from "../assets/clients/companyLogo7.svg";
import ClientLogo2 from "../assets/clients/companyLogo2.svg";
import ArrowRight from "../assets/icons/ArrowRight";
import PlayCircle from "../assets/icons/PlayCircle";

const Home = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="min-h-96 py-4 px-2 flex flex-col justify-center items-center gap-5 text-center">
          <button
            type="button"
            className="group/hoverButton inline-flex p-0.5 text-xs md:text-sm font-medium bg-purple-100 border border-purple-300 rounded-full"
          >
            <span className="py-0.5 px-2 bg-white text-purple-700 rounded-full">
              New Feature
            </span>
            <span className="py-0.5 px-2 text-purple-800 inline-flex gap-1 items-center rounded-full">
              Check out the team dashboard
              <ArrowRight className="size-4 mt-[1px] transition-all group-hover/hoverButton:translate-x-0.5" />
            </span>
          </button>
          <h1 className="text-4xl md:text-6xl font-bold">
            Beautiful analytics to grow smarter
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="flex w-full flex-col md:w-auto md:flex-row gap-2 text-lg font-semibold">
            <button
              type="button"
              className="p-2 min-w-24 border flex gap-1 justify-center items-center rounded-md hover:bg-gray-100"
            >
              <PlayCircle />
              Demo
            </button>
            <button
              type="button"
              className="p-2 min-w-24 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="pt-10">
          <div className="w-full min-h-full">
            <img src={mockScreen1} alt="" className="hidden md:block" />
            <img src={mockScreen3} alt="" className="block mx-auto md:hidden" />
          </div>
          <div className="px-2 pt-0 md:py-10">
            <p className="text-md md:text-xl  text-gray-700 text-center">
              Join 4,000+ companies already growing
            </p>
            <div className="py-10 flex flex-wrap gap-5 items-center justify-evenly">
              <ClientShowCase title="Nietzsche" logo={ClientLogo1} />
              <ClientShowCase title="Global Bank" logo={ClientLogo2} />
              <ClientShowCase title="Sperule" logo={ClientLogo3} />
              <ClientShowCase title="Feather Dev" logo={ClientLogo4} />
              <ClientShowCase title="Lightbox" logo={ClientLogo5} />
            </div>
          </div>
        </div>

        <hr className="border-b-gray-200" />

        <div className="py-10 px-2 text-center flex flex-col justify-center items-center gap-5">
          <p className="font-semibold text-purple-700">Features</p>
          <h3 className="text-3xl md:text-4xl font-bold">
            Analytics that feels like it’s from the future
          </h3>
          <p className="text-lg md:text-xl text-gray-600 text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="px-2 py-10 flex flex-wrap justify-evenly gap-14">
            {data.features.map((d, i) => (
              <FeatureCard
                key={i}
                icon={d.icon}
                title={d.title}
                content={d.content}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-5">
          <div>
            <img src={ClientLogo7} alt="" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-center my-4">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border">
              <img
                src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                alt=""
              />
            </div>
            <h5 className="text-lg font-semibold mt-2">Candice Wu</h5>
            <p className="text-gray-600">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="py-10 px-2 text-center flex flex-col justify-center items-center gap-5">
          <p className="py-0.5 px-2 text-sm text-purple-700 bg-purple-100 border border-purple-300 rounded-full">
            Features
          </p>
          <h3 className="text-3xl md:text-4xl font-bold">
            Cutting-edge features for advanced analytics
          </h3>
          <p className="text-lg md:text-xl text-gray-600 text-center">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="w-full">
            <img src={mockScreen2} alt="" className="hidden md:block" />
            <img
              src={iphoneMockScreen}
              alt=""
              className="block mx-auto md:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-evenly gap-14 py-10 md:py-0">
            {data.features.slice(0, 3).map((d, i) => (
              <FeatureCard
                key={i}
                icon={d.icon}
                title={d.title}
                content={d.content}
                learnMoreLink="/"
              />
            ))}
          </div>
        </div>

        <hr className=" border-b-gray-200" />

        <div className="py-10 px-2 flex flex-col justify-center items-center gap-5 max-w-full md:max-w-[50%] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Frequently asked questions
          </h3>
          <p className="text-ld md:text-xl text-gray-600 text-center">
            Everything you need to know about the product and billing.
          </p>
          <div className="w-full flex flex-col justify-evenly">
            {data.faqList.map((d, i) => (
              <AccordianMenu
                key={i}
                title={d.title}
                content={d.content}
                expanded={i == 0 && true}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 py-10 flex flex-col items-center gap-5 text-center">
          <div className="relative">
            <div className="bg-white -translate-y-1 relative z-10 w-14 h-14 rounded-full overflow-hidden border">
              <img
                src="https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10524.jpg?w=360"
                alt=""
              />
            </div>
            <div className="absolute w-12 h-12 top-0 left-[80%] rounded-full overflow-hidden border">
              <img
                src="https://www.glimpse.co.nz/img-get2/I0000jUEVPcEhfY0/fit=1000x750/Professional-Profile.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 -left-[80%] w-12 h-12 rounded-full overflow-hidden border">
              <img
                src="https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-handsome-looking-man-light-color-background_1078199-10792.jpg?w=360"
                alt=""
              />
            </div>
          </div>
          <div>
            <h5 className="text-xl md:text-2xl font-semibold my-2">
              Still have questions?
            </h5>
            <p className="text-gray-600">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button
            type="button"
            className="p-2 min-w-24 bg-purple-500 text-white rounded-md hover:bg-purple-600"
          >
            Get in touch
          </button>
        </div>

        <div className="py-10 px-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3 py-3">
              <p className="font-semibold text-purple-500">Our Blog</p>
              <h3 className="text-4xl font-bold">Lastest blog posts</h3>
              <p className="text-xl text-gray-600">
                Tool and strategies modern teams need to help their companies
                grow.
              </p>
            </div>
            <div className="hidden md:block">
              <button
                type="button"
                className="p-2 min-w-24 bg-purple-500 text-white rounded-md hover:bg-purple-600"
              >
                View all posts
              </button>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between">
            <BlogPosts />
          </div>
          <div className="block md:hidden">
            <button
              type="button"
              className="p-2 w-full mt-4 min-w-24 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              View all posts
            </button>
          </div>
        </div>

        <div className="py-20 px-4 bg-gray-50 flex flex-col gap-10 justify-center items-center">
          <div className="text-center">
            <h3 className="my-2 text-3xl md:text-4xl font-bold">
              Start your free trial
            </h3>
            <p className="text-lg md:text-xl text-gray-600">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div className="flex w-full justify-center flex-col md:flex-row gap-2 text-lg font-semibold">
            <button
              type="button"
              className="p-2 w-full md:w-auto min-w-24 border rounded-md hover:bg-gray-100"
            >
              Learn More
            </button>
            <button
              type="button"
              className="p-2 w-full md:w-auto min-w-24 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
