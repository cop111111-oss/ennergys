
export interface SiteSettings {
  brandName: string;
  primaryColor: string;
  fontFamily: string;
  heroTitle: string;
  heroSubtitle: string;
}

export interface Post {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface NavItem {
  label: string;
  path: string;
}
