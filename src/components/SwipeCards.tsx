"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Carousel from "../components/Carousel";
// import Card from "./Card";

export default function SwipeCards({ matches }) {
  const [cards, setCards] = useState(matches);

  return (
    <div className="grid place-items-center">
      {cards.map((card) => (
        <Card key={card.id} cards={cards} setCards={setCards} {...card} />
      ))}
    </div>
  );
}

function Card({ id, username, name, bio, interests, images, setCards, cards }) {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  // const [isFront,setIsFront]=useState(false);
  const isFront = id === cards[cards.length - 1].id;
  // useEffect(()=>{
  //     setIsFront(id === cards[cards.length - 1].id)
  // },[isFront])
  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });
  const handleDragEnd = () => {
    if (x.get() > 30) {
      animate(x, 200, { duration: 0.2, ease: "easeOut" });
      setTimeout(() => {
        setCards((pv) => pv.filter((v) => v.id !== id));
      }, 300);
    } else if (x.get() < -30) {
      animate(x, -200, { duration: 0.2, ease: "easeOut" });
      setTimeout(() => {
        setCards((pv) => pv.filter((v) => v.id !== id));
      }, 300);
    }
  };
  return (
    <motion.div
      className="overflow-hidden h-[450px] w-[300px]  rounded-lg bg-white hover:cursor-grab active:cursor-grabbing relative " //origin-bottom
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
        zIndex: isFront ? 1 : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5} // Higher elastic makes the drag feel smoother and easier
      dragTransition={{
        power: 0.5, // Lower power reduces the force needed to drag
        bounceStiffness: 80,
        bounceDamping: 12,
      }}
      onDragEnd={handleDragEnd}
    >
      <>
        <Carousel
          username={username}
          isFront={isFront}
          autoSlide={isFront ? true : false}
          images={images}
        />

        <div className="absolute flex bottom-0 h-[57px] w-full bg-gradient-to-t from-black via-[rgba(0,0,0,0.744)] to-transparent">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="border flex justify-center items-center absolute left-6 bottom-2 h-[40px] w-[40px] rounded-full bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></div>
            <span className="block text-white text-lg">{name}</span>
          </div>
        </div>
      </>
    </motion.div>
  );
}
