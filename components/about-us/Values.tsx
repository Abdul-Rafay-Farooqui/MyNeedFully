import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import FeaturedSection from '../ui-components/FeaturedSection'
import { Heart, Users, Gift } from 'lucide-react'

const values = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Compassion",
      description: "We believe in the power of empathy and kindness in helping people through difficult times.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community",
      description: "We foster connections between those in need and those who want to help, strengthening communities.",
    },
    {
      icon: <Gift className="h-10 w-10 text-primary" />,
      title: "Direct Support",
      description: "We enable direct, tangible assistance that meets immediate needs in times of crisis.",
    },
  ];
const Values = () => {
  return (
    <div>
        <FeaturedSection title="Our Values" centered background="secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center border border-border transition-all duration-300 hover:shadow-hover"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </FeaturedSection>
    </div>
  )
}

export default Values