
import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanity'
import FeatureCard from '../components/FeatureCard'

type Feature = {
  _id: string
  title: string
  description: string
  icon: { asset: { url: string } }
}

export default function Home() {
  const [features, setFeatures] = useState<Feature[]>([])

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "feature" && locale == "en"]{_id, title, description, icon{asset->{url}}}`)
      .then((data) => setFeatures(data))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {features.map((feature) => (
        <FeatureCard
          key={feature._id}
          title={feature.title}
          description={feature.description}
          iconUrl={feature.icon.asset.url}
        />
      ))}
    </div>
  )
}
