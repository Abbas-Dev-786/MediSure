import { BotMessageSquare } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  // { label: "Features", href: "#features" },
  // { label: "How It Works", href: "#working" },
  { label: "Team", href: "/team" },
  { label: "Demo", href: "/demo" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Powered Optimization Engine",
    description:
      "Our proprietary algorithms analyze a wide range of factors, including weather patterns, ship specifications, and ocean currents, to recommend the most efficient and safe routes.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Dynamic Route Adjustments",
    description:
      "As your ship progresses, OceanOptima continuously monitors conditions, providing real-time route updates to avoid storms, reduce fuel consumption, and ensure timely arrival.",
  },
  {
    icon: <ShieldHalf />,
    text: "User-Friendly Interface",
    description:
      "Access the platform via a web dashboard or mobile app, allowing captains and operational managers to input voyage details and receive instant, actionable route recommendations.",
  },
  {
    icon: <GlobeLock />,
    text: "Real-Time Data Integration",
    description:
      "OceanOptima India pulls real-time meteorological data from the India Meteorological Department (IMD) and satellite information from ISRO, providing a comprehensive overview of current oceanic conditions.",
  },
];

export const checklistItems = [
  {
    title: "Fuel Efficiency",
    description:
      "Minimize fuel consumption by choosing the most energy-efficient routes.",
  },
  {
    title: "Time Optimization",
    description:
      "Reduce travel time while ensuring safety and compliance with maritime regulations.",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Receive instant notifications on route changes, adverse weather conditions, and potential hazards.",
  },
];
