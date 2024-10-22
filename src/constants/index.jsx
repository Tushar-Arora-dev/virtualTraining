import { BotMessageSquare } from "lucide-react";
// import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
// import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: 'What We do', href: '#features' },
  { label: 'Services', href: '#workflow' },
  { label: 'About Us', href: '#pricing' },
  // { label: 'Testimonials', href: '#testimonials' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: 'Immersive Learning:',
    description:
      'Real-world simulations for effective workforce training, enhancing skills through practical, hands-on experiences.',
  },
  {
    icon: <Fingerprint />,
    text: 'Tailor-made experiences for your business.',
    description:
      'Our VR solutions are designed to adapt to your specific training and customization needs, providing a bespoke experience for your clients.',
  },
  {
    icon: <ShieldHalf />,
    text: 'Team-based virtual environments.',
    description:
      'Enable teams to collaborate and interact in shared VR spaces, fostering communication and teamwork in immersive settings.',
  },
  {
    icon: <GlobeLock />,
    text: 'Compatible with multiple VR devices.',
    description:
      'Our VR modules work across various VR hardware setups, ensuring accessibility and convenience for different user environments.',
  },
  {
    icon: <GlobeLock />,
    text: 'Explore life-like global destinations.',
    description:
      'Engage customers with virtual tours of global destinations, offering an immersive way to plan trips and explore new places.',
  },
  {
    icon: <GlobeLock />,
    text: 'Real-time vehicle design visualization.',
    description:
      'Allow customers to visualize and modify vehicle designs in real-time, making informed decisions before finalizing customization options.',
  },
];

export const checklistItems = [
  {
    title: 'Code merge made easy',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'Review code without worry',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'AI Assistance to reduce time',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'Share work in minutes',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
];

export const pricingOptions = [
  {
    title: 'VR Training',
    price: '$0',
    features: [
      'Realistic Simulations:',
      'Risk-Free Practice',
      'Interactive Learning',
      'Tailored Content',
      'Collaborative Training',
    ],
  },
  {
    title: 'VR Tourism',
    price: '$10',
    features: [
      'Life-like Experiences',
      'Custom Itineraries',
      'Accessible Anywhere',
      'Group Tours',
      'Interactive Exploration',
    ],
  },
  {
    title: 'Virtual Automotive Customization',
    price: '$200',
    features: [
      'Real-Time Visualization',
      'Custom Design Options',
      'Improved Customer Satisfaction',
      'Multi-Angle Views',
      'Interactive Experience',
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
