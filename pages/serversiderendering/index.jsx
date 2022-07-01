import { PostCard } from "components";
import Button from "components/Button";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getPosts } from "services";

//Một component nào đó không muốn render phía server chỉ muốn render phía client thôi
// sử dụng dynamic để import cái component đó
const Header = dynamic(() => import("components/test/header"), { ssr: false });
//component Hearder có ssr = false thì chỉ chạy ở bên phía client còn server thì không

//Bài học  SSG and Data Fetching on client side

export default function ServerSideRendering() {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  const page = router.query?.page;

  console.log(router.query);
  //Khi các cái file markup được render phía ui rồi thì sau đó

  // Ở phía client sẽ gọi tới useEffect mà call API và set data để render ra data
  //trong view  page source nó sẽ không render ra những thẻ html
  useEffect(() => {
    //Chú ý chỗ này khi component render
    // Lần đầu tiên mảng bị trống nên mình sẽ return ra để cho component chạy tới lần thứ 2
    // Thì mới call api render về phí UI
    if (!page) return;

    (async function () {
      const posts = (await getPosts()) || [];
      setPostList(posts);
    })();
  }, [page]);

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
      {/* render ở phía server */}
      <Header />
      <ul className="post-list">
        {/*render ra phía client */}
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
  console.log("server");
  return {
    props: {},
  };
}
