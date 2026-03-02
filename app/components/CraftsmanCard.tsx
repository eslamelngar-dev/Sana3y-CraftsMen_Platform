import { Star, MapPin, Briefcase } from "lucide-react";
import { Craftsman } from "../types/craftsman";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@mui/material";

interface CraftsmanCardProps {
  craftsman: Craftsman;
}

export function CraftsmanCard({ craftsman }: CraftsmanCardProps) {
  return (
    <Link href={`/craftsman/${craftsman.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-46 overflow-hidden">
          <Image
            src={craftsman.thumbnail}
            width={600}
            height={600}
            alt={craftsman.name}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl mb-2">{craftsman.name}</h3>

          <div className="flex items-center gap-2 mb-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{craftsman.city}</span>
          </div>

          <div className="flex items-center gap-2 mb-3 text-gray-600">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm">
              {craftsman.yearsOfExperience} سنة خبرة
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{craftsman.rating}</span>
            </div>
            <span className="text-sm text-gray-600">
              ({craftsman.reviewCount} تقييم)
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
