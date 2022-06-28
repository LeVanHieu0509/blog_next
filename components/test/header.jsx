import React from "react";

//Bị render 2 lần ở phía client 1 lần và server 1 lần

export default function Header() {
  console.log("header");
  return <div>Header</div>;
}
