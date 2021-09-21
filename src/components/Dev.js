import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";
import { ThreeDots } from "svg-loaders-react";
import { ThumbUpIcon, ChatIcon } from "@heroicons/react/solid";

import Header from "./Header";

import devIcon from "../assets/images/dev.webp";

const Dev = () => {
  const [devPosts, setDevPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState(1);

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

  useEffect(() => {
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
        <div className="flex flex-row flex-wrap justify-center p-2">
          {devPosts.map((post) => {
            return (
              <Fade bottom key={post.id}>
                <a href={post.url} target="_blank" rel="noreferrer">
                  <div className="w-72 h-64 py-auto shadow flex flex-col bg-white rounded-md p-4 text-left m-2">
                    <img
                      src={
                        post.social_image === ""
                          ? "https://picsum.photos/seed/picsum/200/150"
                          : post.social_image
                      }
                      alt="cover-img"
                      className="rounded"
                    />
                    <h3 className="text-xl mt-2">{post.title}</h3>
                    <div className="flex justify-between">
                      <div className="flex">
                        <ThumbUpIcon className="h-6 w-6 text-blue-500"></ThumbUpIcon>
                        <p>{post.public_reactions_count}</p>
                      </div>

                      <div className="flex">
                        <ChatIcon className="h-6 w-6 text-blue-500"></ChatIcon>
                        <p>{post.comments_count}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Fade>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dev;
