"use client";
import { useState, useRef } from "react";
import {
  Search,
  Users,
  Phone,
  CheckCircle,
  Hammer,
  Droplets,
  Zap,
  Wrench,
  Paintbrush,
  Building2,
} from "lucide-react";
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

const professionIcons: Record<string, React.ReactNode> = {
  نجار: <Hammer className="w-8 h-8 text-orange-500" />,
  سباك: <Droplets className="w-8 h-8 text-orange-500" />,
  كهربائي: <Zap className="w-8 h-8 text-orange-500" />,
  حداد: <Wrench className="w-8 h-8 text-orange-500" />,
  نقاش: <Paintbrush className="w-8 h-8 text-orange-500" />,
  بناء: <Building2 className="w-8 h-8 text-orange-500" />,
};

const professionData = [
  {
    name: "نجار",
    description: "أثاث وأبواب وديكورات خشبية",
    count: craftsmen.filter((c) => c.profession === "نجار").length,
  },
  {
    name: "سباك",
    description: "تركيب وإصلاح السباكة",
    count: craftsmen.filter((c) => c.profession === "سباك").length,
  },
  {
    name: "كهربائي",
    description: "تمديدات وإصلاح كهربائي",
    count: craftsmen.filter((c) => c.profession === "كهربائي").length,
  },
  {
    name: "حداد",
    description: "أبواب وشبابيك حديدية",
    count: craftsmen.filter((c) => c.profession === "حداد").length,
  },
  {
    name: "نقاش",
    description: "دهانات وديكورات جدارية",
    count: craftsmen.filter((c) => c.profession === "نقاش").length,
  },
  {
    name: "بناء",
    description: "بناء وتشطيبات وترميم",
    count: craftsmen.filter((c) => c.profession === "بناء").length,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfession, setSelectedProfession] =
    useState<Profession>("الكل");
  const [selectedCity, setSelectedCity] = useState("الكل");
  const craftsmenRef = useRef<HTMLDivElement>(null);

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

  const handleProfessionClick = (profession: string) => {
    setSelectedProfession(profession as Profession);
    craftsmenRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const totalOrders = craftsmen.reduce((sum, c) => sum + c.ordersCount, 0);
  const totalReviews = craftsmen.reduce((sum, c) => sum + c.reviewCount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            اعثر على أفضل الصنايعية في مصر
          </h1>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            منصة معلم تربطك بآلاف الصنايعية المحترفين في جميع الحرف والتخصصات
          </p>

          <div className="max-w-2xl mx-auto relative mb-10">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن صنايعي بالاسم..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 rounded-xl border-0 bg-white text-gray-800 pr-12 pl-4 text-base outline-none shadow-lg placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold">{craftsmen.length}+</p>
              <p className="text-orange-100 text-sm">صنايعي محترف</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{totalOrders}+</p>
              <p className="text-orange-100 text-sm">طلب منجز</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{totalReviews}+</p>
              <p className="text-orange-100 text-sm">تقييم إيجابي</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{cities.length - 1}+</p>
              <p className="text-orange-100 text-sm">مدينة</p>
            </div>
          </div>
        </div>
      </div>

      <section id="professions" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            الحرف والتخصصات
          </h2>
          <p className="text-gray-500">
            اختر الحرفة اللي محتاجها وهنوصلك بأفضل الصنايعية
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {professionData.map((prof) => (
            <button
              key={prof.name}
              onClick={() => handleProfessionClick(prof.name)}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-100 transition-colors">
                {professionIcons[prof.name]}
              </div>
              <h3 className="font-bold text-gray-800 mb-1 group-hover:text-orange-500 transition-colors">
                {prof.name}
              </h3>
              <p className="text-xs text-gray-400 mb-2">{prof.description}</p>
              <span className="text-xs font-semibold text-orange-500">
                {prof.count} صنايعي
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              كيف يعمل معلم؟
            </h2>
            <p className="text-gray-500">3 خطوات بسيطة للحصول على أفضل خدمة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "١",
                title: "ابحث عن الحرفة",
                desc: "اختر الحرفة والمدينة واستعرض الصنايعية المتاحين",
                icon: <Search className="w-8 h-8 text-orange-500" />,
              },
              {
                step: "٢",
                title: "اختر الصنايعي",
                desc: "قارن التقييمات والخبرات واختر الأنسب لك",
                icon: <Users className="w-8 h-8 text-orange-500" />,
              },
              {
                step: "٣",
                title: "تواصل مباشرة",
                desc: "اتصل أو أرسل رسالة واتساب وابدأ الشغل",
                icon: <Phone className="w-8 h-8 text-orange-500" />,
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ref={craftsmenRef} className="bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {professions.map((profession) => (
                  <button
                    key={profession}
                    onClick={() => setSelectedProfession(profession)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
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
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-medium">لا توجد نتائج</p>
              <p className="text-gray-400 mt-2 text-sm">
                جرب البحث بمعايير أخرى
              </p>
            </div>
          )}
        </main>
      </div>

      <section id="about" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">من نحن</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                منصة معلم هي أول منصة مصرية متخصصة في ربط أصحاب الأعمال
                بالصنايعية المحترفين في جميع الحرف والتخصصات.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                هدفنا هو تسهيل عملية البحث عن صنايعي موثوق ومحترف، وتوفير فرص
                عمل أكثر للصنايعية المهرة في جميع أنحاء مصر.
              </p>
              <div className="space-y-3">
                {[
                  "صنايعية محترفين ومعتمدين",
                  "تقييمات حقيقية من عملاء سابقين",
                  "تواصل مباشر بدون وسيط",
                  "تغطية لجميع المحافظات",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-3xl font-bold text-orange-500">
                    {craftsmen.length}+
                  </p>
                  <p className="text-sm text-gray-500 mt-1">صنايعي</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-3xl font-bold text-orange-500">
                    {totalOrders}+
                  </p>
                  <p className="text-sm text-gray-500 mt-1">طلب منجز</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-3xl font-bold text-orange-500">
                    {cities.length - 1}+
                  </p>
                  <p className="text-sm text-gray-500 mt-1">مدينة</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-3xl font-bold text-orange-500">
                    {totalReviews}+
                  </p>
                  <p className="text-sm text-gray-500 mt-1">تقييم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            أنت صنايعي؟ انضم لمنصة معلم!
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            سجل الآن واعرض خدماتك لآلاف العملاء المحتملين. زود دخلك وابنِ سمعتك
            المهنية.
          </p>
          <button className="bg-white text-orange-500 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 transition-colors cursor-pointer shadow-lg">
            سجل كصنايعي مجاناً
          </button>
        </div>
      </section>
    </div>
  );
}
