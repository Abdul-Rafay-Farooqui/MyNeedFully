
import { Button } from "@/components/ui/button";
import { Check, Share2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

const WishlistExamplePage = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Winter Jacket",
      description: "Men's insulated winter jacket, size L",
      price: 89.99,
      fulfilled: true,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      store: "Amazon",
    },
    {
      id: 2,
      name: "Food Basket",
      description: "Essential non-perishable food items",
      price: 65.00,
      fulfilled: true,
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      store: "Walmart",
    },
    {
      id: 3,
      name: "Bedding Set",
      description: "Queen size comforter, sheets, and pillowcases",
      price: 79.99,
      fulfilled: false,
      image: "https://images.unsplash.com/photo-1629949009765-28a429ff37f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      store: "Target",
    },
    {
      id: 4,
      name: "Kitchen Essentials",
      description: "Pots, pans, and cooking utensils set",
      price: 129.99,
      fulfilled: false,
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      store: "Amazon",
    },
    {
      id: 5,
      name: "Gift Card",
      description: "$50 Grocery store gift card",
      price: 50.00,
      fulfilled: false,
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      store: "Kroger",
    },
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast.success("Link copied to clipboard! Share it with others.");
      })
      .catch(() => {
        toast.error("Failed to copy the link. Please try again.");
      });
  };

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">John's Wish List</h1>
          <p className="text-lg text-muted-foreground mb-6">Help John Get Back on His Feet</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button className="flex items-center gap-2" onClick={handleShare}>
              <Share2 size={18} />
              Share This List
            </Button>
            <Button variant="outline" asChild>
              <Link href="/create-wishlist">Create Your Own List</Link>
            </Button>
          </div>
          
          <div className="bg-muted/50 p-4 rounded-lg mb-8 text-left">
            <p>John recently lost his home in a fire and is staying with friends temporarily. He needs help with basic necessities to get back on his feet. Any items you can provide from this list would be greatly appreciated.</p>
          </div>
        </div>

        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div 
              key={item.id} 
              className={`border rounded-lg p-6 flex flex-col md:flex-row gap-6 ${item.fulfilled ? 'bg-muted/50' : 'bg-background'}`}
            >
              <div className="md:w-1/4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-40 object-cover rounded-md"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              
              <div className="md:w-3/4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className={`text-xl font-medium ${item.fulfilled ? 'line-through opacity-70' : ''}`}>
                      {item.name}
                    </h3>
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                  </div>
                  
                  <p className={`text-muted-foreground mt-2 ${item.fulfilled ? 'line-through opacity-70' : ''}`}>
                    {item.description}
                  </p>
                  
                  <div className="mt-2 text-sm">
                    Available from: <span className="font-medium">{item.store}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  {item.fulfilled ? (
                    <div className="flex items-center text-green-600">
                      <Check size={18} className="mr-1" />
                      <span>Fulfilled by a generous donor</span>
                    </div>
                  ) : (
                    <Button variant="default" onClick={() => window.open(`https://${item.store.toLowerCase()}.com`, '_blank')}>
                      Buy Now on {item.store}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">Thank you for your generosity!</p>
          <Button variant="outline" asChild>
            <Link href="/create-wishlist">Create Your Own Wishlist</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistExamplePage;