import React from "react";
import Image from "next/image";
export default function Author({ author }) {
  return (
    <div className="relative text-center mt-20 mb-8 p-12 bg-opacity-20 rounded-lg bg-black ">
      <div className=" absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          className=" align-middle rounded-full "
          height="100px"
          width="100px"
          src={author.photo.url}
          alt={author.title}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
}
