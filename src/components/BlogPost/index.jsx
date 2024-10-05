import React from "react";
import { Link } from "react-router-dom";

import ArrowRightUp from "../../assets/icons/ArrowRightUp";

export default ({ category, thumbail, title, content, author, postedOn }) => {
  return (
    <div className="py-4 flex flex-col min-w-auto max-w-full md:min-w-80 md:max-w-[30%]">
      <div className="w-full h-[200px]">
        <img src={thumbail} alt="" className="w-full h-full" />
      </div>
      <div className="mt-2 mb-4">
        <Link
          to="/"
          className="text-sm mb-2 flex mt-2 text-purple-700 font-semibold"
        >
          {category}
        </Link>
        <Link className="flex items-center gap-2 justify-between text-2xl font-semibold">
          {title}
          <span>
            <ArrowRightUp />
          </span>
        </Link>
        <p className="mt-3 text-gray-500">{content}</p>
      </div>
      <PostAuthor
        author={author.name}
        profile={author.profile}
        postedOn={postedOn}
      />
    </div>
  );
};

const PostAuthor = ({ author, profile, postedOn }) => {
  return (
    <Link to="/" className="mt-auto flex gap-2 items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden border">
        <img src={profile} alt="" />
      </div>
      <div>
        <h6 className="font-semibold">{author}</h6>
        <p className="text-gray-600">{postedOn}</p>
      </div>
    </Link>
  );
};
