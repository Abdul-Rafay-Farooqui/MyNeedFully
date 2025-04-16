import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const Story = () => {
  return (
    <div>
        <section className="page-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                MyNeedfully.com was born from a simple observation: when people face crises like natural disasters, domestic violence, or homelessness, they often need specific items to rebuild their lives – but it's hard for friends, family, and community members to know exactly what to provide.
              </p>
              <p className="text-lg mb-6">
                We created a platform that makes it easy for individuals in need to create wishlists of essential items, and for others to directly fulfill these needs. By connecting people in crisis with those who want to help, we enable communities to provide targeted, meaningful support.
              </p>
              <p className="text-lg mb-6">
                Our vision is a world where no one faces crisis alone, where communities respond effectively to individuals' needs, and where the path to recovery is made smoother through direct, tangible support.
              </p>
              <Button asChild className="mt-2">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            
            <div className="bg-secondary rounded-2xl p-8 shadow-subtle animate-scale-in">
              <h3 className="text-2xl font-medium mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                MyNeedfully.com helps individuals and families in crisis receive the support they need from their community.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We create a bridge between people in need and those with resources to share.</p>
                </li>
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We facilitate direct, meaningful assistance that addresses specific needs.</p>
                </li>
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We empower communities to respond effectively in times of crisis.</p>
                </li>
                <li className="flex">
                  <MoveUpRight className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <p>We believe in the collective power of small acts of kindness.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Story