import Link from "next/link";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">معلم</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              منصة أوستاذ تربط بين أصحاب الأعمال والصنايعية المحترفين في جميع
              أنحاء مصر. نضمن لك أفضل جودة وأسرع خدمة.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>01000000000</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>info@malem.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>القاهرة، مصر</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-orange-500 transition-colors">
                الرئيسية
              </Link>
              <Link href="/#professions" className="text-sm hover:text-orange-500 transition-colors">
                الحرف
              </Link>
              <Link href="/#about" className="text-sm hover:text-orange-500 transition-colors">
                من نحن
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">الحرف</h3>
            <div className="flex flex-col gap-2">
              {["نجار", "سباك", "كهربائي", "حداد", "نقاش", "بناء"].map((p) => (
                <span key={p} className="text-sm hover:text-orange-500 transition-colors cursor-pointer">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 معلم. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}