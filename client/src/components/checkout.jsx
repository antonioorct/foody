import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Checkout(props) {
  const { state: cart } = useLocation();

  return <div>{cart[0].name}</div>;
}
