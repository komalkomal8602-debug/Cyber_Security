
import React from "react";

import {
  FiHeart,
  FiShield,
  FiStar,
  FiActivity,
  FiFeather,
  FiPackage,
  FiGrid,
  FiAward,
  FiTag,
  FiCompass,
} from "react-icons/fi";

export const menudata = [
  {
    name: "Gloves",
    icon: <FiHeart />,
    slug: "/gloves",
    dropdown: [
      {
        name: "Boxing Gloves",
        slug: "/gloves/boxing",
        desc: "Professional & training gloves",
      },
      {
        name: "MMA Gloves",
        slug: "/gloves/mma",
        desc: "Mixed martial arts gloves",
      },
      {
        name: "Training Gloves",
        slug: "/gloves/training",
        desc: "Perfect for sparring",
      },
      {
        name: "Bag Gloves",
        slug: "/gloves/bag",
        desc: "Heavy bag workouts",
      },
      {
        name: "Competition Gloves",
        slug: "/gloves/competition",
        desc: "Official match gloves",
      },
      {
        name: "Kids Gloves",
        slug: "/gloves/kids",
        desc: "Youth boxing gloves",
      },
      {
        name: "Custom Gloves",
        slug: "/gloves/custom",
        desc: "Personalized design",
      },
    ],
  },

  {
    name: "Protection",
    icon: <FiShield />,
    slug: "/protection",
    dropdown: [
      {
        name: "Headgear",
        slug: "/protection/headgear",
        desc: "Full face & open face",
      },
      {
        name: "Groin Guards",
        slug: "/protection/groin",
        desc: "Professional protection",
      },
      {
        name: "Mouthguards",
        slug: "/protection/mouthguard",
        desc: "Custom fit protection",
      },
      {
        name: "Shin Guards",
        slug: "/protection/shin",
        desc: "MMA & Muay Thai",
      },
      {
        name: "Chest Protectors",
        slug: "/protection/chest",
        desc: "For training & sparring",
      },
      {
        name: "Elbow Guards",
        slug: "/protection/elbow",
        desc: "Impact protection",
      },
      {
        name: "Knee Pads",
        slug: "/protection/knee",
        desc: "For intense training",
      },
    ],
  },

  {
    name: "Coaching",
    icon: <FiStar />,
    slug: "/coaching",
    dropdown: [
      {
        name: "Online Courses",
        slug: "/coaching/courses",
        desc: "Video tutorials & guides",
      },
      {
        name: "1-on-1 Training",
        slug: "/coaching/private",
        desc: "Personal coaching sessions",
      },
      {
        name: "Group Classes",
        slug: "/coaching/group",
        desc: "Team training sessions",
      },
      {
        name: "Training Plans",
        slug: "/coaching/plans",
        desc: "Custom workout routines",
      },
      {
        name: "Nutrition Guides",
        slug: "/coaching/nutrition",
        desc: "Diet & meal plans",
      },
      {
        name: "Fitness Assessments",
        slug: "/coaching/assessment",
        desc: "Progress tracking",
      },
    ],
  },

  {
    name: "Fitness",
    icon: <FiActivity />,
    slug: "/fitness",
    dropdown: [
      {
        name: "Weight Training",
        slug: "/fitness/weights",
        desc: "Strength equipment",
      },
      {
        name: "Cardio Equipment",
        slug: "/fitness/cardio",
        desc: "Jump ropes, bikes",
      },
      {
        name: "Recovery Tools",
        slug: "/fitness/recovery",
        desc: "Foam rollers, massage",
      },
      {
        name: "Tracking Devices",
        slug: "/fitness/trackers",
        desc: "Smart fitness tech",
      },
      {
        name: "Supplements",
        slug: "/fitness/supplements",
        desc: "Protein & vitamins",
      },
      {
        name: "Workout Apps",
        slug: "/fitness/apps",
        desc: "Digital training tools",
      },
    ],
  },

  {
    name: "Footwear",
    icon: <FiFeather />,
    slug: "/footwear",
    dropdown: [
      {
        name: "Boxing Boots",
        slug: "/footwear/boxing",
        desc: "Professional boxing shoes",
      },
      {
        name: "Training Shoes",
        slug: "/footwear/training",
        desc: "Multi-purpose fitness",
      },
      {
        name: "Wrestling Shoes",
        slug: "/footwear/wrestling",
        desc: "High ankle support",
      },
      {
        name: "Casual Wear",
        slug: "/footwear/casual",
        desc: "Lifestyle sneakers",
      },
    ],
  },

  {
    name: "Clothing",
    icon: <FiPackage />,
    slug: "/clothing",
    dropdown: [
      {
        name: "Fight Shorts",
        slug: "/clothing/shorts",
        desc: "MMA & boxing shorts",
      },
      {
        name: "Compression Wear",
        slug: "/clothing/compression",
        desc: "Base layer gear",
      },
      {
        name: "Hoodies & Jackets",
        slug: "/clothing/hoodies",
        desc: "Training outerwear",
      },
      {
        name: "T-Shirts & Tanks",
        slug: "/clothing/shirts",
        desc: "Casual & training tops",
      },
      {
        name: "Rash Guards",
        slug: "/clothing/rashguards",
        desc: "For BJJ & MMA",
      },
    ],
  },

  {
    name: "Punch Bags",
    icon: <FiGrid />,
    slug: "/punch-bags",
    dropdown: [
      {
        name: "Heavy Bags",
        slug: "/bags/heavy",
        desc: "60-150 lbs for power",
      },
      {
        name: "Speed Bags",
        slug: "/bags/speed",
        desc: "For rhythm & timing",
      },
      {
        name: "Double-End Bags",
        slug: "/bags/double",
        desc: "Accuracy training",
      },
      {
        name: "Freestanding Bags",
        slug: "/bags/freestanding",
        desc: "No ceiling mount",
      },
      {
        name: "Aqua Bags",
        slug: "/bags/aqua",
        desc: "Water-filled training",
      },
      {
        name: "Bag Stands",
        slug: "/bags/stands",
        desc: "Mounting solutions",
      },
    ],
  },

  {
    name: "Boxing Rings",
    icon: <FiAward />,
    slug: "/boxing-rings",
    dropdown: [
      {
        name: "Professional Rings",
        slug: "/rings/professional",
        desc: "Regulation size",
      },
      {
        name: "Training Rings",
        slug: "/rings/training",
        desc: "For gyms & clubs",
      },
      {
        name: "Portable Rings",
        slug: "/rings/portable",
        desc: "Easy setup",
      },
      {
        name: "Ring Accessories",
        slug: "/rings/accessories",
        desc: "Canvas, ropes, pads",
      },
    ],
  },

  {
    name: "Accessories",
    icon: <FiPackage />,
    slug: "/accessories",
    dropdown: [
      {
        name: "Hand Wraps",
        slug: "/accessories/handwraps",
        desc: "Cotton & elastic",
      },
      {
        name: "Gym Bags",
        slug: "/accessories/bags",
        desc: "Equipment carry",
      },
      {
        name: "Jump Ropes",
        slug: "/accessories/ropes",
        desc: "Speed & conditioning",
      },
      {
        name: "Focus Mitts",
        slug: "/accessories/mitts",
        desc: "Coach training",
      },
      {
        name: "Timers & Apps",
        slug: "/accessories/timers",
        desc: "Round timers",
      },
    ],
  },

  {
    name: "Sale",
    icon: <FiTag />,
    slug: "/sale",
    badge: "HOT",
    dropdown: [
      {
        name: "Up to 50% Off",
        slug: "/sale/50",
        desc: "Limited time offers",
      },
      {
        name: "Clearance",
        slug: "/sale/clearance",
        desc: "Last chance items",
      },
      {
        name: "Bundle Deals",
        slug: "/sale/bundles",
        desc: "Save more together",
      },
      {
        name: "Flash Sales",
        slug: "/sale/flash",
        desc: "24-hour deals",
      },
    ],
  },

  {
    name: "Brands",
    icon: <FiGrid />,
    slug: "/brands",
    dropdown: [
      {
        name: "Everlast",
        slug: "/brands/everlast",
        desc: "Legendary brand",
      },
      {
        name: "Venum",
        slug: "/brands/venum",
        desc: "Premium MMA gear",
      },
      {
        name: "Hayabusa",
        slug: "/brands/hayabusa",
        desc: "Elite protection",
      },
      {
        name: "RDX",
        slug: "/brands/rdx",
        desc: "Value performance",
      },
      {
        name: "Cleto Reyes",
        slug: "/brands/cleto",
        desc: "Professional choice",
      },
      {
        name: "Rival",
        slug: "/brands/rival",
        desc: "Innovation leader",
      },
    ],
  },

  {
    name: "Custom Ringwear",
    icon: <FiCompass />,
    slug: "/custom",
    dropdown: [
      {
        name: "Design Your Own",
        slug: "/custom/design",
        desc: "Personalized gear",
      },
      {
        name: "Team Uniforms",
        slug: "/custom/team",
        desc: "Bulk orders",
      },
      {
        name: "Embroidery",
        slug: "/custom/embroidery",
        desc: "Name & logo",
      },
      {
        name: "Custom Colors",
        slug: "/custom/colors",
        desc: "Any color combo",
      },
    ],
  },
];