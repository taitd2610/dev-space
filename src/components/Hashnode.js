import React, { useState, useEffect } from "react";
import Header from "./Header";

import Fade from "react-reveal/Fade";
import { ThreeDots } from "svg-loaders-react";
import { ThumbUpIcon, ChatIcon } from "@heroicons/react/solid";

import hashnodeIcon from "../assets/images/hashnode.png";

const query = `{
    storiesFeed(type:BEST)
        {
            title,
            author
            {
                username,
                blogHandle,
                publicationDomain
            },
            coverImage,
            slug,
            dateFeatured,
            brief,
            cuid,
            totalReactions,
            responseCount
        }
    }
  `;

const Hashnode = () => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const apiResponse = await response.json();
    setLoading(false);
    setFeedPosts(apiResponse.data.storiesFeed);
    // console.log(feedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header
        icon={hashnodeIcon}
        title="Hashnode"
        borderColor="border-indigo-400"
      />

      {loading === true ? (
        <div className="flex justify-center my-48">
          <ThreeDots fill="#6366F1" />
        </div>
      ) : (
        <div className="flex flex-row flex-wrap  justify-center p-2">
          {feedPosts.map((post) => {
            return (
              <Fade bottom key={post.cuid}>
                <a
                  href={`https://${
                    post.author.publicationDomain === ""
                      ? post.author.blogHandle + ".hashnode.dev/"
                      : post.author.publicationDomain + "/"
                  }${post.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="w-72 h-72 py-auto shadow flex flex-col bg-white rounded-md p-4 text-left m-2">
                    <img
                      src={
                        post.coverImage === ""
                          ? "https://picsum.photos/seed/picsum/200/150"
                          : post.coverImage
                      }
                      alt="cover-img"
                      className="rounded h-36"
                    />
                    <h3 className="text-xl mt-2">{post.title}</h3>
                    <div className="flex justify-between">
                      <div className="flex">
                        <ThumbUpIcon className="h-6 w-6 text-blue-500"></ThumbUpIcon>
                        <p>{post.totalReactions}</p>
                      </div>

                      <div className="flex">
                        <ChatIcon className="h-6 w-6 text-blue-500"></ChatIcon>
                        <p>{post.responseCount}</p>
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

export default Hashnode;
