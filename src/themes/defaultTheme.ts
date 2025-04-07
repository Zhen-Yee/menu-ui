import { ThemeOptions, Theme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export interface RestaurantTheme extends ThemeOptions {
  name: string;
  description: string;
  palette: {
    mode?: PaletteMode;
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      default: string;
      paper: string;
    };
    error: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  };
  shape: {
    borderRadius: number;
  };
  customProperties: {
    // Header
    menuHeaderBg: string;
    
    // Navigation
    navigationPillBg: string;
    navigationPillActiveBg: string;
    navigationPillActiveText: string;
    navigationPillText: string;
    
    // Category Cards
    categoryCardBg: string;
    categoryHoverBg: string;
    categoryHoverShadow: string;
    categoryHoverTransform: string;
    categoryTitleColor: string;
    categoryTitleHoverColor: string;
    categorySubtitleColor: string;
    
    // Items
    itemCardBg: string;
    itemNameColor: string;
    itemPriceColor: string;
    itemDescriptionColor: string;
    
    // Scrollbars
    scrollbarWidth: string;
    scrollbarThumbColor: string;
    scrollbarTrackColor: string;
    
    // Modals & Dialogs
    modalBg: string;
    modalButtonBg: string;
    modalButtonHoverBg: string;
    
    // Transitions
    defaultTransition: string;
    
    // Border Radius - Precisely matching the original values
    borderRadiusBase: string; // For cards
    borderRadiusDialog: string; // For dialogs
    borderRadiusPills: string; // For navigation pills
    borderRadiusScrollbar: string; // For scrollbars
    borderRadiusImage: string; // For images
    borderRadiusImageThumbnail: string; // For thumbnails
  };
}

// Create a type that combines RestaurantTheme and Theme
export type RestaurantThemeWithBase = RestaurantTheme & Theme;

export const defaultTheme: RestaurantTheme = {
  name: "Default",
  description: "The default theme for the restaurant menu",
  palette: {
    mode: 'light',
    primary: {
      main: '#1a237e', // The deep blue color used throughout
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#ff5983',
      dark: '#bb002f',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: 'rgba(255, 255, 255, 0.98)',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontSize: '2.25rem',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      fontSize: '1.2rem',
    },
    body1: {
      fontSize: '0.95rem',
    },
    body2: {
      fontSize: '0.85rem',
      color: '#666',
    },
    caption: {
      fontSize: '0.85rem',
      fontStyle: 'italic',
      color: '#666',
    },
  },
  shape: {
    borderRadius: 8,
  },
  customProperties: {
    // Header
    menuHeaderBg: '#ffffff',
    
    // Navigation
    navigationPillBg: 'transparent',
    navigationPillActiveBg: '#1a237e',
    navigationPillActiveText: '#ffffff',
    navigationPillText: '#1a237e',
    
    // Category Cards
    categoryCardBg: 'rgba(255, 255, 255, 0.98)',
    categoryHoverBg: 'rgba(255, 255, 255, 1)',
    categoryHoverShadow: '0 6px 12px rgba(0,0,0,0.15)',
    categoryHoverTransform: 'translateY(-4px)',
    categoryTitleColor: '#000000',
    categoryTitleHoverColor: '#1a237e',
    categorySubtitleColor: '#666666',
    
    // Items
    itemCardBg: '#ffffff',
    itemNameColor: '#000000',
    itemPriceColor: '#1a237e',
    itemDescriptionColor: '#666666',
    
    // Scrollbars
    scrollbarWidth: '6px',
    scrollbarThumbColor: '#1a237e',
    scrollbarTrackColor: '#f5f5f5',
    
    // Modals & Dialogs
    modalBg: '#ffffff',
    modalButtonBg: 'rgba(255, 255, 255, 0.8)',
    modalButtonHoverBg: 'rgba(255, 255, 255, 0.9)',
    
    // Transitions
    defaultTransition: 'all 0.3s ease',
    
    // Border Radius - Precisely matching the original values
    borderRadiusBase: '8px',
    borderRadiusDialog: '16px',
    borderRadiusPills: '20px',
    borderRadiusScrollbar: '4px',
    borderRadiusImage: '8px',
    borderRadiusImageThumbnail: '4px',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
          backgroundImage: 'none',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 8,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        }
      }
    },
  }
};

// Mock API function to simulate fetching theme
export const fetchTheme = (themeId: string = 'default'): Promise<RestaurantTheme> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // In a real app, this would fetch from an API
      // and possibly have different themes based on themeId
      resolve(defaultTheme);
    }, 500);
  });
}; 