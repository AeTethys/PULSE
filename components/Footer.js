import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} PULSE. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
