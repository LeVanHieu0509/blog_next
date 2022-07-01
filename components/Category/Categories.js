import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../../services";
import moment from "moment";

export default function Categories({ slug }) {
  const [categories, setCategories] = useState([]);
  const number = 3;
  useEffect(() => {
    getCategories().then((newCategory) => {
      setCategories(newCategory);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-8">
      {categories.map((category) => (
        <div
          key={category.slug}
          className="flex items-center w-full mb-4 cursor-pointer"
        >
          <div className="ml-3 ">
            <Link href={`/category/${category.slug}`}>
              <span>
                {category.name} ({number})
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
