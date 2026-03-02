export interface Craftsman {
  id: string;
  name: string;
  profession: string;
  city: string;
  rating: number;
  reviewCount: number;
  bio: string;
  phone: string;
  ordersCount: number;
  yearsOfExperience: number;
  thumbnail: string;
  images: string[];
  joinedAt: string;
}

export type Profession =
  | "الكل"
  | "نجار"
  | "سباك"
  | "حداد"
  | "نقاش"
  | "كهربائي"
  | "بناء";
