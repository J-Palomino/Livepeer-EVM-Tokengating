import Image from "next/image";
import React, { useState } from "react";
import { Button, Page, Modal, Nav } from "./index";
import CanvasStreamer from "./CanvasStreamer";
import { TypewriterEffectSmoothDemo } from "./home/TypewriterEffectSmoothDemo";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [onInputChange, setOnInputChange] = useState("");
  return (
    <>
      <Nav />
      <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div className="text-center lg:text-left">
                <TypewriterEffectSmoothDemo />
                <h1 className="font-sans text-4xl font-medium leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-sams">
                  Bringing back fun, safe, livestreams with N🚫 Bananas 🍌
                </h1>
                <p className="mt-2 font-sans text-lg text-gray-400 sm:mt-8">
                  Set up a stream or watch one live now 🚀
                </p>
              </div>
              <div className="flex flex-col mt-8 text-center lg:text-left md:flex-row ">
                <Button
                  to="/create"
                  text="text-xl"
                  className="px-10 py-4 bg-primary border-primary text-background hover:border-primary hover:text-primary hover:bg-background"
                >
                  Set up stream
                </Button>
                <Button
                  onClick={() => setShowModal(true)}
                  text="text-xl"
                  className="px-10 py-4 mt-3 border-primary text-primary md:ml-8 hover:bg-primary hover:text-background md:mt-0"
                >
                  Watch stream
                </Button>
              </div>
            </div>
            <div className="w-full h-100 relative pb-[100%] md:ml-8">
              <Image
                className="hero-image"
                src="/assets/hero.png"
                layout="fill"
                alt="Aptos Logo"
              />
            </div>
          </div>
        </div>
        <CanvasStreamer />
      </section>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onInputChange={(e) => setOnInputChange(e.target.value)}
          onSubmit={() => {
            window.location.href = `/watch/${onInputChange}`;
          }}
        />
      )}
    </>
  );
}
