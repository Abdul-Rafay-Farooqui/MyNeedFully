"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, ShoppingCart, Heart, Share, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const allProducts = [
  {
    id: "food-basket",
    name: "Essential Food Basket",
    description: "A large basket filled with pantry essentials to keep a family fed for a week.",
    longDescription: "This comprehensive food basket contains a week's worth of essential pantry items for a family of four. Includes rice, pasta, canned vegetables, canned fruits, soup, beans, cereal, oatmeal, and shelf-stable milk. All items are chosen to provide balanced nutrition during difficult times.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Food",
    retailer: "Amazon",
    inStock: true,
  },
  {
    id: "winter-jacket",
    name: "Winter Jacket",
    description: "Stay warm with this insulated winter jacket, essential for cold weather.",
    longDescription: "This durable winter jacket features a water-resistant outer shell and thick insulation to keep you warm in cold temperatures. Includes a hood, multiple pockets, and adjustable cuffs to keep out wind and snow. Available in multiple sizes for men, women, and children.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Clothing",
    retailer: "Walmart",
    inStock: true,
  },
  {
    id: "bedding-set",
    name: "Comforter Bedding Set",
    description: "Cozy bedding set with sheets, pillowcases, and a warm comforter.",
    longDescription: "Complete bedding set that includes a warm comforter, fitted sheet, flat sheet, and two pillowcases. Made with soft, hypoallergenic materials for comfort and durability. Available in twin, full, queen, and king sizes. Machine washable for easy care.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1629949009765-28a429ff37f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Household",
    retailer: "Target",
    inStock: true,
  },
  {
    id: "gift-card",
    name: "Grocery Gift Card",
    description: "A gift card for purchasing groceries at major supermarkets.",
    longDescription: "This grocery gift card can be used at major supermarket chains nationwide, allowing the recipient to purchase fresh food, pantry items, or other necessary groceries. Available in denominations of $25, $50, $75, and $100. An excellent way to provide flexible assistance.",
    price: 50.00,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Gift Cards",
    retailer: "Multiple retailers",
    inStock: true,
  },
  {
    id: "toiletries-kit",
    name: "Essential Toiletries Kit",
    description: "Complete kit with shampoo, soap, toothpaste, and other personal care items.",
    longDescription: "This comprehensive toiletries kit includes all the essentials for personal hygiene: shampoo, conditioner, body wash, soap, toothpaste, toothbrush, deodorant, lotion, and other basic care items. Perfect for those starting over or in temporary housing situations.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Personal Care",
    retailer: "Amazon",
    inStock: true,
  },
  {
    id: "kitchen-set",
    name: "Basic Kitchen Set",
    description: "Essential pots, pans, and utensils for preparing meals.",
    longDescription: "This kitchen starter set includes everything needed to prepare basic meals: a saucepan, frying pan, pot with lid, mixing bowl, measuring cups, utensils (spatula, spoon, ladle), and a set of dishes and cutlery for four people. Ideal for setting up a new kitchen.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Household",
    retailer: "Walmart",
    inStock: true,
  },
  {
    id: "blanket",
    name: "Warm Fleece Blanket",
    description: "Soft, warm blanket for cold nights.",
    longDescription: "This soft, plush fleece blanket provides warmth and comfort. Measuring 60\" x 80\", it's large enough for a single bed or for use as an extra layer on larger beds. Machine washable and available in multiple colors. A simple but essential item for staying warm.",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1600369672770-985fd30001c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Household",
    retailer: "Target",
    inStock: true,
  },
  {
    id: "backpack",
    name: "Multi-purpose Backpack",
    description: "Durable backpack for everyday use or school.",
    longDescription: "This versatile backpack features multiple compartments, including a padded laptop sleeve, water bottle pockets, and organizer sections for smaller items. Made from durable, water-resistant material with reinforced stitching. Perfect for school, work, or everyday use.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c661b4a12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Clothing",
    retailer: "Amazon",
    inStock: true,
  },
  {
    id: "baby-essentials",
    name: "Baby Essentials Kit",
    description: "Diapers, wipes, formula, and other necessities for infants.",
    longDescription: "This comprehensive baby essentials kit includes a supply of diapers in various sizes, baby wipes, baby shampoo, lotion, diaper rash cream, bottles, and formula. Provides the basics needed to care for an infant during a transitional or crisis period.",
    price: 85.99,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Baby",
    retailer: "Target",
    inStock: true,
  },
  {
    id: "school-supplies",
    name: "School Supplies Bundle",
    description: "Notebooks, pens, pencils, and other essential school items.",
    longDescription: "This school supplies bundle contains everything a student needs for the classroom: notebooks, folders, pencils, pens, erasers, highlighters, ruler, scissors, and a pencil case. Appropriate for middle school and high school students, helping them be prepared for learning.",
    price: 55.99,
    image: "https://images.unsplash.com/photo-1588075592446-265bad1d861c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Education",
    retailer: "Walmart",
    inStock: true,
  },
];


const getRelatedProducts = (currentId: string, category: string) => {
  return allProducts
    .filter(product => product.id !== currentId && product.category === category)
    .slice(0, 3);
};

const ProductDetailPage = () => {
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
