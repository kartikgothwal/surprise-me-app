"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const surprises = [
  "Why don’t skeletons fight each other? They don’t have the guts!",
  "Did you know? Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat!",
  "Playing a funny sound... (Imagine a duck quacking 🦆)",
  "Changing the background color...",
  "Confetti time! 🎉",
];

export default function Page() {
  const [surprise, setSurprise] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bgColor, setBgColor] = useState("bg-white");
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const playSound = () => {
    const audio = new Audio(
      "https://www.myinstants.com/media/sounds/abhi-maza-ayagga.mp3"
    );
    audio.play();
  };

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * surprises.length);
    const selectedSurprise = surprises[randomIndex];
    setSurprise(selectedSurprise);

    if (selectedSurprise.includes("Changing the background")) {
      setBgColor(`bg-[hsl(${Math.random() * 360}, 100%, 80%)]`);
    } else if (selectedSurprise.includes("Confetti")) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else if (selectedSurprise.includes("Playing a funny sound")) {
      playSound();
    }
  };
  const word = [
    {
      text: "Hi,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Kartik",
    },
    {
      text: "Gothwal",
    },
  ];
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        {showConfetti && <Confetti width={width} height={height} />}

        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          <TypewriterEffectSmooth words={word} />
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
          So, you wanted me to surprise you? Okay, assignment understood click
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
      {surprise && (
        <motion.p
          className="mt-5 text-xl text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {surprise}
        </motion.p>
      )}
    </div>
  );
}
