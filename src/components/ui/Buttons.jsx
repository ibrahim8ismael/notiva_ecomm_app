import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-black text-white hover:bg-gray-800 active:bg-gray-900 shadow-md hover:shadow-lg transform transition-all duration-200",
    primary: "bg-black text-white hover:bg-gray-800 active:bg-gray-900 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200",
    secondary: "bg-white text-black border-2 border-black hover:bg-black hover:text-white active:bg-gray-900 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200",
    outline: "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white active:bg-gray-900 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200",
    ghost: "text-black hover:bg-gray-100 active:bg-gray-200 transition-all duration-200",
    link: "text-black underline-offset-4 hover:underline hover:text-gray-700 transition-colors duration-200",
    destructive: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200",
    success: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
  },
  size: {
    default: "h-11 px-6 py-2.5 text-sm",
    sm: "h-9 px-4 py-2 text-xs",
    lg: "h-13 px-8 py-3 text-base",
    xl: "h-15 px-10 py-4 text-lg",
    icon: "h-11 w-11 text-base"
  }
};

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  children,
  disabled,
  loading,
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:transform-none disabled:shadow-none cursor-pointer select-none";
  
  const variantClasses = buttonVariants.variant[variant];
  const sizeClasses = buttonVariants.size[size];
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses,
    sizeClasses,
    loading && "cursor-not-allowed opacity-70",
    className
  );

  if (asChild) {
    return React.cloneElement(children, {
      className: buttonClasses,
      ref,
      disabled: disabled || loading,
      ...props
    });
  }

  return (
    <button
      className={buttonClasses}
      ref={ref}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg 
          className="mr-2 h-4 w-4 animate-spin" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
});

Button.displayName = "Button";

// Individual button components for common use cases
export const PrimaryButton = ({ children, ...props }) => (
  <Button variant="primary" {...props}>
    {children}
  </Button>
);

export const SecondaryButton = ({ children, ...props }) => (
  <Button variant="secondary" {...props}>
    {children}
  </Button>
);

export const OutlineButton = ({ children, ...props }) => (
  <Button variant="outline" {...props}>
    {children}
  </Button>
);

export const DestructiveButton = ({ children, ...props }) => (
  <Button variant="destructive" {...props}>
    {children}
  </Button>
);

export const GhostButton = ({ children, ...props }) => (
  <Button variant="ghost" {...props}>
    {children}
  </Button>
);

export const LinkButton = ({ children, ...props }) => (
  <Button variant="link" {...props}>
    {children}
  </Button>
);

export const SuccessButton = ({ children, ...props }) => (
  <Button variant="success" {...props}>
    {children}
  </Button>
);

export const WarningButton = ({ children, ...props }) => (
  <Button variant="warning" {...props}>
    {children}
  </Button>
);

// Shopping-specific buttons for e-commerce
export const AddToCartButton = ({ children, ...props }) => (
  <Button variant="secondary" size="lg" {...props}>
    {children || "Add to Cart"}
  </Button>
);

export const BuyNowButton = ({ children, ...props }) => (
  <Button variant="primary" size="lg" {...props}>
    {children || "Buy Now"}
  </Button>
);

export const CheckoutButton = ({ children, ...props }) => (
  <Button variant="primary" size="lg" {...props}>
    {children || "Checkout"}
  </Button>
);

export default Button;
