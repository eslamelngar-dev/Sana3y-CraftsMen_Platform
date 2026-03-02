"use client"
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
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl mb-2">منصة الصنايعية</h1>
          <p className="text-gray-600">اعثر على أفضل الصنايعية في منطقتك</p>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن صنايعي..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="placeholder:text-muted-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 pr-10 py-1 text-base outline-none transition-[color,box-shadow] md:text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              />
            </div>

            <select
              value={selectedProfession}
              onChange={(e) =>
                setSelectedProfession(e.target.value as Profession)
              }
              className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] md:text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {professions.map((profession) => (
                <option key={profession} value={profession}>
                  {profession}
                </option>
              ))}
            </select>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] md:text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            {professions.map((profession) => (
              <button
                key={profession}
                onClick={() => setSelectedProfession(profession)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] h-9 px-4 py-2 ${
                  selectedProfession === profession
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {profession}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-4">
          <p className="text-gray-600">{filteredCraftsmen.length} صنايعي</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCraftsmen.map((craftsman) => (
            <CraftsmanCard key={craftsman.id} craftsman={craftsman} />
          ))}
        </div>

        {filteredCraftsmen.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد نتائج</p>
            <p className="text-gray-400 mt-2">جرب البحث بمعايير أخرى</p>
          </div>
        )}
      </main>
    </div>
  );
}
