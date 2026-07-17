function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-rose-50 px-6 text-center">
      <h1 className="mb-6 text-6xl font-bold text-pink-600">
        Everything a creator needs,
        <br />
        all in one workspace.
      </h1>

      <p className="mb-8 max-w-2xl text-xl text-gray-600">
        Plan your content, organize your ideas, manage brand
        collaborations, and grow your creative business with Bloom.
      </p>

      <div className="flex gap-4">
        <button className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600">
          Get Started
        </button>

        <button className="rounded-full border border-pink-500 px-6 py-3 font-semibold text-pink-600 transition hover:bg-pink-100">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;