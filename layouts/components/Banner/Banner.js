import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import ThreeIcon from "components/ThreeIcon/ThreeIcon";

const cx = classNames.bind(styles);
export default function Banner() {
  return (
    <section className={cx("wrapper")}>
      <h1 className={cx("title")}>KIRA</h1>
      <h2 className={cx("des")}>THE HANOI CHAMOMILE</h2>
      <div className={cx("icon")}>
        <ThreeIcon />
      </div>
    </section>
  );
}
