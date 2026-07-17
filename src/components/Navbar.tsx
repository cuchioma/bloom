function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold text-pink-600">
        🌸 Bloom
      </h1>

      <button className="rounded-full bg-pink-500 px-5 py-2 font-medium text-white hover:bg-pink-600 transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;