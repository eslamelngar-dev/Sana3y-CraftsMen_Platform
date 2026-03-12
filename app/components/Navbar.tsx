"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wrench } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkStyle =
    "text-gray-600 hover:text-orange-500 transition-colors text-md font-medium";

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMenu}
          >
            <div className="bg-orange-500 p-2 rounded-lg">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-orange-500">معلم</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={linkStyle}>
              الرئيسية
            </Link>
            <Link href="/#professions" className={linkStyle}>
              الحرف
            </Link>
            <Link href="/#about" className={linkStyle}>
              من نحن
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href={"/login"}>
              <button className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors px-4 py-2 cursor-pointer">
                تسجيل الدخول
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="text-sm font-medium bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer">
                سجل كصنايعي
              </button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t flex flex-col gap-3">
            <Link href="/" className={linkStyle + " py-2"} onClick={closeMenu}>
              الرئيسية
            </Link>
            <Link
              href="/#professions"
              className={linkStyle + " py-2"}
              onClick={closeMenu}
            >
              الحرف
            </Link>
            <Link
              href="/#about"
              className={linkStyle + " py-2"}
              onClick={closeMenu}
            >
              من نحن
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link href={"/login"}>
                <button className="text-sm font-medium text-gray-600 hover:text-orange-500 py-2 cursor-pointer">
                  تسجيل الدخول
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="text-sm font-medium bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 cursor-pointer">
                  سجل كصنايعي
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
