import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import FeaturedSection from '../ui-components/FeaturedSection'
import { ArrowRight } from 'lucide-react'

const featuredProducts = [
    {
      id: "food-basket",
      name: "Essential Food Basket",
      description: "A large basket filled with pantry essentials to keep a family fed for a week.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food",
    },
    {
      id: "winter-jacket",
      name: "Winter Jacket",
      description: "Stay warm with this insulated winter jacket, essential for cold weather.",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Clothing",
    },
    {
      id: "bedding-set",
      name: "Comforter Bedding Set",
      description: "Cozy bedding set with sheets, pillowcases, and a warm comforter.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1629949009765-28a429ff37f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Household",
    },
    {
      id: "gift-card",
      name: "Grocery Gift Card",
      description: "A gift card for purchasing groceries at major supermarkets.",
      price: 50.00,
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Gift Cards",
    },
  ];
const Middle = () => {
  return (
    <FeaturedSection
        title="Featured Essential Items"
        subtitle="These are common items people in crisis need. Browse these or add your own specific needs to a wish list."
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.id}`}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 border border-border hover:shadow-hover hover:-translate-y-1">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="inline-block px-2 py-1 mb-3 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                    <span className="text-primary text-sm font-medium flex items-center group-hover:underline">
                      View Item <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </FeaturedSection>
  )
}

export default Middle