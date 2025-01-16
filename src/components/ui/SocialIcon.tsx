import React from "react";

interface SocialIconProps {
  href: string;
  icon: JSX.Element | string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
    >
      <span className="sr-only">{icon}</span>
      {/* Add your social icons here */}
    </a>
  );
};

export default SocialIcon;
