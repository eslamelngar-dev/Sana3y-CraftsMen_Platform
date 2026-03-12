import { Star, MapPin, Briefcase } from "lucide-react";
import { Craftsman } from "../types/craftsman";
import Link from "next/link";
import Image from "next/image";

interface CraftsmanCardProps {
  craftsman: Craftsman;
}

export function CraftsmanCard({ craftsman }: CraftsmanCardProps) {
  return (
    <Link href={`/craftsman/${craftsman.id}`}>
      <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={craftsman.thumbnail}
            width={600}
            height={400}
            alt={craftsman.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {craftsman.profession}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {craftsman.name}
          </h3>

          <div className="flex items-center gap-2 mb-2 text-gray-500">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="text-sm">{craftsman.city}</span>
          </div>

          <div className="flex items-center gap-2 mb-3 text-gray-500">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-sm">
              {craftsman.yearsOfExperience} سنة خبرة
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-gray-800">
                {craftsman.rating}
              </span>
              <span className="text-sm text-gray-500">
                ({craftsman.reviewCount})
              </span>
            </div>
            <span className="text-xs text-gray-400">
              {craftsman.ordersCount} طلب
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}