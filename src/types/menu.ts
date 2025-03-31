export interface MenuItem {
  name: string;
  price: string;
  description: string;
  ingredients?: string[];
  image?: string;
  additionalImages?: string[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface Menu {
  categories: MenuCategory[];
} 