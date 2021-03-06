import Post from "components/Post";
import Head from "next/head";
import { useRouter } from "next/router";
import {
    Loader
} from "../../components";
import { getCategories, getPostCategory } from "../../services";

export default function category({data}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    if (router.isFallback) {
      return <Loader />;
    }
  return (
    <div className="container mx-auto mb-8">
      <Head>
        <title>KIRA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1 className="text-center mb-8 mt-8">Category: {data.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.posts.map((post, index) =>
           (
              <Post key={post.slug} post={post} />
          )
        )}
      </div>
    </div>
  );
}

//Hàm này chỉ chạy phía server và client không chạy
//Next js có hỗ trợ fetch api
export async function getStaticProps({ params }) {
    //get bai post theo params
    const data = await getPostCategory(params.slug);
    console.log(data)
  return {
    props: {
        data
    },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((slug) => {        
        return {params: slug}
    }),
    fallback: false, //or true || blocking
  };
}
