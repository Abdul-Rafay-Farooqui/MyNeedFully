"use client";
import React, { useState } from 'react'
import Link from "next/link";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const allProducts = [
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
    {
      id: "toiletries-kit",
      name: "Essential Toiletries Kit",
      description: "Complete kit with shampoo, soap, toothpaste, and other personal care items.",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Personal Care",
    },
    {
      id: "kitchen-set",
      name: "Basic Kitchen Set",
      description: "Essential pots, pans, and utensils for preparing meals.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Household",
    },
    {
      id: "blanket",
      name: "Warm Fleece Blanket",
      description: "Soft, warm blanket for cold nights.",
      price: 35.99,
      image: "https://images.unsplash.com/photo-1600369672770-985fd30001c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Household",
    },
    {
      id: "backpack",
      name: "Multi-purpose Backpack",
      description: "Durable backpack for everyday use or school.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1622560480605-d83c661b4a12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Clothing",
    },
    {
      id: "baby-essentials",
      name: "Baby Essentials Kit",
      description: "Diapers, wipes, formula, and other necessities for infants.",
      price: 85.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Baby",
    },
    {
      id: "school-supplies",
      name: "School Supplies Bundle",
      description: "Notebooks, pens, pencils, and other essential school items.",
      price: 55.99,
      image: "https://images.unsplash.com/photo-1588075592446-265bad1d861c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Education",
    },
  ];
  const categories = Array.from(new Set(allProducts.map(product => product.category)));


const Main = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [showFilters, setShowFilters] = useState(false);
  
    // Filter products based on search query and selected categories
    const filteredProducts = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                              selectedCategories.includes(product.category);
      
      return matchesSearch && matchesCategory;
    });
  
    const toggleCategory = (category: string) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(c => c !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    };
  return (
    <div>
        <section className="page-section">
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-auto flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="w-full md:w-auto flex items-center justify-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {showFilters && (
            <div className="mb-8 p-4 border border-border rounded-lg opacity-0 animate-slide-in">
              <h3 className="text-lg font-medium mb-4">Filter by Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={category} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
              {selectedCategories.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedCategories.map(category => (
                    <Badge key={category} variant="outline" className="flex items-center gap-1">
                      {category}
                      <button
                        onClick={() => toggleCategory(category)}
                        className="ml-1 h-4 w-4 rounded-full flex items-center justify-center hover:bg-secondary"
                      >
                        ✕
                      </button>
                    </Badge>
                  ))}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedCategories([])}
                    className="text-xs"
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button onClick={() => {
                setSearchQuery("");
                setSelectedCategories([]);
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Main