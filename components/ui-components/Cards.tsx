
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  link?: string;
  children?: ReactNode;
  className?: string;
  glassmorphism?: boolean;
  hover?: boolean;
  external?: boolean;
}

const Card = ({
  title,
  subtitle,
  image,
  link,
  children,
  className,
  glassmorphism = false,
  hover = true,
  external = false,
}: CardProps) => {
  const CardComponent = motion.div;
  
  const content = (
    <CardComponent
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={cn(
        "rounded-xl overflow-hidden border border-border transition-all duration-300",
        hover && "hover:shadow-hover",
        glassmorphism ? "glass-card" : "bg-card",
        className
      )}
    >
      {image && (
        <div className="w-full aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title || "Card image"}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-medium mb-2">{title}</h3>}
        {subtitle && <p className="text-muted-foreground mb-4">{subtitle}</p>}
        {children}
      </div>
    </CardComponent>
  );

  if (link) {
    if (external) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group">
          {content}
        </a>
      );
    }
    return (
      <Link href={link} className="group">
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
