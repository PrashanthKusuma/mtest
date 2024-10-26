"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { image } from "../app/types";

export default function Carousel({
  username,
  images,
  isFront,
  autoSlide,
  autoSlideInterval,
}: {
  username: string;
  images: image[];
  isFront: boolean;
  autoSlide: boolean;
  autoSlideInterval: number;
}) {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);
  console.log(isFront);
  return (
    <div className="h-full w-full relative flex justify-center align-middle">
      <Link href={`/users/${username}`}>
        <div
          className="h-full w-full flex transition-transform duration-[500ms] ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt_text}
              className="w-full h-full block object-cover"
            />
          ))}
        </div>
      </Link>

      <div className="block absolute left-0 h-full w-24" onClick={prev}></div>
      <div className="block absolute right-0 h-full w-24" onClick={next}></div>
      <div
        className="absolute bottom-[60px]"
        style={{
          display: "flex",
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            className={`
              transition-all w-1.5 h-1.5 bg-white rounded-full m-0.5
              ${current === i ? "bg-opacity-100" : "bg-opacity-50"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
