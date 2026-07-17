import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="bg-white px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Everything you need to stay organized
      </h2>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          emoji="📅"
          title="Content Planner"
          description="Plan and organize upcoming posts."
        />

        <FeatureCard
          emoji="💡"
          title="Idea Vault"
          description="Never lose another content idea."
        />

        <FeatureCard
          emoji="🤝"
          title="Brand Deals"
          description="Keep track of collaborations and deadlines."
        />

        <FeatureCard
          emoji="📈"
          title="Analytics"
          description="Monitor your growth and performance."
        />
      </div>
    </section>
  );
}

export default Features;