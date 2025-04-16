"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, Trash2, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

// Sample products data (matching the data from ProductsPage)
const sampleProducts = [
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

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: string;
  link: string;
}

interface CatalogProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const CreateWishlistPage = () => {
  const { toast } = useToast();
  const navigate = useRouter();
  const [wishlistTitle, setWishlistTitle] = useState("");
  const [wishlistDescription, setWishlistDescription] = useState("");
  const [items, setItems] = useState<WishlistItem[]>([
    { id: 1, name: "", description: "", price: "", link: "" }
  ]);
  const [catalogItems, setCatalogItems] = useState<CatalogProduct[]>(sampleProducts);
  const [addedProducts, setAddedProducts] = useState<CatalogProduct[]>([]);
  const [activeTab, setActiveTab] = useState("create");

  const addItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    setItems([...items, { id: newId, name: "", description: "", price: "", link: "" }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    } else {
      toast({
        title: "Cannot remove item",
        description: "Your wishlist needs at least one item.",
        variant: "destructive"
      });
    }
  };

  const updateItem = (id: number, field: string, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!wishlistTitle.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a title for your wishlist.",
        variant: "destructive"
      });
      return;
    }

    if (items.some(item => !item.name.trim())) {
      toast({
        title: "Missing information",
        description: "Please provide a name for all items in your wishlist.",
        variant: "destructive"
      });
      return;
    }

    // Combine manual items and products from catalog
    const allItems = [
      ...items,
      ...addedProducts.map((product, index) => ({
        id: items.length + index + 1,
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        link: `/products/${product.id}`
      }))
    ];

    toast({
      title: "Wishlist created!",
      description: "Your wishlist has been created successfully.",
    });

    // In a real app, we would save the wishlist here
    console.log({
      title: wishlistTitle,
      description: wishlistDescription,
      items: allItems
    });

    // Navigate to example page to show the created list
    setTimeout(() => {
      navigate.push("/wishlist-example");
    }, 1500);
  };

  const addProductToWishlist = (product: CatalogProduct) => {
    // Check if product is already in the wishlist
    if (!addedProducts.find(p => p.id === product.id)) {
      setAddedProducts([...addedProducts, product]);
      toast({
        title: "Product added",
        description: `${product.name} has been added to your wishlist.`,
      });
    } else {
      toast({
        title: "Product already in wishlist",
        description: `${product.name} is already in your wishlist.`,
        variant: "destructive"
      });
    }
  };

  const removeProductFromWishlist = (productId: string) => {
    setAddedProducts(addedProducts.filter(product => product.id !== productId));
    toast({
      title: "Product removed",
      description: "The product has been removed from your wishlist.",
    });
  };

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Create Your Wishlist</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Create a wishlist of items you need and share it with friends, family, and your community.
        </p>

        <Tabs defaultValue="create" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="create">Create Wishlist</TabsTrigger>
            <TabsTrigger value="wishlist" className="relative">
              My Wishlist
              {addedProducts.length > 0 && (
                <Badge className="ml-2 bg-primary">{addedProducts.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="create" className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="wishlist-title">Wishlist Title</Label>
                  <Input
                    id="wishlist-title"
                    placeholder="e.g., John's New Home Essentials"
                    value={wishlistTitle}
                    onChange={(e) => setWishlistTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="wishlist-description">Wishlist Description</Label>
                  <Textarea
                    id="wishlist-description"
                    placeholder="Tell people why you're creating this wishlist and how they can help..."
                    value={wishlistDescription}
                    onChange={(e) => setWishlistDescription(e.target.value)}
                    className="mt-1 h-24"
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-4">Wishlist Items</h2>
                
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor={`item-name-${item.id}`}>Item {item.id}</Label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="h-8 px-2 text-destructive"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>

                      <div>
                        <Input
                          id={`item-name-${item.id}`}
                          placeholder="Item name"
                          value={item.name}
                          onChange={(e) => updateItem(item.id, "name", e.target.value)}
                          className="mb-2"
                        />
                      </div>

                      <div>
                        <Textarea
                          placeholder="Item description"
                          value={item.description}
                          onChange={(e) => updateItem(item.id, "description", e.target.value)}
                          className="h-16 mb-2"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Input
                            placeholder="Price (e.g., 29.99)"
                            value={item.price}
                            onChange={(e) => updateItem(item.id, "price", e.target.value)}
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Store link (Amazon, Walmart, etc.)"
                            value={item.link}
                            onChange={(e) => updateItem(item.id, "link", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="mt-4 w-full"
                  onClick={addItem}
                >
                  <PlusCircle size={18} className="mr-2" />
                  Add Another Item
                </Button>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-4">Add from Product Catalog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catalogItems.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{product.name}</h3>
                          <Badge>{product.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">${product.price.toFixed(2)}</span>
                          <Button 
                            type="button" 
                            size="sm" 
                            onClick={() => addProductToWishlist(product)}
                            variant="outline"
                          >
                            <PlusCircle size={16} className="mr-1" /> Add to Wishlist
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  Create Wishlist
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="wishlist" className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Wishlist Items</h2>
                <Button
                  variant="outline"
                  onClick={() => setActiveTab("create")}
                >
                  Back to Creating
                </Button>
              </div>
              
              {addedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Your wishlist is empty</h3>
                  <p className="text-muted-foreground mb-6">
                    Go back to the catalog and add some products to your wishlist.
                  </p>
                  <Button onClick={() => setActiveTab("create")}>
                    Browse Products
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {addedProducts.map((product) => (
                    <div key={product.id} className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                      <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{product.name}</h3>
                            <Badge variant="outline" className="mt-1">{product.category}</Badge>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">${product.price.toFixed(2)}</div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-destructive mt-1 h-8 px-2"
                              onClick={() => removeProductFromWishlist(product.id)}
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg font-medium mb-4">
                      <span>Total Items:</span>
                      <span>{addedProducts.length}</span>
                    </div>
                    <div className="flex justify-between text-lg font-medium mb-6">
                      <span>Estimated Total:</span>
                      <span>
                        ${addedProducts.reduce((sum, product) => sum + product.price, 0).toFixed(2)}
                      </span>
                    </div>
                    <Button
                      type="button"
                      className="w-full"
                      onClick={() => {
                        if (addedProducts.length > 0) {
                          toast({
                            title: "Ready to create wishlist",
                            description: "Please complete your wishlist details to finalize.",
                          });
                          setActiveTab("create");
                        }
                      }}
                    >
                      Continue with These Items
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CreateWishlistPage;