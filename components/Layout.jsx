import Header from "./layouts/components/Header";
import Banner from "./layouts/components/Banner";
import Sidebar from "./layouts/components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper-box" style={{ position: "relative" }}>
        <Header />
        <Banner />
        <div className="content" style={{ width: "1170px", margin: "auto" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">{children}</div>
            <div className="lg:col-span-4 col-span-1">
              <div className="lg:stickey relative top-8">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
