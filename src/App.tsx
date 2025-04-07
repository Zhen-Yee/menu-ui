import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, CssBaseline, createTheme, CircularProgress, Box, Typography } from '@mui/material';
import { Menu } from './components/Menu';
import { menuData } from './data/menuData';
import { mockThemeResponse, RestaurantTheme, classicTheme } from './themes/themes';
import '@fontsource/archivo-black/400.css';
import '@fontsource/satisfy/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

function App() {
  const [themeOptions, setThemeOptions] = useState<RestaurantTheme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        setLoading(true);
        setError(null);

        // In a real app, this would come from your route params or environment
        const restaurantId = 'italian-bistro'; // Try 'rustic-tavern' or any other value for different themes
        const themeData = await mockThemeResponse(restaurantId);
        setThemeOptions(themeData);
      } catch (err: any) {
        console.error("Error fetching theme:", err);
        setError(err.message || 'Could not load theme configuration.');
        setThemeOptions(classicTheme); // Fallback to classic theme
      } finally {
        setLoading(false);
      }
    };

    fetchTheme();
  }, []);

  // Create the theme dynamically once options are loaded
  const theme = useMemo(() => {
    const options = themeOptions || classicTheme;
    
    try {
      return createTheme({
        ...options,
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                backgroundColor: options.palette?.background?.default || '#ffffff',
                backgroundImage: 'none'
              }
            }
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                borderRadius: options.shape?.borderRadius || 8
              }
            }
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: options.shape?.borderRadius || 8,
                textTransform: 'none'
              }
            }
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                borderRadius: (options.shape?.borderRadius || 8) * 2
              }
            }
          }
        }
      });
    } catch (err) {
      console.error("Error creating theme:", err);
      return createTheme(classicTheme);
    }
  }, [themeOptions]);

  if (loading && !themeOptions) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {error && (
        <Box sx={{ p: 1, backgroundColor: 'error.light', color: 'error.contrastText', textAlign: 'center' }}>
          <Typography variant="caption">Warning: Using fallback theme. {error}</Typography>
        </Box>
      )}
      <Menu menu={menuData} />
    </ThemeProvider>
  );
}

export default App;
