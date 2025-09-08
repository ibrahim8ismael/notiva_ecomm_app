import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ 
  type = "text", 
  size = "md", 
  className,
  ...props 
}) => {
  const sizeClasses = {
    xs: "h-6",
    sm: "h-8", 
    md: "h-12",
    lg: "h-16",
    xl: "h-20",
    "2xl": "h-24"
  };

  // Dynamic width based on size
  const getWidth = () => {
    if (type === "icon") return 100;
    
    switch (size) {
      case "xs": return 80;
      case "sm": return 120;
      case "md": return 160;
      case "lg": return 200;
      case "xl": return 240;
      case "2xl": return 280;
      default: return 160;
    }
  };

  const logoSrc = type === "icon" ? "/logo.png" : "/logo-txt.png";
  const altText = type === "icon" ? "Notiva Logo" : "Notiva";
  
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Link href="/">
      <Image
        src={logoSrc}
        alt={altText}
        width={getWidth()}
        height={100}
        className={cn(
          "object-contain",
          sizeClasses[size]
        )}
        priority
      />
      </Link>
    </div>
  );
};

export default Logo;
