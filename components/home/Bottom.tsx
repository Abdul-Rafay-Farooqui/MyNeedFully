import { Gift, Heart, Share2, ShieldCheck } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

const howItWorksSteps = [
    {
      icon: <Gift className="w-10 h-10 text-primary mb-4" />,
      title: "Create a Wishlist",
      description: "Build a wishlist of essential items you or someone you know needs during a difficult time.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-primary mb-4" />,
      title: "Share with Community",
      description: "Share your wishlist with friends, family, and the broader community who want to help.",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary mb-4" />,
      title: "Receive Support",
      description: "Items purchased from your wishlist are sent directly to you or your loved ones in need.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
      title: "Track Fulfillment",
      description: "Easily track which items have been fulfilled and those still needed.",
    },
  ];
const Bottom = () => {
  return (
    <>
    <section className="page-section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-3 animate-slide-in">How MyNeedfully Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in animation-delay-100">
              A simple process to connect people in need with those who want to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-in animation-delay-200">
            {howItWorksSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-hover transition-all duration-300"
              >
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6 max-w-2xl mx-auto animate-slide-in animation-delay-300">
              Ready to create a wish list for yourself or someone in need?
            </p>
            <Button asChild size="lg" className="animate-slide-in animation-delay-400">
              <Link href="/create-wishlist">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 animate-slide-in">See a Wish List Example</h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-in animation-delay-100">
              Check out an example wish list to understand how MyNeedfully helps connect people in crisis with those who want to support them.
            </p>
            <Button asChild size="lg" className="animate-slide-in animation-delay-200">
              <Link href="/wishlist-example">View Example Wish List</Link>
            </Button>
          </div>
        </div>
      </section>
      </>
  )
}

export default Bottom