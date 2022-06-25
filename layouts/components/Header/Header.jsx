import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {
  FakebookIcon,
  InstagramIcon,
  MessageIcon,
  YoutobeIcon,
} from "../../../components/Icons";
import Menu from "../../../components/Popper/Menu";
import ThreeIcon from "components/ThreeIcon/ThreeIcon";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    title: "English",
    //cứ thằng nào có children thì nó là cấp 2
    // data là những item con
    children: {
      title: "language",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English",
        },
        {
          type: "Language",
          code: "vi",
          title: "Việt Nam",
        },
      ],
    },
  },
  {
    title: "Feedback",
    to: "/feedback",
  },
  {
    title: "Keyboard shortcuts",
  },
];

export default function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("nav_left")}>
        <ul className={cx("nav-menu")}>
          <li className={cx("menu-item")}>
            <a href="#">HOME</a>
          </li>

          <Menu items={MENU_ITEMS}>
            <li className={cx("menu-item menu-item-blog")}>
              <a className={cx("menu-item-link")} href="#">
                BLOG
              </a>
            </li>
          </Menu>

          <li className={cx("menu-item")}>
            <a href="#">YOUTOBE</a>
          </li>
          <li className={cx("menu-item")}>
            <a href="#">ỦNG HỘ</a>
          </li>
          <li className={cx("menu-item")}>
            <a href="#">ABOUT ME</a>
          </li>
          <li className={cx("menu-item")}>
            <a href="#">日本語</a>
          </li>
        </ul>
      </div>
      <div className={cx("nav_right")}>
        <ThreeIcon />
      </div>
    </header>
  );
}
