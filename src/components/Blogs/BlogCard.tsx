export default function BlogFeatureCard({mainUrl,picUrl,title,date,name,post}) {
  return (
    <section className="w-full py-20 flex justify-center">
      <div className="w-[70%] max-w-6xl flex items-center gap-16">

        {/* LEFT: IMAGE */}
        <div className="w-[60%]">
          <img
            src={mainUrl}
            alt="blog preview"
            className="w-full rounded-2xl"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="w-[40%] text-white">

          {/* Tag */}
          <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-white/10">
            Company
          </span>

          {/* Title */}
          <h2 className="text-3xl font-semibold leading-tight">
            {title}
          </h2>

          {/* Date */}
          <p className="text-gray-400 text-sm mt-4">
            {date}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mt-8">
            <img
              src={picUrl}
              alt="author"
              className="rounded-full w-12"
            />
            <div>
              <p className="text-sm font-medium">
                {name}
              </p>
              <p className="text-xs text-gray-400">
                {post}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
