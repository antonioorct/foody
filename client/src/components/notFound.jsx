import React from "react";
import Image from "react-bootstrap/Image";

export default function NotFound() {
  return (
    <div className="text-center">
      <a href="/">
        <Image style={{ height: "300px" }} src="img/logo.png"></Image>
      </a>
      <br />
      <p>Stranica nije pronadena.</p>
    </div>
  );
}
