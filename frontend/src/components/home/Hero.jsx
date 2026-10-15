import { useEffect, useState } from "react";

import Home1 from "../../assets/Imagess/HomeImage/Home1.jpeg";
import Home2 from "../../assets/Imagess/HomeImage/Home2.jpeg";
import Home3 from "../../assets/Imagess/HomeImage/Home3.jpeg";
import Home4 from "../../assets/Imagess/HomeImage/Home4.jpeg";
import Home5 from "../../assets/Imagess/HomeImage/Home5.jpeg";
import Home6 from "../../assets/Imagess/HomeImage/Home6.jpeg";

const images = [Home1, Home2, Home3, Home4, Home5, Home6];

// [x y] anchors — mobile-first value, then md: override for desktop
const objectPositions = [
  "object-[center_center] md:object-center", // Home1 - try 'center' x first; adjust if sides still crop badly
  "object-center md:object-center",
  "object-center md:object-center",
  "object-center md:object-center",
  "object-center md:object-center",
  "object-center md:object-center",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hemant Sharma Photography - ${index + 1}`}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover ${objectPositions[index]} transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </section>
  );
}