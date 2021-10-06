import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { ThreeDots } from "svg-loaders-react";
import { ThumbUpIcon, ChatIcon, BookmarkIcon } from "@heroicons/react/solid";

import Header from "./Header";

import devIcon from "../assets/images/dev.webp";

const Dev = () => {
  const [devPosts, setDevPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState(1);

  useEffect(() => {
    const getDevFeed = async () => {
      const response = await fetch(`https://dev.to/api/articles?top=${top}`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      const apiResponse = await response.json();
      // console.log(apiResponse);
      setLoading(false);
      setDevPosts(apiResponse);
    };
    getDevFeed();
  }, [top]);

  return (
    <div>
      <Header
        icon={devIcon}
        title="Dev"
        borderColor="border-gray-500"
        setTop={(top) => setTop(top)}
      />
      {loading === true ? (
        <div className="flex justify-center my-48">
          <ThreeDots fill="#6366F1" />
        </div>
      ) : (
        //  Cards
        <div class="grid lg:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-5 p-4">
          {devPosts.map((post) => (
            <Fade bottom key={post.id}>
              <a href={post.url} target="_blank" rel="noreferrer">
                <div class="bg-white shadow-md border border-gray-200 rounded-lg">
                  <img
                    class="rounded-t-lg w-full h-32 sm:h-48 object-cover"
                    src={
                      post.social_image === ""
                        ? "https://picsum.photos/seed/picsum/200/150"
                        : post.social_image
                    }
                    alt="cover-img"
                  />

                  <div className="text-left px-4">
                    <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                      <h3 className="text-xl mt-2 font-bold tracking-tight mb-2">
                        {post.title}
                      </h3>
                    </div>

                    <div className="flex justify-between mb-4">
                      <div className="flex">
                        <ThumbUpIcon className="h-6 w-6 text-blue-500"></ThumbUpIcon>
                        <p>{post.public_reactions_count}</p>
                      </div>

                      <div className="flex">
                        <BookmarkIcon className="h-6 w-6 text-blue-500 hover:text-yellow-500"></BookmarkIcon>
                      </div>

                      <div className="flex">
                        <ChatIcon className="h-6 w-6 text-blue-500"></ChatIcon>
                        <p>{post.comments_count}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Fade>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dev;
