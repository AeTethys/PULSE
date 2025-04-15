function Features() {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="text-lg mb-8">Explore the features that make our platform unique.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-bold">Personalized Learning</h3>
            <p>Adaptive learning paths for every student.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Real-time Analytics</h3>
            <p>Track progress and identify areas for improvement.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Expert Teachers</h3>
            <p>Learn from experienced and qualified instructors.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
