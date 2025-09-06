import * as React from "react";
import { cn } from "@/lib/utils";

const linkVariants = {
  variant: {
    default: "text-gray-600 hover:text-gray-900 hover:underline underline-offset-4 transition-all duration-200",
    primary: "text-black hover:text-gray-700 hover:underline underline-offset-4 transition-all duration-200",
    secondary: "text-gray-500 hover:text-black hover:underline underline-offset-4 transition-all duration-200",
    underline: "text-black underline underline-offset-4 hover:text-gray-700 transition-all duration-200",
    muted: "text-gray-400 hover:text-gray-600 hover:underline underline-offset-4 transition-all duration-200"
  },
  size: {
    default: "text-sm",
    sm: "text-xs",
    lg: "text-base",
    xl: "text-lg"
  }
};

const Link = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  href,
  children,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center font-medium cursor-pointer select-none";
  
  const variantClasses = linkVariants.variant[variant];
  const sizeClasses = linkVariants.size[size];
  
  const linkClasses = cn(
    baseClasses,
    variantClasses,
    sizeClasses,
    className
  );

  return (
    <a
      href={href}
      className={linkClasses}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";

// Pre-built link variants for common use cases
export const NavLink = ({ children, ...props }) => (
  <Link variant="default" {...props}>
    {children}
  </Link>
);

export const FooterLink = ({ children, ...props }) => (
  <Link variant="default" {...props}>
    {children}
  </Link>
);

export const UnderlineLink = ({ children, ...props }) => (
  <Link variant="underline" {...props}>
    {children}
  </Link>
);

export const MutedLink = ({ children, ...props }) => (
  <Link variant="muted" {...props}>
    {children}
  </Link>
);

export default Link;
