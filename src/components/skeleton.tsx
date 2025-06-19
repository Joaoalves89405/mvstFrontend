export default function CoffeeGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-900 rounded-2xl p-6 text-center animate-pulse"
        >
          <div className="mb-4">
            <div className="h-7 bg-gray-800 rounded-full w-16 mx-auto"></div>
          </div>
          <div className="mb-6 h-32 bg-gray-800 rounded-lg"></div>
          <div className="h-6 bg-gray-800 rounded w-24 mb-2 mx-auto"></div>
          <div className="h-4 bg-gray-800 rounded w-32 mb-4 mx-auto"></div>
          <div className="h-8 bg-gray-800 rounded w-20 mb-4 mx-auto"></div>
          <div className="h-10 bg-gray-800 rounded-full w-24 mx-auto"></div>
        </div>
      ))}
    </div>
  );
}
