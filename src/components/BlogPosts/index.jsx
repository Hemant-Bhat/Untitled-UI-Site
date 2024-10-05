import React from "react";
import BlogPost from "../BlogPost";
import * as data from "../../data";

export default () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between">
      {data.posts.map((d, i) => (
        <BlogPost
          key={i}
          title={d.title}
          category={d.category}
          author={d.author}
          content={d.content}
          thumbail={
            d.thumbail ||
            "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png"
          }
          postedOn={d.postedOn}
        />
      ))}
    </div>
  );
};
