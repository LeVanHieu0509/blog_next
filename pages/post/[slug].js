import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  Loader,
  PostCard,
  PostWidget,
} from "../../components";
import { getPosts, getPostDetail } from "../../services";
import PostDetail from "components/PostDetail";
export default function PostDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:url" content={post.featuredImage.url}></meta>
        <meta property="og:title" content={post.title}></meta>
        <meta property="og:description" content={post.excerpt}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostDetail post={post} />
      <Author author={post.author} />
      {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
      <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} />
    </>
  );
}

//Hàm này chỉ chạy phía server và client không chạy
//Next js có hỗ trợ fetch api
export async function getStaticProps({ params }) {
  const data = await getPostDetail(params.slug);

  return {
    props: {
      //Có thể map lại data cần thiết (lọc data cần show ra ngoài client)
      //Nếu dữ liệu mà nhiều quá thì cắt bớt
      // Dữ liệu này sẽ được show ra ở file source trên browser
      post: data,
    },
  };
}

//ở chế độ dev mode thì user gửi request lên thì nó sẽ tạo ra file và trả về
//Còn ở chế độ product thì những file này nó đã được tạo ra rồi và
// user gửi request thì trả về file html đã được tạo cho user luôn
export async function getStaticPaths() {
  const posts = await getPosts();

  //Path là một mảng các object, có bao nhiều giá trị thì sẽ trả về bấy nhiêu file html
  //Khi lên trăm ngàn thì phải sử dụng ICR
  //slug hay id thì tùy vào đường dẫn
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    //fallback: true ->
    //fallback: false -> nếu không có slug match thì trả về notfound
    //fallback: blocking ->
    fallback: false, //or true || blocking
  };
}
