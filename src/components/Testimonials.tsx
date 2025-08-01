import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samantha Doe",
    title: "CEO, Startify",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "DeveloperZip delivered an amazing product ahead of schedule. Their dedication, clarity, and code quality exceeded expectations.",
  },
  {
    name: "Rajesh Kumar",
    title: "CTO, TechNova",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    feedback:
      "The team was professional and responsive throughout. Would definitely recommend them for any serious web project!",
  },
  {
    name: "Lisa Wong",
    title: "Founder, EduSpark",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    feedback:
      "Super creative and technically strong. They brought my vision to life with great UI/UX and backend integration.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black text-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-gray-300">
            Hear directly from our happy clients who trusted DeveloperZip for their digital solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 place-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="m:max-w-[500px] w-full bg-background border border-border rounded-xl p-6 shadow-xl transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
