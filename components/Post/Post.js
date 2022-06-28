import React from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function Post() {
  return (
    <article className={cx("wrapper")}>
      <h1 className={cx("title")}>
        “Thanh xuân, nhất định phải đi Hà Giang một lần” – Và mình đã đi được
      </h1>
      <div className={cx("des")}>
        <span className={cx("date")}>June 27, 2022</span>
        <p className={cx("des-time")}>Reading time 10 minutes.</p>
      </div>
      <div>
        <img
          className={cx("img")}
          height={500}
          width="100%"
          src="https://thehanoichamomile.files.wordpress.com/2022/06/dscf3041.jpg?w=1500"
          alt="a"
        />
      </div>
      <div className={cx("sumary")}>
        <p>
          Tuổi thanh xuân của mình có lẽ đã trôi qua từ cách đây 7, 8 năm rồi,
          nhưng không vì thế mà nó hoàn toàn biến mất. Thanh xuân được định
          nghĩa là khoảng thời gian vui vẻ nhất của mỗi người chúng ta. Và
          chuyến đi Hà Giang này, chính là chuyến đi giúp […]
        </p>
      </div>
      <Button
        leftIcon={<></>}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
        className={cx("widget-box")}
      >
        READ MORE
      </Button>
    </article>
  );
}
