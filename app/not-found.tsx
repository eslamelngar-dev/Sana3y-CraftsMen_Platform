import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-orange-500 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          الصفحة غير موجودة
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          الصفحة اللي بتدور عليها مش موجودة أو تم نقلها لمكان تاني
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          الرجوع للرئيسية
        </Link>
      </div>
    </div>
  );
}