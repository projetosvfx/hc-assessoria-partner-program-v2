
import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
    icon: 'h-10 w-10',
  };
  
  // Custom HC styles from the original code take precedence if provided in className
  // The className prop will often contain specific HC styles like 'bg-gradient-to-r from-[#c8a743] ...'
  // So, we apply baseStyles and only apply default variant/size if not overridden by specific HC styles in className.
  
  let appliedVariantStyle = variantStyles[variant];
  if (className && (className.includes('bg-') || className.includes('border-'))) {
    appliedVariantStyle = ''; // Don't apply default bg/border if className has them
  }
  
  let appliedSizeStyle = sizeStyles[size];
   if (className && (className.includes('px-') || className.includes('py-') || className.includes('h-') || className.includes('w-'))) {
    appliedSizeStyle = ''; // Don't apply default padding/sizing if className has them
  }


  return (
    <button
      className={cn(baseStyles, appliedVariantStyle, appliedSizeStyle, className)}
      {...props}
    >
      {children}
    </button>
  );
};
