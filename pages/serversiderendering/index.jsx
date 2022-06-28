import { PostCard } from "components";
import Button from "components/Button";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPosts } from "services";

//Một component nào đó không muốn render phía server chỉ muốn render phía client thôi
// sử dụng dynamic để import cái component đó
const Header = dynamic(() => import("components/test/header"), { ssr: false });

export default function ServerSideRendering() {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  const page = router.query?.page;

  useEffect(() => {
    //Chú ý chỗ này khi component render
    // Lần đầu tiên mảng bị trống nên mình sẽ return ra để cho component chạy tới lần thứ 2
    // Thì mới call api render về phí UI
    if (page) return;

    (async function () {
      const posts = (await getPosts()) || [];
      console.log("posts", posts);
      setPostList(posts);
    })();
  }, []);

  //Shallow Routing
  const handleOnClick = () => {
    router.push(
      {
        pathname: "/serversiderendering",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      //Rerender  ở phía client thôi còn không có rerender phía server trong hàm getStatic Props
      { shallow: true }
    );
  };
  return (
    <div>
      Test client side rendering
      <Header />
      test
      <ul>
        {postList.map((post, index) => (
          <PostCard key={post.cursor} post={post.node} />
        ))}
      </ul>
      <Button onClick={handleOnClick}>Next Page</Button>
    </div>
  );
}

// từ server tạo ra những file html trả về phía clients
//call api
export async function getStaticProps() {
  console.log("fetch api treene server");
  return {
    props: {},
  };
}
