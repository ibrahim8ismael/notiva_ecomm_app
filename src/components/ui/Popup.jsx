import * as React from "react";
import { cn } from "@/lib/utils";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import Button from "./Buttons";

const popupVariants = {
  variant: {
    default: "bg-white border-gray-200 text-gray-900",
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    dark: "bg-gray-900 border-gray-700 text-white"
  },
  size: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl"
  }
};

const getIcon = (variant) => {
  const iconProps = { className: "w-5 h-5 flex-shrink-0" };
  
  switch (variant) {
    case "success":
      return <CheckCircle {...iconProps} className="w-5 h-5 flex-shrink-0 text-green-600" />;
    case "error":
      return <AlertCircle {...iconProps} className="w-5 h-5 flex-shrink-0 text-red-600" />;
    case "warning":
      return <AlertTriangle {...iconProps} className="w-5 h-5 flex-shrink-0 text-yellow-600" />;
    case "info":
      return <Info {...iconProps} className="w-5 h-5 flex-shrink-0 text-blue-600" />;
    default:
      return null;
  }
};

const Popup = React.forwardRef(({
  className,
  variant = "default",
  size = "md",
  title,
  message,
  children,
  showIcon = true,
  showCloseButton = true,
  isOpen = false,
  onClose,
  actions,
  ...props
}, ref) => {
  if (!isOpen) return null;

  const variantClasses = popupVariants.variant[variant];
  const sizeClasses = popupVariants.size[size];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/20 backdrop-blur-md">
      <div
        ref={ref}
        className={cn(
          "relative w-full rounded-2xl border shadow-xl",
          "animate-in fade-in-0 zoom-in-95 duration-200",
          variantClasses,
          sizeClasses,
          className
        )}
        {...props}
      >
        {/* Close Button */}
        {showCloseButton && onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="p-6">
          {/* Header with Icon and Title */}
          {(showIcon || title) && (
            <div className="flex items-start gap-3 mb-4">
              {showIcon && getIcon(variant)}
              {title && (
                <h3 className="text-lg font-semibold leading-6">
                  {title}
                </h3>
              )}
            </div>
          )}

          {/* Message */}
          {message && (
            <div className={cn("mb-4", showIcon || title ? "ml-8" : "")}>
              <p className="text-sm leading-relaxed">
                {message}
              </p>
            </div>
          )}

          {/* Custom Content */}
          {children && (
            <div className={cn("mb-4", showIcon || title ? "ml-8" : "")}>
              {children}
            </div>
          )}

          {/* Actions */}
          {actions && (
            <div className={cn("flex gap-3 justify-end", showIcon || title ? "ml-8" : "")}>
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

Popup.displayName = "Popup";

// Pre-built popup variants
export const SuccessPopup = ({ title = "Success!", message, onClose, ...props }) => (
  <Popup 
    variant="success" 
    title={title} 
    message={message} 
    onClose={onClose}
    actions={
      <Button variant="primary" size="sm" onClick={onClose}>
        OK
      </Button>
    }
    {...props} 
  />
);

export const ErrorPopup = ({ title = "Error", message, onClose, ...props }) => (
  <Popup 
    variant="error" 
    title={title} 
    message={message} 
    onClose={onClose}
    actions={
      <Button variant="primary" size="sm" onClick={onClose}>
        OK
      </Button>
    }
    {...props} 
  />
);

export const WarningPopup = ({ title = "Warning", message, onClose, ...props }) => (
  <Popup 
    variant="warning" 
    title={title} 
    message={message} 
    onClose={onClose}
    actions={
      <Button variant="primary" size="sm" onClick={onClose}>
        OK
      </Button>
    }
    {...props} 
  />
);

export const InfoPopup = ({ title = "Information", message, onClose, ...props }) => (
  <Popup 
    variant="info" 
    title={title} 
    message={message} 
    onClose={onClose}
    actions={
      <Button variant="primary" size="sm" onClick={onClose}>
        OK
      </Button>
    }
    {...props} 
  />
);

export const ConfirmPopup = ({ 
  title = "Confirm Action", 
  message, 
  onConfirm, 
  onCancel, 
  confirmText = "Confirm",
  cancelText = "Cancel",
  ...props 
}) => (
  <Popup
    variant="default"
    title={title}
    message={message}
    actions={
      <>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button variant="primary" size="sm" onClick={onConfirm}>
          {confirmText}
        </Button>
      </>
    }
    {...props}
  />
);

export const DeleteConfirmPopup = ({ 
  title = "Delete Item", 
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  onConfirm, 
  onCancel,
  itemName,
  ...props 
}) => (
  <Popup
    variant="error"
    title={title}
    message={itemName ? `Are you sure you want to delete "${itemName}"? This action cannot be undone.` : message}
    actions={
      <>
        <Button variant="ghost" size="sm" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="destructive" size="sm" onClick={onConfirm}>
          Delete
        </Button>
      </>
    }
    {...props}
  />
);

export default Popup;
