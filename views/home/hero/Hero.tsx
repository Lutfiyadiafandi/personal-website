import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative order-2 col-span-2 row-span-1 flex items-end justify-center rounded-4xl lg:order-2 min-h-[210px]">
      <Image
        style={{
          objectFit: "cover",
        }}
        src={"/hero.avif"}
        alt="Hero Image"
        priority
        fill
        sizes="(100vw)"
        placeholder="blur"
        blurDataURL="/hero.avif"
        className="rounded-4xl"
      />
    </div>
  );
};

export default Hero;
