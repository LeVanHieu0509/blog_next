import React from "react";
import classNames from "classnames/bind";
import styles from "./ThreeIcon.module.scss";
import { FakebookIcon, InstagramIcon, YoutobeIcon } from "components/Icons";
const cx = classNames.bind(styles);

export default function ThreeIcon() {
  return (
    <ul className={cx("menu-social")}>
      <li className={cx("menu-social-item")}>
        <FakebookIcon />
      </li>

      <li className={cx("menu-social-item")}>
        <InstagramIcon />
      </li>

      <li className={cx("menu-social-item")}>
        <YoutobeIcon />
      </li>
    </ul>
  );
}
