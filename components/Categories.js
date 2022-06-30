import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import moment from "moment";

export default function Categories({ slug }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategory) => {
      setCategories(newCategory);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b">
        {slug ? "Categories" : "Categories Post"}
      </h3>
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex items-center w-full mb-4 border-b"
        >
          <div className="ml-3 ">
            <Link href={`/category/${category.slug}`}>{category.slug}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
