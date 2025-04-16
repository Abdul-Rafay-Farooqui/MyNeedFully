
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
  background?: "light" | "secondary";
}

const FeaturedSection = ({
  title,
  subtitle,
  children,
  className,
  centered = false,
  background = "light",
}: FeaturedSectionProps) => {
  return (
    <section
      className={cn(
        "page-section",
        background === "secondary" ? "bg-secondary" : "bg-background",
        className
      )}
    >
      <div className="container">
        <div className={cn("mb-10 md:mb-16", centered && "text-center")}>
          <h2 className="animate-slide-in">{title}</h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl animate-slide-in animation-delay-100">
              {subtitle}
            </p>
          )}
        </div>
        <div className="animate-slide-in animation-delay-200">{children}</div>
      </div>
    </section>
  );
};

export default FeaturedSection;
