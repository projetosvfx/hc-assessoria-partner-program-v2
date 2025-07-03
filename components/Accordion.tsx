
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { cn } from '../utils/cn';
import { ChevronDownIcon } from './icons/ChevronDownIcon'; // Assuming you'll create this

interface AccordionContextProps {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

interface AccordionProps {
  children: ReactNode;
  type?: 'single' | 'multiple'; // 'single' implies collapsible by default here
  collapsible?: boolean; // For single type, means it can be fully closed
  className?: string;
  defaultValue?: string; // For single type
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = 'single',
  collapsible = true,
  className,
  defaultValue,
}) => {
  const [openItem, setOpenItem] = useState<string | null>(defaultValue || null);

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItem((prev) => (prev === value && collapsible ? null : value));
    }
    // Implement 'multiple' if needed
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={cn(className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  children: ReactNode;
  value: string;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, value, className }) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }
  // The item itself doesn't need to know if it's open, children (Trigger, Content) will use context
  return <div className={cn('border-b', className)} data-value={value}>{children}</div>;
};

interface AccordionTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className, ...props }) => {
  const context = useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext); // Get value from parent AccordionItem

  if (!context || !itemContext) {
    throw new Error('AccordionTrigger must be used within an AccordionItem');
  }

  const isOpen = context.openItem === itemContext.value;

  return (
    <button
      type="button"
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
      onClick={() => context.toggleItem(itemContext.value)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
};

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, className, ...props }) => {
  const context = useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);

  if (!context || !itemContext) {
    throw new Error('AccordionContent must be used within an AccordionItem');
  }

  const isOpen = context.openItem === itemContext.value;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', className)}
      data-state={isOpen ? 'open' : 'closed'}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};


// Helper context to pass value from AccordionItem to Trigger/Content
interface AccordionItemContextProps {
  value: string;
}
const AccordionItemContext = createContext<AccordionItemContextProps | undefined>(undefined);

// Revised AccordionItem to provide its value via context
export const AccordionItemProvider: React.FC<AccordionItemProps> = ({ children, value, className }) => {
  return (
    <AccordionItemContext.Provider value={{value}}>
      <div className={cn('border-b last:border-b-0', className)} data-value={value}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

