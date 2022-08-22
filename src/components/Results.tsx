import React from "react";
import { useLocation } from "react-router-dom";
import Masonry from "react-masonry-css";
import ReactPlayer from "react-player";

import { useResultContext } from "../context/ResultContextProvider";
import {
  NewsResultType,
  SearchOrImageOrVideoResultInterface,
} from "../types/GoogleResultType";
import { Loading } from "./Loading";

export const Results = () => {
  const location = useLocation();
  const { isLoading, results } = useResultContext();

  if (isLoading) {
    return (
      <div className="flex-1 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="relative w-full flex-1 flex items-start p-6">
          <div className="hidden md:block flex-shrink-0 w-40" />
          <div className="w-full md:max-w-[640px]">
            <div className="flex flex-col gap-6">
              {(results as SearchOrImageOrVideoResultInterface)?.results?.map(
                ({ link, title, description, cite }, index) => (
                  <div key={index}>
                    <a
                      className="flex flex-col group"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-sm">
                        {cite
                          ? cite.domain
                            ? cite.domain
                            : link.length > 30
                            ? `${link.substring(0, 30)}...`
                            : link
                          : link.length > 30
                          ? `${link.substring(0, 30)}...`
                          : link}
                      </span>
                      <span className="text-lg group-hover:underline dark:text-blue-300 text-blue-700">
                        {title}
                      </span>
                    </a>
                    <p className="text-sm">{description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      );

    case "/image":
      return (
        <Masonry
          breakpointCols={{
            default: 6,
            1100: 5,
            700: 4,
            500: 3,
          }}
          className="my-masonry-grid p-6"
          columnClassName="my-masonry-grid_column"
        >
          {(results as SearchOrImageOrVideoResultInterface)?.image_results?.map(
            (image, index) => (
              <div key={index} className="mb-8">
                <a
                  className="flex flex-col"
                  href={image.link?.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt={image.image?.alt}
                    className="w-full h-auto object-cover mb-3"
                    loading="lazy"
                    src={image.image?.src}
                  />
                  <span className="line-clamp-1 text-sm">
                    {image.link?.title}
                  </span>
                  <span className="line-clamp-1 text-xs">
                    {image.link?.href}
                  </span>
                </a>
              </div>
            )
          )}
        </Masonry>
      );

    case "/news":
      return (
        <div className="relative w-full flex-1 flex items-start p-6">
          <div className="hidden md:block flex-shrink-0 w-40" />
          <div className="w-full md:max-w-[640px]">
            <div className="flex flex-col gap-6">
              {(results as NewsResultType)?.entries?.map(
                ({ links, title, id, source }) => (
                  <div key={id}>
                    <a
                      className="flex flex-col hover:underline"
                      href={links?.[0].href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-lg dark:text-blue-300 text-blue-700">
                        {title}
                      </span>
                    </a>
                    <p className="flex gap-4">
                      <a href={source?.href} target="_blank" rel="noreferrer">
                        {source?.href}
                      </a>
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      );

    case "/video":
      return (
        <div className="relative w-full flex-1 flex items-start p-6">
          <div className="hidden md:block flex-shrink-0 w-40" />
          <div className="w-full md:max-w-[640px]">
            <div className="flex flex-col gap-6">
              {(results as SearchOrImageOrVideoResultInterface)?.results
                ?.filter((video) =>
                  video.link.startsWith("https://www.youtube.com")
                )
                ?.map(({ cite, link, description, title }, index) => (
                  <div key={index}>
                    <a
                      className="flex flex-col group"
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-sm">
                        {cite
                          ? cite.domain
                            ? cite.domain
                            : link.length > 30
                            ? `${link.substring(0, 30)}...`
                            : link
                          : link.length > 30
                          ? `${link.substring(0, 30)}...`
                          : link}
                      </span>
                      <span className="text-lg group-hover:underline dark:text-blue-300 text-blue-700">
                        {title}
                      </span>
                    </a>
                    <div className="flex flex-col md:flex-row gap-6 mt-1">
                      <div className="flex-shrink-0 w-full md:w-[200px] aspect-video rounded-xl overflow-hidden">
                        <ReactPlayer
                          controls
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          width={"100%"}
                          height={"100%"}
                          url={link}
                        />
                      </div>
                      <p className="text-sm">{description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      );

    default:
      return <div>Error!</div>;
  }
};
