import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface props {
  allImages: string[];
  currentImage: number;
  prevImage: () => void;
  nextImage: () => void;
  setCurrentImage: (i: number) => void;
}
export default function Carousel({
  allImages,
  currentImage,
  prevImage,
  nextImage,
  setCurrentImage,
}: props) {
  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="relative">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={allImages[currentImage]}
              fill
              alt={`صورة ${currentImage + 1}`}
              className="object-cover"
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentImage ? "bg-white w-6" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-4 flex gap-2 overflow-x-auto">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`relative w-20 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                i === currentImage ? "border-orange-500" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                fill
                alt={`thumbnail ${i}`}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
