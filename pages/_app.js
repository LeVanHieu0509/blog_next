import { DefaultLayout } from "../components/layouts/index";
import "../styles/globals.scss";
// own css files here

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
