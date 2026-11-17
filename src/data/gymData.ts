export interface GymConfig {
  name: string;
  brandTitle: string;
  tagline: string;
  positioning: string;
  founded: string;
  locationLabel: string;
  coordinates: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    googleMapsEmbed: string;
    googleMapsUrl: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
  };
  timings: {
    weekdays: string;
    saturday: string;
    sunday: string;
    morningShift: string;
    eveningShift: string;
    notes: string;
  };
  social: {
    instagram: string;
    facebook: string;
    googleBusiness: string;
  };
}

export const CLIENT_BUSINESS: GymConfig = {
  name: "THE GYM TIGER FITNESS",
  brandTitle: "THE GYM TIGER FITNESS",
  tagline: "4,500 SQ FT PREMIER UNISEX FITNESS CLUB IN THANE WEST",
  positioning: "Sprawling 4,500 sq. ft. modern unisex strength, cardio, CrossFit, and steam club in Ramachandra Nagar, Thane West. Led by Ketan Sir, equipped with King Strength & commercial plate-loaded gear, green turf sprint track, and dedicated coach guidance.",
  founded: "Est. in Thane West",
  locationLabel: "Kamgar Hospital Rd, Thane West",
  coordinates: "19.1970° N, 72.9680° E",
  address: {
    line1: "Kamgar Hospital Road",
    line2: "Ramachandra Nagar, Sambhaji Nagar",
    locality: "Near Shahu Maharaj School / Dhyaneshwar Nagar",
    city: "Thane West, Thane",
    state: "Maharashtra",
    pincode: "400604",
    landmark: "Directly on Kamgar Hospital Road (Prominent 3D Tiger Signboard)",
    googleMapsEmbed: "https://maps.google.com/maps?q=The+Gym+Tiger+Fitness,+Kamgar+Hospital+Road,+Ramachandra+Nagar,+Thane+West,+400604&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl: "https://maps.google.com/?q=The+Gym+Tiger+Fitness+Kamgar+Hospital+Road+Thane+West+400604"
  },
  contact: {
    phone: "+918355968540",
    phoneDisplay: "+91 83559 68540",
    whatsapp: "918355968540",
    whatsappDisplay: "+91 83559 68540",
    email: "thegymtigerfitness@gmail.com"
  },
  timings: {
    weekdays: "5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM",
    saturday: "5:00 AM – 2:00 PM | 4:00 PM – 11:30 PM",
    sunday: "Closed (Deep Sanitization & Equipment Maintenance)",
    morningShift: "5:00 AM – 2:00 PM (Morning Coaches On Duty)",
    eveningShift: "4:00 PM – 11:30 PM (Evening Peak Coaches)",
    notes: "Afternoon maintenance break 2:00 PM – 4:00 PM. Closed on Sundays."
  },
  social: {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    googleBusiness: "https://maps.google.com/?q=The+Gym+Tiger+Fitness+Thane+West"
  }
};

export const VERIFIED_REVIEWS = [
  {
    author: "Rahul S.",
    role: "Regular Member • 1.5 Years",
    rating: 5,
    text: "Unlike other cramped gyms in Thane West, The Gym Tiger Fitness actually has ample floor space. You don't have to wait 15 minutes for a bench or dumbbells even during the evening rush. Great vibe and serious lifters.",
    highlight: "Spacious layout & great crowd"
  },
  {
    author: "Amit K.",
    role: "Weight Training Member",
    rating: 5,
    text: "The trainers are very helpful. They don't just push expensive personal training on day one; they actually correct your posture during deadlifts and squats. Very clean gym on Kamgar Hospital road.",
    highlight: "Supportive floor trainers"
  },
  {
    author: "Pooja M.",
    role: "Fat Loss & General Fitness",
    rating: 5,
    text: "Comfortable and safe environment for women. Both morning and evening trainers pay attention to your routine. I joined for fat loss 6 months ago and already see visible transformation.",
    highlight: "Safe, welcoming space for women"
  },
  {
    author: "Siddhesh P.",
    role: "Strength & Conditioning Member",
    rating: 5,
    text: "Solid equipment. Heavy dumbbells, good cable crossovers, smooth lat pulldowns, and proper leg press. Perfect balance of iron and cardio at an affordable price.",
    highlight: "Excellent equipment quality"
  }
];

export const ACTUAL_FACILITIES = [
  {
    number: "01",
    title: "4,500 Sq. Ft. Massive Training Floor",
    description: "Expansive multi-zone athletic facility in Ramachandra Nagar, Thane West. Full green astroturf sprint runway, wide clearances between stations, and zero crowding.",
    spec: "4,500 Sq Ft Area • Unisex Facility • High Air Turnover",
    category: "Space & Scale",
    tag: "4,500 SQ FT",
    image: "/images/gym/main-gym-floor-turf.jpg"
  },
  {
    number: "02",
    title: "Extensive Tiered Dumbbell Deck with Neon Glow",
    description: "Full multi-tier rack with pairs of precision heavy dumbbells, Olympic curl bars, and ambient blue neon underglow lighting.",
    spec: "Multi-Tier Dumbbell Racks • Shock-Absorbent Flooring",
    category: "Free Weights",
    tag: "Dumbbell Deck",
    image: "/images/gym/dumbbell-rack-neon.jpg"
  },
  {
    number: "03",
    title: "Olympic Squat & Power Cage Platform",
    description: "Heavy-duty power racks, Olympic competition barbells, calibrated colorful bumper plates, and wall-to-wall mirrors with perimeter backlighting.",
    spec: "Olympic Power Cage • Calibrated Bumper Plates",
    category: "Strength Platform",
    tag: "Power Platform",
    image: "/images/gym/power-rack-olympic-platform.jpg"
  },
  {
    number: "04",
    title: "Commercial Incline Treadmill Fleet",
    description: "Row of high-speed commercial Sparnod treadmills with electronic speed and incline settings under futuristic ambient LED illumination.",
    spec: "Commercial Incline Fleet • Heart-Rate Telemetry",
    category: "Cardio Fleet",
    tag: "Treadmill Deck",
    image: "/images/gym/cardio-treadmills-fleet.jpg"
  },
  {
    number: "05",
    title: "Biometric-Access Dedicated Cardio Room",
    description: "Separate glass-enclosed cardio suite featuring biometric punch-in access, multi-angle air ventilation, and high-performance spin machinery.",
    spec: "Biometric Access Control • Glass Partition Suite",
    category: "Cardio Suite",
    tag: "Cardio Room",
    image: "/images/gym/cardio-room-glass-entry.jpg"
  },
  {
    number: "06",
    title: "Commercial Air Assault Bikes & Agility Zone",
    description: "Dual-action fan resistance air bikes and spin cycles designed for high-intensity interval training (HIIT) and CrossFit metabolic conditioning.",
    spec: "Air Assault Bikes • HIIT & CrossFit Ready",
    category: "Conditioning",
    tag: "Air Assault Bikes",
    image: "/images/gym/air-bikes-crossfit.jpg"
  }
];

export const FITNESS_SERVICES = [
  {
    code: "ST-01",
    name: "Strength & Resistance Training",
    summary: "Build bone density, lean muscle mass, and structural strength using progressive barbell and dumbbell mechanics.",
    focus: "Hypertrophy & Raw Strength",
    suitableFor: "All experience levels, from beginners to experienced lifters",
    schedule: "Daily Monday–Saturday",
    accentColor: "lime",
    image: "/images/gym/power-rack-olympic-platform.jpg"
  },
  {
    code: "WL-02",
    name: "Weight Loss & Body Transformation",
    summary: "Structured high-calorie-burn circuit workouts paired with coach guidance on consistent daily movement and nutrition habits.",
    focus: "Fat Loss & Metabolic Rate",
    suitableFor: "Individuals targeting healthy, sustainable weight reduction",
    schedule: "Morning & Evening Dedicated Batches",
    accentColor: "orange",
    image: "/images/gym/cardio-treadmills-fleet.jpg"
  },
  {
    code: "MB-03",
    name: "Muscle Building & Hypertrophy",
    summary: "Targeted push-pull-legs and upper-lower splits emphasizing time-under-tension and compound progressive overload.",
    focus: "Aesthetic Symmetry & Muscle Mass",
    suitableFor: "Members wanting defined muscular development",
    schedule: "Self-paced with floor coach assistance",
    accentColor: "forest",
    image: "/images/gym/dumbbell-rack-neon.jpg"
  },
  {
    code: "PT-04",
    name: "1-on-1 Personal Coaching",
    summary: "Dedicated trainer supervision for customized workout structuring, daily form auditing, motivation, and goal tracking.",
    focus: "Bespoke Mentorship & Fast-Track Progress",
    suitableFor: "Beginners needing guidance or athletes with specific milestones",
    schedule: "Flexible booking with Ketan Sir (8355968540)",
    accentColor: "lime",
    image: "/images/gym/gym-facade-signboard.jpg"
  },
  {
    code: "CD-05",
    name: "Cardiovascular Stamina",
    summary: "Zone-based treadmill, air bike, and stationary bike endurance training in our dedicated biometric cardio room.",
    focus: "Heart Health & Aerobic Engine",
    suitableFor: "Desk workers, endurance seekers, and heart-health maintenance",
    schedule: "Open access throughout all operating hours",
    accentColor: "orange",
    image: "/images/gym/air-bikes-crossfit.jpg"
  },
  {
    code: "GF-06",
    name: "General Fitness & Turf Mobility",
    summary: "Functional movements and stretching on our 4,500 sq. ft. green turf track to eliminate stiffness and boost day-to-day energy.",
    focus: "Overall Wellness & Injury Prevention",
    suitableFor: "Working professionals, youth, and older adults",
    schedule: "Customizable daily routines on turf track",
    accentColor: "cream",
    image: "/images/gym/main-gym-floor-turf.jpg"
  }
];

export const TRAINER_PROFILES = [
  {
    id: "coach-ketan",
    name: "Ketan Sir",
    role: "Founder & Head Strength Mentor",
    shift: "Morning & Evening Lead Supervision",
    specialization: "Complete Body Transformations, Strength Programming & Personal Coaching",
    experience: "10+ Years Mentoring • Direct Line: 8355968540",
    bio: "The visionary behind The Gym Tiger Fitness. Ketan Sir has coached hundreds of Thane West residents through life-changing muscle gain and fat loss transformations.",
    image: "/images/gym/gym-facade-signboard.jpg",
    phone: "8355968540"
  },
  {
    id: "coach-vikram",
    name: "Vikram Shinde",
    role: "Senior Floor Coach & Strength Specialist",
    shift: "Morning Shift (5:00 AM – 2:00 PM)",
    specialization: "Compound Lifts, Posture Correction & Safe Form Execution",
    experience: "8+ Years Coaching",
    bio: "Ensures beginners understand proper squat mechanics, deadlift bar path, and bench press setup before progressing weights safely.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "coach-rohit",
    name: "Rohit Patil",
    role: "Conditioning & Hypertrophy Coach",
    shift: "Evening Peak Shift (4:00 PM – 11:30 PM)",
    specialization: "CrossFit Drills, Turf Agility & Hypertrophy Splits",
    experience: "7+ Years Coaching",
    bio: "Leads intense evening sessions on the turf track and strength floor, coaching athletes through high-yield drop sets and circuit conditioning.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=700&q=80"
  }
];

export const GALLERY_PHOTOS = [
  {
    id: "photo-main-floor",
    title: "4,500 Sq Ft Training Floor & Astroturf Lane",
    caption: "Spacious training arena with King Strength rigs, machine aisles, and astroturf runway",
    tag: "Real Gym Floor",
    aspect: "wide",
    image: "/images/gym/main-gym-floor-turf.jpg"
  },
  {
    id: "photo-dumbbell-deck",
    title: "Heavy Dumbbell Deck with Blue Neon Underglow",
    caption: "Full multi-tier rack with precision dumbbell pairs and shock-absorbent matting",
    tag: "Free Weights",
    aspect: "square",
    image: "/images/gym/dumbbell-rack-neon.jpg"
  },
  {
    id: "photo-power-platform",
    title: "Olympic Power Cage & Bumper Plate Platform",
    caption: "Heavy-duty power racks, colored Olympic bumper plates, and perimeter-lit mirrors",
    tag: "Power Platform",
    aspect: "square",
    image: "/images/gym/power-rack-olympic-platform.jpg"
  },
  {
    id: "photo-cardio-fleet",
    title: "Sparnod Incline Commercial Treadmill Fleet",
    caption: "High-speed electronic incline treadmills under ambient blue LED lighting",
    tag: "Cardio Fleet",
    aspect: "wide",
    image: "/images/gym/cardio-treadmills-fleet.jpg"
  },
  {
    id: "photo-cardio-room",
    title: "Biometric Dedicated Cardio Suite",
    caption: "Glass partition cardio room with biometric access control and spin bikes",
    tag: "Cardio Room",
    aspect: "tall",
    image: "/images/gym/cardio-room-glass-entry.jpg"
  },
  {
    id: "photo-air-bikes",
    title: "Commercial Air Assault Bikes & Agility Zone",
    caption: "Dual-action fan resistance air bikes for HIIT and CrossFit conditioning",
    tag: "HIIT & CrossFit",
    aspect: "square",
    image: "/images/gym/air-bikes-crossfit.jpg"
  },
  {
    id: "photo-real-entrance",
    title: "Signature Neon Turf Entrance",
    caption: "Green astroturf stairway with LED runner lights and motivational fitness murals",
    tag: "Grand Entrance",
    aspect: "tall",
    image: "/images/gym/staircase-entrance.jpg"
  },
  {
    id: "photo-real-signboard",
    title: "4,500 Sq Ft Club Facade & 3D Signboard",
    caption: "The Gym Tiger Fitness prominent unisex entrance on Kamgar Hospital Road",
    tag: "Real Facade",
    aspect: "tall",
    image: "/images/gym/gym-facade-signboard.jpg"
  },
  {
    id: "photo-real-pricing",
    title: "Official Verified Tariff & Rate Card",
    caption: "100% transparent pricing for Workout and All-Inclusive Steam/Shower plans",
    tag: "Official Tariff",
    aspect: "square",
    image: "/images/gym/official-pricing-menu.jpg"
  }
];

export interface PricingPlan {
  period: string;
  durationLabel: string;
  price: string;
  priceNumeric: number;
  perMonth: string;
  savingsBadge?: string;
  popular?: boolean;
}

export interface PricingCategory {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  inclusions: string[];
  plans: PricingPlan[];
}

export const OFFICIAL_PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "only-workout",
    title: "Only Workout",
    subtitle: "Pure Strength & Resistance Training Floor",
    badge: "ESSENTIAL LIFTING",
    description: "Full access to our 4,500 sq. ft. weight floor, King Strength rigs, dumbbells, barbells, and free weights.",
    inclusions: [
      "Access to complete 4,500 sq. ft. gym floor",
      "King Strength selectorized & plate-loaded machines",
      "Free weights, Olympic barbells & heavy dumbbells",
      "Morning & evening floor trainer guidance",
      "Locker & changing room access",
      "Mon–Sat 5:00 AM–2:00 PM & 4:00 PM–11:30 PM"
    ],
    plans: [
      {
        period: "1 Month",
        durationLabel: "Monthly Trial",
        price: "₹2,000",
        priceNumeric: 2000,
        perMonth: "₹2,000/mo",
        savingsBadge: undefined,
        popular: false
      },
      {
        period: "3 Month",
        durationLabel: "Quarterly Habit",
        price: "₹3,500",
        priceNumeric: 3500,
        perMonth: "₹1,167/mo",
        savingsBadge: "SAVE ₹2,500",
        popular: true
      },
      {
        period: "6 Month",
        durationLabel: "Half-Year Momentum",
        price: "₹4,500",
        priceNumeric: 4500,
        perMonth: "₹750/mo",
        savingsBadge: "GREAT VALUE",
        popular: false
      },
      {
        period: "1 Year",
        durationLabel: "Annual Dedication",
        price: "₹7,000",
        priceNumeric: 7000,
        perMonth: "₹583/mo",
        savingsBadge: "MAXIMUM SAVINGS (₹583/mo)",
        popular: false
      }
    ]
  },
  {
    id: "all-inclusive",
    title: "Workout Cardio + CrossFit + Steam with Shower",
    subtitle: "Complete All-Access Performance & Luxury Recovery Pass",
    badge: "MOST POPULAR • ALL-INCLUSIVE",
    description: "The complete Tiger Fitness experience: weight training, cardio deck, CrossFit agility turf, and post-workout steam chamber with private showers.",
    inclusions: [
      "Everything in Only Workout plan",
      "Full cardio fleet (Treadmills, Cycles, Cross-Trainers)",
      "CrossFit agility deck & green turf sprint track",
      "Relaxing steam bath sessions for muscle recovery",
      "Clean private hot & cold shower facilities",
      "Initial body composition & posture evaluation"
    ],
    plans: [
      {
        period: "1 Month",
        durationLabel: "Full Access Month",
        price: "₹2,500",
        priceNumeric: 2500,
        perMonth: "₹2,500/mo",
        savingsBadge: undefined,
        popular: false
      },
      {
        period: "3 Month",
        durationLabel: "Quarterly Transformation",
        price: "₹4,500",
        priceNumeric: 4500,
        perMonth: "₹1,500/mo",
        savingsBadge: "SAVE ₹3,000",
        popular: false
      },
      {
        period: "6 Month",
        durationLabel: "Half-Year Elite",
        price: "₹5,500",
        priceNumeric: 5500,
        perMonth: "₹917/mo",
        savingsBadge: "POPULAR PICK",
        popular: true
      },
      {
        period: "1 Year",
        durationLabel: "Annual VIP Membership",
        price: "₹9,000",
        priceNumeric: 9000,
        perMonth: "₹750/mo",
        savingsBadge: "BEST OVERALL VALUE (₹750/mo)",
        popular: false
      }
    ]
  }
];

export const MEMBERSHIP_TIERS = [
  {
    tier: "Only Workout (3 Months)",
    period: "3 Months",
    priceEstimate: "₹3,500",
    disclaimer: "Official rate from client menu card. No hidden charges.",
    description: "Full access to strength floor, King Strength rigs, dumbbells, and floor coach support.",
    highlightBadge: "POPULAR STARTER",
    inclusions: [
      "Full 4,500 sq. ft. weight training floor",
      "King Strength & Olympic barbell equipment",
      "Morning & evening certified coach assistance",
      "Day lockers and changing rooms"
    ],
    popular: false
  },
  {
    tier: "All-Inclusive VIP (6 Months)",
    period: "6 Months",
    priceEstimate: "₹5,500",
    disclaimer: "Includes Workout + Cardio + CrossFit + Steam with Shower.",
    description: "The complete transformation package with strength, cardio endurance, turf CrossFit, and luxury steam recovery.",
    highlightBadge: "BEST VALUE IN THANE WEST",
    inclusions: [
      "Workout + Cardio + CrossFit + Steam Bath",
      "Private shower and changing rooms",
      "Green turf sprint track access",
      "Attentive floor trainer mentorship by Ketan Sir's team",
      "Only ₹917 per month equivalent"
    ],
    popular: true
  },
  {
    tier: "All-Inclusive Annual Pass",
    period: "1 Year",
    priceEstimate: "₹9,000",
    disclaimer: "Full year of complete fitness & steam recovery (approx. ₹750/mo).",
    description: "Complete 365-day access to all facilities for dedicated lifters wanting lasting lifestyle change.",
    highlightBadge: "MAXIMUM SAVINGS (₹750/MO)",
    inclusions: [
      "365-day access to all 4,500 sq. ft. zones",
      "Unlimited Workout + Cardio + CrossFit + Steam",
      "Private hot & cold showers",
      "Priority guidance & form auditing",
      "Official rate verified directly from club tariff card"
    ],
    popular: false
  }
];

export const VERIFIED_FAQS = [
  {
    q: "Where exactly is The Gym Tiger Fitness located?",
    a: "We are located on Kamgar Hospital Road in Ramachandra Nagar, Sambhaji Nagar, Thane West (PIN 400604), near Shahu Maharaj School and Dhyaneshwar Nagar. The gym is easily accessible from all parts of Thane West with convenient roadside parking."
  },
  {
    q: "What are the gym's daily operating timings?",
    a: "The gym is open Monday through Saturday from 5:00 AM to 11:30 PM continuously. On Sundays, the gym remains closed for deep sanitization and equipment maintenance."
  },
  {
    q: "Are floor trainers available to guide beginners?",
    a: "Yes. We have certified, attentive floor trainers on duty during both morning (5 AM – 12 PM) and evening (4:30 PM – 11:30 PM) peak windows. They assist with exercise form, machine settings, and basic workout scheduling at no extra charge."
  },
  {
    q: "Is personal training (PT) available?",
    a: "Yes, 1-on-1 personal training packages are available for members seeking dedicated supervision, customized nutrition advice, and accelerated fat loss or muscle gain. Inquire at the front desk or via WhatsApp for current coach availability."
  },
  {
    q: "Can women join The Gym Tiger Fitness?",
    a: "Absolutely. We pride ourselves on maintaining a safe, respectful, and motivating environment for women. Many female members train actively in both morning and evening batches."
  },
  {
    q: "Do you offer a trial session before enrolling?",
    a: "Yes. Prospective members can visit the gym during operational hours for a facility walkthrough and discuss a trial workout with our desk team."
  },
  {
    q: "What should I bring on my first day?",
    a: "Please carry clean indoor sports shoes (outdoor dirty footwear is not permitted on the workout floor), comfortable training clothes, a small sweat towel, and a water bottle."
  }
];
