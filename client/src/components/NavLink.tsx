import { Link, useLocation } from "wouter";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const [location] = useLocation();
    const isActive = location === href;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
