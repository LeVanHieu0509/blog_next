import Button from "../../../components/Button";
import React, { Fragment } from "react";
import { Categories, PostWidget } from "../../../components";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const info = {
  title: "Blogger & Youtuber",
  des: "Hi. Mình là Nam Anh. Chào mừng bạn đến với blog của mình. Đây là nơi mình thường xuyên chia sẻ về những câu chuyện nho nhỏ trong đời sống thường ngày của mình. Mình tin rằng, hạnh phúc đến từ những điều giản dị nhất. Hi vọng bạn sẽ tìm thấy được sự bình yên và một chút niềm vui khi đọc blog của mình.",
  image:
    "https://thehanoichamomile.files.wordpress.com/2020/06/dbf23fb3-dba1-49ef-a02b-0fa95237ae41.jpg",
  listImage: [
    "https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/286898547_1618122115232265_878849748986904715_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Z7htlKQVZU8AX-YjSnI&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8nJCT2hILnNAUe2PgKDCXZKioLztiCAE-4lHvxXMcwuA&oe=62BCDD8F",
    "https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/287232381_417377940248087_774100411709216999_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ZUX2Fxu3p6AAX_DEe7A&_nc_ht=scontent-lax3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_oloa8aYNVAzqIB1VKIhtZTN2ZeS38RkhcQwggSz7fMQ&oe=62BCA1AA",
    "https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/286980801_409584174381380_1081265225576804139_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=gszB0fYrL-4AX_0oL3V&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_bkbAiDy2p338NIFwh1AOsH9FtNlrmz1Iro-_YYFL8WQ&oe=62BC5B76",
    "https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/286227090_724434782222322_3262207948162599433_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=aEbAI2Y0macAX-7RAkV&_nc_ht=scontent-lax3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-YABSdImMyglIr-PCQpjtgt249XKgnwnedsbmjHbi2PQ&oe=62BCDF40",
    "https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/283890449_458341112844445_7506144806026361884_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zUCG6rwverkAX81Dofo&_nc_ht=scontent-lax3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8zrvUtdlUxW1wVAFc1CO6aedkMaRIYjlpEKYx4smkxTw&oe=62BBCEC9",
    "https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/282043161_500544361856933_2586631970206725688_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zv71EQwrOJYAX_hHzM9&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_ZFs_0FptdCZU2w8qvmE-kMCxApXn2obbGZ6EYRDdXmA&oe=62BC55BF",
    "https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/280087330_534830354851817_8329958810250392075_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=xFGjQ8-Snd4AX8yReuq&_nc_ht=scontent-lax3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9D-p3Yb6gxyqduX_Sy0N9zwqef6vkgkvbeM2FzpakqtA&oe=62BB3012",
    "https://scontent-lax3-1.cdninstagram.com/v/t51.29350-15/279458895_1002499880453037_7026521167016971055_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5lcSmJSI100AX_pzwx8&_nc_ht=scontent-lax3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-9i8HQ8a5aIYlyfZ1m3aHC2fWaG81_Yqi3HkImDQ5DiQ&oe=62BD03E7",
    "https://scontent-lax3-2.cdninstagram.com/v/t51.29350-15/279395166_410762317147835_7366158233386139951_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Xz1FBsI4P_wAX9n1W6l&_nc_ht=scontent-lax3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-OE0cMG0ETeDaMMmVjbcpcRQqczLVcLrXobLmD0BrzwA&oe=62BB23B0",
  ],
};

export default function Sidebar() {
  return (
    <section className={cx("wrapper")}>
      <div className={cx("search-box")}>
        <input className={cx("search-input")} type="text" name="" />
        <Button className={cx("search-btn")}>SEARCH</Button>
      </div>
      <div className={cx("about-me")}>
        <Button className={cx("widget-box")}>ABOUT ME</Button>
        <img
          alt="qqqq"
          width="100%"
          height="264px"
          src="https://thehanoichamomile.files.wordpress.com/2020/06/dbf23fb3-dba1-49ef-a02b-0fa95237ae41.jpg"
        />

        <h3>{info.title}</h3>
        <p>{info.des}</p>
      </div>
      <div>
        <Button className={cx("widget-box")}>INSTAGRAM</Button>
        <div className="grid grid-cols-3 gap-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
        </div>
      </div>
      <Button className={cx("widget-box")}>ARCHIVES</Button>
      <PostWidget />
      <Button className={cx("widget-box")}>CATEGORY</Button>
      <Categories />
    </section>
  );
}
