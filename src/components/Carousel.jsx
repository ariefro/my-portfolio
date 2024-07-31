import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

function CarouselCustomNavigation({ images }) {
  return (
    <Carousel
      className="rounded-xl mx-auto"
      loop={true}
      autoplay={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((src, index) => (
        <div key={index} className="relative rounded-xl overflow-hidden">
          <Image
            alt={`thumbnail-${index}`}
            src={src}
            width={1280}
            height={690}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselCustomNavigation;
