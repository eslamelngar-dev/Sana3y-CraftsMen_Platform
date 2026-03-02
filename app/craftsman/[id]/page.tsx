"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { craftsmen } from "../../data/craftsmen";
import { reviews } from "../../data/reviews";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Star,
  MapPin,
  Briefcase,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function CraftsmanPage() {
  const { id } = useParams();
  const craftsman = craftsmen.find((c) => c.id === id);
  const craftsmanReviews = reviews.filter((r) => r.craftsmanId === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!craftsman) return notFound();

  const allImages = [craftsman.thumbnail, ...craftsman.images];

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);

  const joinedDate = new Date(craftsman.joinedAt).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-orange-100 shrink-0">
                    <Image
                      src={craftsman.thumbnail}
                      fill
                      alt={craftsman.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-2xl font-bold text-gray-800">
                        {craftsman.name}
                      </h1>
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {craftsman.profession}
                    </span>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span>{craftsman.city}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-orange-500" />
                        <span>{craftsman.yearsOfExperience} سنة خبرة</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span>انضم {joinedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                  نبذة عني
                </h2>
                <p className="text-gray-600 leading-relaxed">{craftsman.bio}</p>
              </div>
            </div>

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
                      i === currentImage
                        ? "border-orange-500"
                        : "border-transparent"
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">التقييمات</h2>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-800">
                      {craftsman.rating}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({craftsman.reviewCount})
                    </span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-50">
                {craftsmanReviews.map((review) => (
                  <div key={review.id} className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-sm">
                            {review.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {review.author}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {new Date(review.date).toLocaleDateString("ar-EG")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))}

                {craftsmanReviews.length === 0 && (
                  <div className="p-12 text-center text-gray-400">
                    <Star className="w-12 h-12 mx-auto mb-3 text-gray-200" />
                    <p>لا توجد تقييمات بعد</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-800 mb-6">إحصائيات</h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-2xl font-bold text-gray-800">
                      {craftsman.rating}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">التقييم</p>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <ShoppingBag className="w-4 h-4 text-orange-500 ml-1" />
                    <span className="text-2xl font-bold text-gray-800">
                      {craftsman.ordersCount}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">طلب منجز</p>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Briefcase className="w-4 h-4 text-orange-500 ml-1" />
                    <span className="text-2xl font-bold text-gray-800">
                      {craftsman.yearsOfExperience}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">سنة خبرة</p>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <MessageCircle className="w-4 h-4 text-orange-500 ml-1" />
                    <span className="text-2xl font-bold text-gray-800">
                      {craftsman.reviewCount}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">تقييم</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  تواصل عبر واتساب
                </a>

                <a
                  href=""
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
