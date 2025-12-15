export default function BottomInfo() {
  return (
    <div className="absolute bottom-3 w-full px-12 text-sm text-gray-400">

      <div className="flex justify-between mb-10">
        <span>Graphs</span>
        <span className="text-white">All graphs →</span>
      </div>

      <div className="grid grid-cols-5 gap-8 mb-12">
        {[
          "Bar and line",
          "Heatmap",
          "Pie chart",
          "Pie chart maker with percentages",
          "Graph from Excel",
          "Automated",
          "Pretty",
          "Donut",
          "Time series",
          "Interactive",
        ].map((item) => (
          <span key={item} className="relative">
            {item}
            <span className="block w-2 h-2 bg-indigo-500 rounded-full mt-2" />
          </span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-16 text-gray-300">
        <div>
          <p className="mb-3">Social</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>

        <div>
          <p className="mb-3">&nbsp;</p>
          <p>TikTok</p>
          <p>Instagram</p>
          <p>X (Twitter)</p>
        </div>

        <div>
          <p className="mb-3">Backed by</p>
          <p>Coatue</p>
          <p>Northzone</p>
          <p>General Catalyst</p>
          <p>Seedcamp</p>
        </div>
      </div>
    </div>
  );
}
