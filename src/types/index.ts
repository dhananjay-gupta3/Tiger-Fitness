export interface GymStats {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
  features: string[];
}

export interface Program {
  id: string;
  title: string;
  category: string;
  intensity: 'Beginner' | 'Intermediate' | 'High Intensity' | 'Extreme';
  duration: string;
  target: string;
  image: string;
  description: string;
  benefits: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  image: string;
  bio: string;
  quote: string;
  specialties: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyPrice: number;
  annualPricePerMonth: number;
  period: string;
  description: string;
  includedFacilities: string[];
  features: string[];
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'equipment' | 'training' | 'transformations' | 'atmosphere';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  membershipPlan: string;
  rating: number;
  image: string;
  achievement: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TimingDay {
  day: string;
  hours: string;
  isSpecial?: boolean;
  notes?: string;
}
