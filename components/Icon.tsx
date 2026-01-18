import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Linkedin, 
  Award, 
  CheckCircle, 
  MessageSquare,
  X,
  Send,
  Download,
  Menu,
  ChevronRight,
  Sun,
  Moon,
  Globe,
  FileText,
  ExternalLink
} from 'lucide-react';

export const Icons = {
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Linkedin,
  Award,
  CheckCircle,
  MessageSquare,
  X,
  Send,
  Download,
  Menu,
  ChevronRight,
  Sun,
  Moon,
  Globe,
  FileText,
  ExternalLink
};

interface IconProps {
  name: keyof typeof Icons;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size = 20 }) => {
  const LucideIcon = Icons[name];
  return <LucideIcon className={className} size={size} />;
};

export default Icon;