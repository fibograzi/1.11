import React, { useEffect, useState } from 'react';
import { sanityClient } from '../lib/sanity';
import { urlFor } from '../lib/imageBuilder';
import FeatureCard from '../components/ui/feature-card';

interface Feature {
  _id: string;
  title: string;
  description: string;
  icon: any;
}

const Home: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "feature" && locale == "en"]{_id, title, description, icon}`)
      .then((data) => setFeatures(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature._id}
              title={feature.title}
              description={feature.description}
              iconUrl={urlFor(feature.icon).width(100).url()}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
