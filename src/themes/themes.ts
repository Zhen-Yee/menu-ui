import { ThemeOptions } from '@mui/material/styles';

export interface RestaurantTheme extends ThemeOptions {
  name: string;
  description: string;
  customProperties: {
    menuHeaderBg: string;
    categoryCardBg: string;
    categoryHoverBg: string;
    itemCardBg: string;
    navigationPillBg: string;
    navigationPillActiveBg: string;
    scrollbarThumbColor: string;
    scrollbarTrackColor: string;
  };
}

export const classicTheme: RestaurantTheme = {
  name: 'Classic',
  description: 'An elegant and timeless design with navy accents',
  palette: {
    mode: 'light',
    primary: { main: '#1a237e', light: '#534bae', dark: '#000051' },
    secondary: { main: '#666666', light: '#999999', dark: '#333333' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#333333', secondary: '#666666' },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { 
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: '0.1em'
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: '0.15em'
    },
    h6: { 
      fontWeight: 600,
      letterSpacing: '0.05em'
    }
  },
  customProperties: {
    menuHeaderBg: '#ffffff',
    categoryCardBg: 'rgba(255, 255, 255, 0.98)',
    categoryHoverBg: 'rgba(255, 255, 255, 1)',
    itemCardBg: '#ffffff',
    navigationPillBg: 'transparent',
    navigationPillActiveBg: '#1a237e',
    scrollbarThumbColor: '#1a237e',
    scrollbarTrackColor: '#f5f5f5'
  },
  shape: {
    borderRadius: 8
  }
};

export const modernTheme: RestaurantTheme = {
  name: 'Modern',
  description: 'A sleek and minimalist design with bold accents',
  palette: {
    mode: 'light',
    primary: { main: '#000000', light: '#333333', dark: '#000000' },
    secondary: { main: '#ff4081', light: '#ff79b0', dark: '#c60055' },
    background: { default: '#f8f9fa', paper: '#ffffff' },
    text: { primary: '#000000', secondary: '#666666' },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { 
      fontFamily: '"Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '0'
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em'
    },
    h6: { 
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  },
  customProperties: {
    menuHeaderBg: '#ffffff',
    categoryCardBg: '#ffffff',
    categoryHoverBg: '#ffffff',
    itemCardBg: '#ffffff',
    navigationPillBg: '#f0f0f0',
    navigationPillActiveBg: '#000000',
    scrollbarThumbColor: '#000000',
    scrollbarTrackColor: '#f0f0f0'
  },
  shape: {
    borderRadius: 16
  }
};

export const rusticTheme: RestaurantTheme = {
  name: 'Rustic',
  description: 'A warm and inviting design with earthy tones',
  palette: {
    mode: 'light',
    primary: { main: '#5d4037', light: '#8b6b61', dark: '#321911' },
    secondary: { main: '#a1887f', light: '#d3b8ae', dark: '#725b53' },
    background: { default: '#f5e6d3', paper: '#ffffff' },
    text: { primary: '#2d1810', secondary: '#5d4037' },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { 
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: '0.05em'
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: '0.1em'
    },
    h6: { 
      fontWeight: 600,
      letterSpacing: '0.02em'
    }
  },
  customProperties: {
    menuHeaderBg: 'rgba(255, 255, 255, 0.8)',
    categoryCardBg: 'rgba(255, 255, 255, 0.9)',
    categoryHoverBg: '#ffffff',
    itemCardBg: '#ffffff',
    navigationPillBg: 'rgba(93, 64, 55, 0.1)',
    navigationPillActiveBg: '#5d4037',
    scrollbarThumbColor: '#5d4037',
    scrollbarTrackColor: '#f5e6d3'
  },
  shape: {
    borderRadius: 4
  }
};

export const italianBistroTheme: RestaurantTheme = {
  name: 'Italian Bistro',
  description: 'A warm and inviting design inspired by vintage Italian menus',
  palette: {
    mode: 'light',
    primary: { main: '#FF6B5B', light: '#FF8C7F', dark: '#D84B3B' }, // Adjusted coral color from menu
    secondary: { main: '#3D322F', light: '#5E4F4B', dark: '#2A211F' }, // Darker brown from drinks section
    background: { default: '#FFF1EA', paper: '#FFFFFF' }, // Warmer beige background
    text: { primary: '#3D322F', secondary: '#666666' },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { 
      fontFamily: '"Archivo Black", sans-serif', // More accurate to menu title font
      fontWeight: 900,
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    },
    h2: {
      fontFamily: '"Archivo Black", sans-serif',
      fontWeight: 900,
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    },
    h4: {
      fontFamily: '"Satisfy", cursive', // Script font for section titles
      fontWeight: 400,
      letterSpacing: '0.02em',
      fontSize: '2rem'
    },
    h6: { 
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em'
    },
    subtitle1: {
      fontFamily: '"Inter", sans-serif',
      fontStyle: 'italic'
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.95rem',
      lineHeight: 1.6
    }
  },
  customProperties: {
    menuHeaderBg: '#FFF1EA', // Warmer beige background
    categoryCardBg: '#FF6B5B', // Coral color for special sections
    categoryHoverBg: '#FF8C7F', // Lighter coral on hover
    itemCardBg: '#FFFFFF',
    navigationPillBg: 'rgba(255, 107, 91, 0.1)', // Transparent coral
    navigationPillActiveBg: '#FF6B5B', // Coral
    scrollbarThumbColor: '#FF6B5B', // Coral
    scrollbarTrackColor: '#FFF1EA' // Beige
  },
  shape: {
    borderRadius: 0 // Square corners like in the menu
  }
};

// Mock API response
export const mockThemeResponse = (restaurantId: string): Promise<RestaurantTheme> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (restaurantId) {
        case 'modern-bistro':
          resolve(modernTheme);
          break;
        case 'rustic-tavern':
          resolve(rusticTheme);
          break;
        case 'italian-bistro':
          resolve(italianBistroTheme);
          break;
        default:
          resolve(classicTheme);
      }
    }, 500);
  });
}; 