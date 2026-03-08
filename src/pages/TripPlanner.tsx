import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { DESTINATIONS } from "@/data/destinations";

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  hotel: string;
  highlight: string;
}

const ITINERARY_DATA: Record<string, ItineraryDay[]> = {
  "Hunza Valley": [
    { day: 1, title: "Arrival in Gilgit", activities: ["Airport pickup", "Check-in at hotel", "Evening walk along river"], hotel: "Serena Hotel Gilgit", highlight: "Gilgit Bazaar" },
    { day: 2, title: "Drive to Karimabad", activities: ["Scenic KKH drive", "Rakaposhi viewpoint stop", "Baltit Fort visit"], hotel: "Eagle's Nest Hotel", highlight: "Baltit Fort" },
    { day: 3, title: "Attabad Lake Day", activities: ["Boat ride on Attabad Lake", "Passu Cones viewpoint", "Suspension bridge walk"], hotel: "Eagle's Nest Hotel", highlight: "Attabad Lake" },
    { day: 4, title: "Explore Hunza", activities: ["Altit Fort visit", "Local apricot farm", "Traditional Hunza cuisine"], hotel: "Eagle's Nest Hotel", highlight: "Altit Fort" },
    { day: 5, title: "Return Journey", activities: ["Sunrise at Eagle's Nest", "Shopping in Karimabad", "Drive to Gilgit & departure"], hotel: "—", highlight: "Eagle's Nest Sunrise" },
  ],
  "Skardu": [
    { day: 1, title: "Arrival in Skardu", activities: ["Flight from Islamabad", "Hotel check-in", "Skardu Bazaar exploration"], hotel: "Shangrila Resort", highlight: "Skardu Fort" },
    { day: 2, title: "Shangrila & Lakes", activities: ["Lower Kachura Lake", "Shangrila Resort gardens", "Upper Kachura Lake hike"], hotel: "Shangrila Resort", highlight: "Lower Kachura Lake" },
    { day: 3, title: "Deosai Adventure", activities: ["Jeep ride to Deosai", "Sheosar Lake visit", "Wildlife spotting"], hotel: "Camping at Deosai", highlight: "Deosai National Park" },
    { day: 4, title: "Satpara & Fortress", activities: ["Satpara Lake visit", "Skardu Fort/Kharpocho", "Local craft shopping"], hotel: "Shangrila Resort", highlight: "Satpara Lake" },
    { day: 5, title: "Departure", activities: ["Sunrise photography", "Last minute shopping", "Flight to Islamabad"], hotel: "—", highlight: "Mountain Sunrise" },
  ],
};

const INTERESTS = ["Adventure", "Photography", "Culture", "Relaxation", "Wildlife", "Trekking"];

export default function TripPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("5");
  const [budget, setBudget] = useState("50000-100000");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const generateItinerary = () => {
    const data = ITINERARY_DATA[destination];
    if (data) {
      setItinerary(data.slice(0, parseInt(days)));
    } else {
      // Generate a generic itinerary
      const generic: ItineraryDay[] = Array.from({ length: parseInt(days) }, (_, i) => ({
        day: i + 1,
        title: i === 0 ? `Arrival in ${destination}` : i === parseInt(days) - 1 ? "Return Journey" : `Day ${i + 1} — Explore`,
        activities: i === 0 ? ["Airport/road transfer", "Hotel check-in", "Local area exploration"] : ["Morning sightseeing", "Lunch at local restaurant", "Afternoon adventure activity"],
        hotel: i === parseInt(days) - 1 ? "—" : "Local 3-4★ Hotel",
        highlight: destination,
      }));
      setItinerary(generic);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>AI Trip Planner — Safarnama</title>
        <meta name="description" content="Plan your perfect Pakistan trip with our intelligent trip planner. Get customized itineraries instantly." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 md:px-14 py-14 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <div className="tag-badge mb-4 inline-block">Trip Planner</div>
          <h1 className="font-display text-3xl md:text-5xl font-light mb-3 text-foreground">Plan Your Perfect Trip</h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Tell us your preferences and we'll create a personalized itinerary for your Pakistan adventure.
          </p>
        </motion.div>

        <div className="glass-card p-6 md:p-10 rounded-sm mb-10">
          <div className="grid gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Destination</label>
                <select className="form-input" value={destination} onChange={(e) => setDestination(e.target.value)}>
                  <option value="">Choose destination</option>
                  {DESTINATIONS.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Trip Length</label>
                <select className="form-input" value={days} onChange={(e) => setDays(e.target.value)}>
                  {[3, 4, 5, 6, 7, 10, 14].map((d) => <option key={d} value={d}>{d} Days</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-2">Budget (PKR)</label>
              <select className="form-input" value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="20000-50000">PKR 20,000 – 50,000</option>
                <option value="50000-100000">PKR 50,000 – 1,00,000</option>
                <option value="100000-200000">PKR 1,00,000 – 2,00,000</option>
                <option value="200000+">PKR 2,00,000+</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-muted-foreground uppercase tracking-widest block mb-3">Interests</label>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 text-xs border transition-all cursor-pointer ${
                      selectedInterests.includes(interest)
                        ? "border-gold-strong bg-gold/10 text-gold"
                        : "border-border bg-card/50 text-muted-foreground hover:border-gold"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn-primary justify-center mt-2"
              onClick={generateItinerary}
              disabled={!destination}
            >
              Generate Itinerary ✦
            </button>
          </div>
        </div>

        {/* Generated Itinerary */}
        {itinerary && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="font-display text-2xl md:text-3xl font-light mb-8 text-center text-foreground">
              Your <span className="gold-gradient-text">{destination}</span> Itinerary
            </h2>
            <div className="space-y-4">
              {itinerary.map((day) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: day.day * 0.1 }}
                  className="glass-card p-5 md:p-6 rounded-sm"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                    <div className="w-12 h-12 flex-shrink-0 bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <span className="font-display text-lg text-gold">{day.day}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg mb-2 text-foreground">{day.title}</h3>
                      <ul className="space-y-1 mb-3">
                        {day.activities.map((a, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="text-gold text-[10px]">▸</span> {a}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="text-muted-foreground">🏨 {day.hotel}</span>
                        <span className="text-gold">⭐ {day.highlight}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href={`/booking?dest=${encodeURIComponent(destination)}`} className="btn-primary">
                Book This Itinerary →
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
