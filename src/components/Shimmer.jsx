import React from "react";
import Shimmer from "./Shimmer";

function ShimmerCards() {
  // Create an array to represent 10 shimmer cards
  const shimmerCards = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="card">
      <div className="shimmerBG media"></div>
      <div className="p-32">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG title-line end"></div>
        <div className="shimmerBG content-line m-t-24"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line end"></div>
      </div>
    </div>
  ));

  return <div className="flex flex-wrap justify-center">{shimmerCards}</div>;
}

export default ShimmerCards;
