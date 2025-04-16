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
import { allProducts } from "@/lib/products"; // Adjust the import path as necessary

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
              href={`/products/${product.id}`}  // ← THIS IS CORRECT
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