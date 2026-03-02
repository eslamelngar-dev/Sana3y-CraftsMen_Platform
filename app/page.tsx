"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { craftsmen } from "./data/craftsmen";
import { cities } from "./data/cities";
import { Profession } from "./types/craftsman";
import { CraftsmanCard } from "./components/CraftsmanCard";

const professions: Profession[] = [
  "الكل",
  "نجار",
  "سباك",
  "حداد",
  "نقاش",
  "كهربائي",
  "بناء",
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfession, setSelectedProfession] =
    useState<Profession>("الكل");
  const [selectedCity, setSelectedCity] = useState("الكل");

  const filteredCraftsmen = craftsmen.filter((craftsman) => {
    const matchesSearch = craftsman.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesProfession =
      selectedProfession === "الكل" ||
      craftsman.profession === selectedProfession;
    const matchesCity =
      selectedCity === "الكل" || craftsman.city === selectedCity;
    return matchesSearch && matchesProfession && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">اعثر على أفضل الصنايعية</h1>
          <p className="text-orange-100 text-lg mb-8">
            آلاف الصنايعية المحترفين في انتظارك
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن صنايعي..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 rounded-xl border-0 bg-white text-gray-800 pr-12 pl-4 text-base outline-none shadow-lg placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {professions.map((profession) => (
                <button
                  key={profession}
                  onClick={() => setSelectedProfession(profession)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedProfession === profession
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  {profession}
                </button>
              ))}
            </div>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-gray-600"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-500 text-sm">
            تم العثور على{" "}
            <span className="font-bold text-orange-500">
              {filteredCraftsmen.length}
            </span>{" "}
            صنايعي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCraftsmen.map((craftsman) => (
            <CraftsmanCard key={craftsman.id} craftsman={craftsman} />
          ))}
        </div>

        {filteredCraftsmen.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg font-medium">لا توجد نتائج</p>
            <p className="text-gray-400 mt-2 text-sm">جرب البحث بمعايير أخرى</p>
          </div>
        )}
      </main>
    </div>
  );
}
