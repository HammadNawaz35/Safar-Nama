export interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ali Raza",
    location: "Lahore, Pakistan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "The Hunza Valley tour exceeded every expectation. The autumn colors, the hospitality of the locals, and Safarnama's flawless planning made this the most magical week of our lives."
  },
  {
    name: "Fatima Shah",
    location: "Karachi, Pakistan",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "Skardu left us speechless. From Shangrila Resort to the Deosai plains, every moment was carefully curated. The team handled everything so we could just enjoy the views."
  },
  {
    name: "James Wilson",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    text: "I came to Pakistan with zero expectations and left completely transformed. Fairy Meadows and Nanga Parbat were beyond anything I've seen in the Alps or Himalayas."
  },
  {
    name: "Ayesha Mahmood",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "A family trip to Swat and Kalam Valley — the children absolutely loved it. Safe, well-organized, and stunning beyond words. We're already planning our next trip."
  },
];
