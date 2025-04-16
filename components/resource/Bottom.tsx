import Link from 'next/link'
import React from 'react'

const Bottom = () => {
  return (
    <div>
        <section className="page-section bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-6 animate-slide-in">Need Something Specific?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-in animation-delay-100">
            If you need essential items rather than services, create a wishlist that friends, family, and community members can help fulfill.
          </p>
          <Link 
            href="/create-wishlist" 
            className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 animate-slide-in animation-delay-200"
          >
            Create Your Wishlist
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Bottom