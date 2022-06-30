import Button from "../../../components/Button";
import React from "react";

import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

export default function MenuItem({ data }) {
  console.log(data);
  const classes = cx("menu-item", {
    separate: true,
  });
  return <Button className={classes}>{data.title}</Button>;
}
