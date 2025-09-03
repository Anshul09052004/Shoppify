import Hero from "../Components/Hero";
import Offer from "../Components/Offer";
import Popular from "../Components/Popular";

function Shop() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Popular />
      </section>

      {/* Special Offers */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🎁 Special Offers Just for You
          </h2>
          <p className="mb-10 text-lg max-w-2xl mx-auto">
            Don’t miss out on these limited-time deals! Grab your favorite
            products at amazing discounts.
          </p>
          <Offer />
        </div>
      </section>
    </div>
  );
}

export default Shop;
