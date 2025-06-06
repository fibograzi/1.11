
type FeatureProps = {
  title: string;
  description: string;
  iconUrl: string;
};

export default function FeatureCard({ title, description, iconUrl }: FeatureProps) {
  return (
    <div className="border rounded-xl p-4 text-center bg-white shadow-md">
      <img src={iconUrl} alt={title} className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
