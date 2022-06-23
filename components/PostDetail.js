import moment from "moment";
import React from "react";
import PostCard from "./PostCard";
import PostWidget from "./PostWidget";

export default function PostDetail({ post }) {
  const getContentFragment = (index, text, obj, type) => {

    let modifiedText = text;

    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadown-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top rounded-lg h-full w-full"
        />
      </div>
      <div className="m-3 mt-6">
        <div className="font-medium text-gray-700 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <h1 className="text-left font-semibold text-3xl mb-8 ">{post.title}</h1>
        {console.log(post.content.raw)}
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => {
            return getContentFragment(itemIndex, item.text, item);
          });
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
}
