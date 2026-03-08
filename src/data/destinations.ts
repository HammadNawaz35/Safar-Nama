export interface Destination {
  id: number;
  name: string;
  province: string;
  tag: string;
  price: number;
  img: string;
  rating: number;
  reviews: number;
  climate: string;
  highlight: string;
  lat: number;
  lng: number;
}

export const DESTINATIONS: Destination[] = [
  { id: 1, name: "Hunza Valley", province: "Gilgit-Baltistan", tag: "Mountain", price: 45000, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&q=80", rating: 4.9, reviews: 1240, climate: "Cool · Apr–Oct", highlight: "Karimabad fort, cherry blossoms, Rakaposhi views", lat: 36.3167, lng: 74.6500 },
  { id: 2, name: "Skardu", province: "Gilgit-Baltistan", tag: "Adventure", price: 55000, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80", rating: 4.8, reviews: 980, climate: "Cold · May–Sep", highlight: "Shangrila Resort, Upper & Lower Kachura Lakes", lat: 35.2971, lng: 75.6333 },
  { id: 3, name: "Fairy Meadows", province: "Gilgit-Baltistan", tag: "Trek", price: 38000, img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=700&q=80", rating: 4.9, reviews: 750, climate: "Cool · Jun–Sep", highlight: "Nanga Parbat base camp views, alpine meadows", lat: 35.3756, lng: 74.5881 },
  { id: 4, name: "Nanga Parbat Base Camp", province: "Gilgit-Baltistan", tag: "Trek", price: 65000, img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&q=80", rating: 4.7, reviews: 420, climate: "Cold · Jun–Aug", highlight: "The Killer Mountain, world's 9th highest peak", lat: 35.2381, lng: 74.5894 },
  { id: 5, name: "Attabad Lake", province: "Gilgit-Baltistan", tag: "Lake", price: 42000, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80", rating: 4.8, reviews: 890, climate: "Cool · May–Oct", highlight: "Turquoise glacial lake, boat rides, tunnel views", lat: 36.3308, lng: 74.8394 },
  { id: 6, name: "Shangrila Resort", province: "Gilgit-Baltistan", tag: "Luxury", price: 50000, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80", rating: 4.6, reviews: 670, climate: "Cold · May–Sep", highlight: "Heaven on Earth, Lower Kachura Lake paradise", lat: 35.3200, lng: 75.5700 },
  { id: 7, name: "Deosai National Park", province: "Gilgit-Baltistan", tag: "Wildlife", price: 48000, img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80", rating: 4.7, reviews: 520, climate: "Cold · Jul–Sep", highlight: "Second highest plateau, Himalayan brown bears", lat: 35.0333, lng: 75.4000 },
  { id: 8, name: "Swat Valley", province: "Khyber Pakhtunkhwa", tag: "Cultural", price: 32000, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80", rating: 4.6, reviews: 1100, climate: "Mild · Mar–Nov", highlight: "Switzerland of the East, Buddhist ruins, rivers", lat: 35.2227, lng: 72.3527 },
  { id: 9, name: "Kalam Valley", province: "Khyber Pakhtunkhwa", tag: "Scenic", price: 28000, img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80", rating: 4.5, reviews: 940, climate: "Cool · Apr–Oct", highlight: "Mahodand Lake, Ushu Forest, waterfalls", lat: 35.4917, lng: 72.5833 },
  { id: 10, name: "Neelum Valley", province: "Azad Kashmir", tag: "Scenic", price: 35000, img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&q=80", rating: 4.8, reviews: 780, climate: "Mild · Apr–Oct", highlight: "Emerald rivers, pine forests, Sharda temple", lat: 34.5833, lng: 74.3333 },
  { id: 11, name: "Ratti Gali Lake", province: "Azad Kashmir", tag: "Lake", price: 40000, img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&q=80", rating: 4.9, reviews: 450, climate: "Cold · Jun–Sep", highlight: "Alpine glacial lake at 12,130 feet, camping", lat: 34.7667, lng: 74.3833 },
  { id: 12, name: "Saif ul Malook Lake", province: "Khyber Pakhtunkhwa", tag: "Lake", price: 25000, img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80", rating: 4.7, reviews: 1560, climate: "Cool · May–Oct", highlight: "Legendary fairy tale lake, Malika Parbat views", lat: 34.8728, lng: 73.6900 },
  { id: 13, name: "Murree", province: "Punjab", tag: "Hill Station", price: 18000, img: "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=700&q=80", rating: 4.3, reviews: 2100, climate: "Cool · Year-round", highlight: "Queen of Hills, Mall Road, Pindi Point", lat: 33.9070, lng: 73.3943 },
  { id: 14, name: "Ziarat", province: "Balochistan", tag: "Heritage", price: 22000, img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80", rating: 4.4, reviews: 380, climate: "Mild · Mar–Nov", highlight: "Juniper forests, Quaid-e-Azam Residency", lat: 30.3812, lng: 67.7267 },
];

export const PROVINCES = ["All", "Gilgit-Baltistan", "Khyber Pakhtunkhwa", "Azad Kashmir", "Punjab", "Balochistan"];
export const TAGS = ["All", "Mountain", "Adventure", "Trek", "Lake", "Scenic", "Cultural", "Luxury", "Wildlife", "Hill Station", "Heritage"];
