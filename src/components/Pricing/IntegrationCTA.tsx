import React from "react";

const brands = [
  "DCAMP",
  "ElevenLabs",
  "miro",
  "ceros",
  "yonder",
  "desana",
  "RELEX",
  "Griffin",
  "Proto",
];

export const IntegrationCTA: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      {/* White CTA Box */}
      <div className="mx-auto max-w-6xl rounded-2xl bg-white px-10 py-14 text-center shadow-sm">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Integrate Graphy into your platform
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Add powerful, interactive data storytelling directly into your
          product with our SDK and Embed APIs.
        </p>

        <button className="mt-8 inline-flex items-center justify-center rounded-xl border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-50">
          Get in touch
        </button>
      </div>

      {/* Moving Brands */}
      <div className="relative mt-16 overflow-hidden">
        <div className="flex w-[80%] animate-marquee gap-14 px-6 mx-auto">
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-lg font-semibold text-gray-400 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationCTA;
