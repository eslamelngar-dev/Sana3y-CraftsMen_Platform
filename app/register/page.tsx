"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  MapPin,
  Briefcase,
  FileText,
  Camera,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const professionOptions = [
  "نجار",
  "سباك",
  "كهربائي",
  "حداد",
  "نقاش",
  "بناء",
];
const cityOptions = [
  "القاهرة",
  "الإسكندرية",
  "الجيزة",
  "الشرقية",
  "الدقهلية",
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profession: "",
    city: "",
    yearsOfExperience: "",
    bio: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-orange-500">
              معلم
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            سجل كصنايعي
          </h1>
          <p className="text-gray-500 text-sm">
            انضم لمنصة معلم واوصل لآلاف العملاء
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step >= s
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > s ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 md:w-24 h-1 rounded-full transition-all ${
                    step > s ? "bg-orange-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-6 text-xs text-gray-500">
          <span className={step >= 1 ? "text-orange-500 font-semibold" : ""}>
            البيانات الأساسية
          </span>
          <span className={step >= 2 ? "text-orange-500 font-semibold" : ""}>
            معلومات المهنة
          </span>
          <span className={step >= 3 ? "text-orange-500 font-semibold" : ""}>
            التأكيد
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="محمد أحمد"
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="example@mail.com"
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الموبايل
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="01012345678"
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => updateField("password", e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-11 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    تأكيد كلمة المرور
                  </label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        updateField("confirmPassword", e.target.value)
                      }
                      placeholder="••••••••"
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الحرفة / التخصص
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.profession}
                      onChange={(e) =>
                        updateField("profession", e.target.value)
                      }
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-gray-700 appearance-none"
                    >
                      <option value="">اختر الحرفة</option>
                      {professionOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    المدينة
                  </label>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-gray-700 appearance-none"
                    >
                      <option value="">اختر المدينة</option>
                      {cityOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    سنوات الخبرة
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      min="0"
                      value={formData.yearsOfExperience}
                      onChange={(e) =>
                        updateField("yearsOfExperience", e.target.value)
                      }
                      placeholder="10"
                      className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نبذة عنك
                  </label>
                  <div className="relative">
                    <FileText className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      value={formData.bio}
                      onChange={(e) => updateField("bio", e.target.value)}
                      placeholder="اكتب نبذة مختصرة عن خبرتك وتخصصاتك..."
                      rows={4}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 pr-11 pl-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    صور أعمالك
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-orange-300 transition-colors cursor-pointer">
                    <Camera className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm text-gray-500 mb-1">
                      اسحب الصور هنا أو اضغط للاختيار
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG حتى 5 ميجا لكل صورة
                    </p>
                    <input type="file" multiple accept="image/*" className="hidden" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    مراجعة البيانات
                  </h2>
                  <p className="text-gray-500 text-sm">
                    تأكد من صحة بياناتك قبل التسجيل
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">الاسم</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {formData.name || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">البريد</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {formData.email || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">الموبايل</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {formData.phone || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">الحرفة</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {formData.profession || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">المدينة</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {formData.city || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">سنوات الخبرة</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {formData.yearsOfExperience || "—"} سنة
                    </span>
                  </div>
                  <div className="py-2">
                    <span className="text-sm text-gray-500 block mb-2">
                      النبذة
                    </span>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {formData.bio || "—"}
                    </p>
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500 accent-orange-500"
                  />
                  <span className="text-sm text-gray-600">
                    أوافق على{" "}
                    <Link
                      href="/terms"
                      className="text-orange-500 hover:underline"
                    >
                      الشروط والأحكام
                    </Link>{" "}
                    و{" "}
                    <Link
                      href="/privacy"
                      className="text-orange-500 hover:underline"
                    >
                      سياسة الخصوصية
                    </Link>
                  </span>
                </label>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="h-12 px-6 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  السابق
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                >
                  التالي
                  <ArrowLeft className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!agreed}
                >
                  <CheckCircle className="w-5 h-5" />
                  إنشاء الحساب
                </button>
              )}
            </div>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            عندك حساب بالفعل؟{" "}
            <Link
              href="/login"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              سجل دخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}