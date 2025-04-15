export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="h-16 w-16 rounded-full border-4 border-t-blue-600 border-b-blue-600 border-l-transparent border-r-transparent animate-spin mb-8"></div>
      <h2 className="text-2xl font-semibold text-gray-800">Loading...</h2>
    </div>
  )
}
