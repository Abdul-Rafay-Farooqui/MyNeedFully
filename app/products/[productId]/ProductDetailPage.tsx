"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, ShoppingCart, Heart, Share, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { allProducts } from "@/lib/products"; // Adjust the import path as necessary


const getRelatedProducts = (currentId: string, category: string) => {
  return allProducts
    .filter(product => product.id !== currentId && product.category === category)
    .slice(0, 3);
};


const ProductDetailPage = () => {
  // Get productId from URL params (not props)
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);

  useEffect(() => {
    // Find product by ID
    const foundProduct = allProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      // Get related products
      setRelatedProducts(getRelatedProducts(foundProduct.id, foundProduct.category));
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [productId]);

  const handleAddToWishlist = () => {
    setIsAddingToWishlist(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
        duration: 3000,
      });
      setIsAddingToWishlist(false);
    }, 1000);
  };

  const handlePurchase = () => {
    setIsPurchasing(true);
    
    // Simulate redirect to retailer
    setTimeout(() => {
      toast({
        title: "Redirecting to Retailer",
        description: `You'll be redirected to ${product.retailer} to complete your purchase.`,
        duration: 3000,
      });
      setIsPurchasing(false);
      
      // In a real app, you would redirect to the retailer's website
      // window.location.href = product.retailerUrl;
    }, 1500);
  };

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p>Product not found.</p>
        <Button asChild className="mt-4">
          <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="mb-8">
        <Button variant="ghost" asChild className="flex items-center">
          <Link href="/products">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="animate-slide-in">
          <div className="rounded-xl overflow-hidden border border-border bg-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover animate-image-fade-in"
            />
          </div>
        </div>

        <div className="animate-slide-in animation-delay-100">
          <Badge className="mb-3">{product.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">{product.name}</h1>
          <p className="text-2xl font-medium text-primary mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-muted-foreground mb-8">{product.description}</p>
          
          <div className="mb-4">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <span className="font-medium mr-2">Retailer:</span>
              <span>{product.retailer}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span className="font-medium mr-2">Availability:</span>
              {product.inStock ? (
                <span className="flex items-center text-green-600">
                  <Check className="mr-1 h-4 w-4" /> In Stock
                </span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="flex-1"
              disabled={isPurchasing}
              onClick={handlePurchase}
            >
              {isPurchasing ? "Redirecting..." : "Buy Now"}
              <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex-1"
              disabled={isAddingToWishlist}
              onClick={handleAddToWishlist}
            >
              {isAddingToWishlist ? "Adding..." : "Add to Wishlist"}
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12">
              <Share className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-secondary rounded-lg p-4 border border-border">
            <h3 className="text-sm font-medium mb-2">Why Add This to a Wishlist?</h3>
            <p className="text-sm text-muted-foreground">
              This item is commonly needed by people in crisis situations. By adding it to a wishlist,
              you allow friends, family, and community members to directly provide this essential item.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16 animate-slide-in animation-delay-200">
        <Tabs defaultValue="details">
          <TabsList className="mb-6">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Delivery</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="text-lg">
            <div className="prose max-w-none">
              <p>{product.longDescription}</p>
            </div>
          </TabsContent>
          <TabsContent value="shipping">
            <div className="prose max-w-none">
              <p>
                When you purchase this item for someone's wishlist, it will be shipped directly to their address.
                The recipient's address will be kept private and only shared with the retailer for shipping purposes.
              </p>
              <h3>Delivery Information:</h3>
              <ul>
                <li>Orders are typically processed within 1-2 business days.</li>
                <li>Standard shipping takes 3-5 business days.</li>
                <li>Expedited shipping options may be available at checkout.</li>
                <li>The recipient will receive tracking information once the item ships.</li>
              </ul>
              <p>
                <strong>Note:</strong> Delivery times may vary based on location and availability.
                Check the retailer's website for specific delivery information.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {relatedProducts.length > 0 && (
        <div className="animate-slide-in animation-delay-300">
          <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                href={`/products/${relatedProduct.id}`}
                className="group"
              >
                <div className="rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-block px-2 py-1 mb-3 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {relatedProduct.category}
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">${relatedProduct.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
