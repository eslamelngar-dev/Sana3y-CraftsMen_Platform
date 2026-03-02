export interface Craftsman {
  id: string;
  name: string;
  profession: string;
  city: string;
  rating: number;
  reviewCount: number;
  profileImage: string;
  bio: string;
  phone: string;
  yearsOfExperience: number;
  previousWork: {
    id: string;
    image: string;
    title: string;
    description: string;
  }[];
}

export type Profession = 
  | "الكل"
  | "نجار"
  | "سباك"
  | "حداد"
  | "نقاش"
  | "كهربائي"
  | "بناء";
