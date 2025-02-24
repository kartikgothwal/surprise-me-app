"use client";
import React, { useState, useRef, useEffect } from "react";
import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Page() {
  const [clickCount, setClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://www.myinstants.com/media/sounds/abhi-maza-ayagga.mp3");
  }, []);

  const handleSurprise = () => {
    setClickCount((prev) => prev + 1);
    const currentClick = clickCount + 1;

    switch (currentClick % 4) {
      case 1:
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
        break;
      case 2:
        audioRef.current?.play();
        break;
      case 3:
        audioRef.current?.pause();
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
        }
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
        break;
      case 0:
        audioRef.current?.play();
        break;
      default:
        break;
    }
  };

  const word = [
    { text: "Hi," },
    { text: "I" },
    { text: "am" },
    { text: "Kartik" },
    { text: "Gothwal" },
  ];

  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        {showConfetti && <Confetti width={width} height={height} />}

        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          <TypewriterEffectSmooth words={word} />
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
          So, you wanted me to surprise you? Okay, assignment understood. Click
          the button below if you like surprises!!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition"
            onClick={handleSurprise}
          >
            Surprise Me!
          </motion.button>
        </div>
      </Vortex>
    </div>
  );
}
