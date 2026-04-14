import type { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => {
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
