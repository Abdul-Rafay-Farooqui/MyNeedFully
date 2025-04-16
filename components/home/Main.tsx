import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Hero from '../ui-components/Hero'

const Main = () => {
  return (
    <Hero
        title="Helping People in Need, One Wish List at a Time"
        subtitle="Create and share a wish list to help yourself or loved ones rebuild, start fresh, or get support during tough times."
        background="gradient"
        size="large"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg">
            <Link href="/create-wishlist">Create Your Wish List</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </Hero>
  )
}

export default Main
