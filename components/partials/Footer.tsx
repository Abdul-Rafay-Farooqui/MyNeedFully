"use client";
import Link from "next/link";
import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-base font-semibold">MyNeedfully.com</h3>
            <p className="text-sm text-muted-foreground">
              Helping people in crisis by connecting them with the community support they need.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Heart size={14} className="mr-1 text-primary" />
              <span>Made with care for those in need</span> 
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Food Baskets
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Essential Items
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <span>View All</span>
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Create a Wishlist
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Find Resources
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MyNeedfully.com. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
