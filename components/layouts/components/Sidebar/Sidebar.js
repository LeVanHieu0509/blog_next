import React, { Fragment } from "react";

import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Button from "components/Button";
import PostWidget from "components/PostWidget";
import Categories from "components/Category/Categories";
import Link from "next/link";
import { info } from "../../../../constants/info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <section className={cx("wrapper")}>
      <div className={cx("search-box")}>
        <input className={cx("search-input")} type="text" name="" />
        {/* <Button className={cx("search-btn")}>SEARCH</Button> */}
        <Button
          rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
          className={cx("search-btn")}
        >
          <span className={cx("search-title")}>SEARCH</span>
        </Button>
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
        <div className="grid grid-cols-3 gap-2">
          {info.listImage.map((image, index) => (
            <Link key={index} href="#">
              <div className={cx("img-instagram-box")}>
                <img
                  className={cx("img-instagram")}
                  src={image.linkImg}
                  alt="aa"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Button className={cx("widget-box")}>ARCHIVES</Button>
      <PostWidget />
      <Button className={cx("widget-box")}>CATEGORY</Button>
      <Categories />
    </section>
  );
}
