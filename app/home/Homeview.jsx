"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/imgs/truck1.jpg",
    title: "Auto Transport\nLeads For Brokers",
    description:
      "We’ve Been The Biggest Car Shipping Lead Providers For Over 15 Years.",
  },
  {
    image: "/imgs/truck2.jpg",
    title: "Reliable Auto\nTransport Solutions",
    description:
      "Connect With Trusted Carriers And Grow Your Auto Transport Business.",
  },
  {
    image: "/imgs/truck3.jpg",
    title: "Grow Your Business\nWith Quality Leads",
    description:
      "Get Quality Shipping Leads And Take Your Brokerage To The Next Level.",
  },
];

export default function Homeview() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[650px] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title.replace("\n", " ")}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <h1 className="max-w-5xl whitespace-pre-line text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
          {slides[current].title}
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed sm:text-2xl">
          {slides[current].description}
        </p>

        <a
          href="#learn-more"
          className="mt-12 inline-flex min-w-[235px] items-center justify-center border border-white px-10 py-5 font-bold transition-colors hover:bg-white hover:text-black"
        >
          LEARN MORE
        </a>
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-4xl text-white sm:left-8"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-4xl text-white sm:right-8"
      >
        &#10095;
      </button>

      <div className="absolute bottom-7 left-0 z-20 flex w-full justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full border border-white ${
              current === index ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}