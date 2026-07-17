type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
};

function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 text-5xl">{emoji}</div>

      <h3 className="mb-2 text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;