import React, { Fragment } from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import Button from "components/Button";
import Link from "next/link";
import { info } from "../../../../constants/info";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("wrapper")}>
      <Button className={cx("widget-box")}>INSTAGRAM</Button>
      <div className={cx("img-instagram-parrent")}>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {info.listImage.map((image, index) => (
            <Link key={index} href="#">
              {index < 6 ? (
                <div className={cx("img-instagram-box")}>
                  <img
                    className={cx("img-instagram")}
                    src={image.linkImg}
                    alt=""
                  />
                </div>
              ) : (
                <></>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className={cx("info-footer")}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Button className={cx("widget-box")}>TAGS</Button>
          </div>
          <div>
            <Button className={cx("widget-box")}>FOLLOW ON FACEBOOK</Button>
          </div>
          <div>
            <Button className={cx("widget-box")}>SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
