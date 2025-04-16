import Link from "next/link"

interface NotFoundContentProps {
  from: string | null
}

export default function NotFoundContent({ from }: NotFoundContentProps) {
  return (
    <div className="text-center max-w-lg">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        Sorry, we couldn’t find the page you were looking for.
        {from && <span className="block mt-2">You came from: {from}</span>}
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  )
}
