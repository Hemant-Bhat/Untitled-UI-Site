import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight";

export function FeatureCard({ icon, title, content, learnMoreLink }) {
  return (
    <div className="inline-flex flex-col items-center justify-center w-auto md:w-80">
      <div className="w-12 h-12 inline-flex items-center justify-center border rounded-lg">
        {icon || ""}
      </div>
      <h6 className="mt-4 mb-2 text-lg md:text-xl font-semibold">{title}</h6>
      <p className="text-gray-600 text-center">{content}</p>
      {learnMoreLink && (
        <Link
          to={learnMoreLink}
          className="my-4 group/link inline-flex gap-1 items-center text-purple-700 font-semibold"
        >
          Learn more
          <ArrowRight className="mt-[4px] transition-transform group-hover/link:translate-x-1 " />
        </Link>
      )}
    </div>
  );
}
