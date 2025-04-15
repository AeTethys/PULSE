function Newsletter() {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8">Stay up to date with the latest news and updates.</p>
        <input type="email" placeholder="Enter your email" className="border rounded py-2 px-4" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Subscribe</button>
      </div>
    </section>
  )
}

export default Newsletter
