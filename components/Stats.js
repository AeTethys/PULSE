function Stats() {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
        <p className="text-lg mb-8">See the results we've achieved with our students.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-2xl font-bold">95%</h3>
            <p>Student Satisfaction</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">30%</h3>
            <p>Grade Improvement</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p>Qualified Teachers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">24/7</h3>
            <p>Available Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
