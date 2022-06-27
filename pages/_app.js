import Layout from "../components/Layout";
import "../styles/globals.scss";
// own css files here

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
