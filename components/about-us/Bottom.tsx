import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Bottom = () => {
  return (
    <div>
         <section className="page-section bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 animate-slide-in">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-in animation-delay-100">
            Whether you're in need or want to help someone else, MyNeedfully makes it easy to create and share wishlists for essential items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in animation-delay-200">
            <Button asChild size="lg" variant="secondary">
              <Link href="/create-wishlist">Create a Wishlist</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/resources">Find Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bottom