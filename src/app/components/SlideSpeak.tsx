"use client";

export default function SlidesThatSpeak({h2,p,imgUrl}) {
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#f8fafc] rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-600">
           {h2}
          </h2>
          <p className="text-gray-600 mt-2 mb-6">
           {p}
          </p>
          <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
            <img
              src={imgUrl}
              alt="Slides preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
