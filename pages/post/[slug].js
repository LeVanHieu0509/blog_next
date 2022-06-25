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
  PostDetail,
  PostWidget,
} from "../../components";
import { getPosts, getPostDetail } from "../../services";
export default function PostDetails({ post }) {
  const router = useRouter();
  console.log(post);
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <meta property="og:url" content={post.featuredImage.url}></meta>
        <meta property="og:title" content={post.title}></meta>
        <meta property="og:description" content={post.excerpt}></meta>
        <title>{post.title}</title>
        {/* <meta name="description" content={post.excerpt} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostDetail post={post} />
      <Author author={post.author} />
      {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
      <CommentsForm slug={post.slug} />
      <Comments slug={post.slug} />
      {/* <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
           
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostDetail(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
