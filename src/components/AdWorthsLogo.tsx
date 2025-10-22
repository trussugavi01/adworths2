import React from 'react';
type AdWorthsLogoProps = {
  variant?: 'color' | 'white';
  className?: string;
};
export const AdWorthsLogo = ({ variant = 'color', className }: AdWorthsLogoProps) => {
  const colorLogoSrc = "https://adworths.ng/wp-content/uploads/2025/10/logo-default.png";
  const whiteLogoSrc = "https://adworths.ng/wp-content/uploads/2024/04/Adworths-Logo-White-1.png";
  const src = variant === 'white' ? whiteLogoSrc : colorLogoSrc;
  return (
    <img
      src={src}
      alt="AdWorths Advertising Limited Logo"
      className={`h-10 w-auto ${className}`}
    />
  );
};