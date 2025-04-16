
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  background?: "light" | "gradient" | "image";
  imageUrl?: string;
  aligned?: "center" | "left";
  size?: "small" | "medium" | "large";
}

const Hero = ({
  title,
  subtitle,
  children,
  className,
  background = "light",
  imageUrl,
  aligned = "center",
  size = "medium",
}: HeroProps) => {
  const sizeClasses = {
    small: "py-12 md:py-16",
    medium: "py-16 md:py-24",
    large: "py-20 md:py-32",
  };

  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  const getBackground = () => {
    switch (background) {
      case "gradient":
        return "bg-gradient-to-b from-background to-secondary";
      case "image":
        return "relative bg-gray-900 text-white";
      default:
        return "bg-background";
    }
  };

  return (
    <section
      className={cn(
        "relative w-full flex flex-col justify-center",
        getBackground(),
        sizeClasses[size],
        className
      )}
    >
      {background === "image" && imageUrl && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center animate-image-fade-in"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <div className={cn("container relative z-10 flex flex-col", alignmentClasses[aligned])}>
        <h1 className={cn("animate-slide-in", aligned === "center" ? "mx-auto max-w-4xl" : "max-w-2xl")}>{title}</h1>
        
        {subtitle && (
          <p className={cn(
            "text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in animation-delay-100",
            aligned === "center" ? "mx-auto max-w-3xl" : "max-w-2xl"
          )}>
            {subtitle}
          </p>
        )}
        
        {children && (
          <div className={cn("animate-slide-in animation-delay-200", aligned === "center" ? "mx-auto" : "")}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
