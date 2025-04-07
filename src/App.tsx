import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, CssBaseline, createTheme, CircularProgress, Box, Typography } from '@mui/material';
import { Menu } from './components/Menu';
import { menuData } from './data/menuData';
import { fetchTheme, RestaurantTheme, defaultTheme } from './themes/defaultTheme';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

function App() {
  const [themeOptions, setThemeOptions] = useState<RestaurantTheme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTheme = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // In a real app, you might get this from your route or environment
        const themeId = 'default';
        const themeData = await fetchTheme(themeId);
        setThemeOptions(themeData);
      } catch (err: any) {
        console.error("Error fetching theme:", err);
        setError(err.message || 'Could not load theme configuration.');
        // Use default theme as fallback
        setThemeOptions(defaultTheme);
      } finally {
        setLoading(false);
      }
    };

    getTheme();
  }, []);

  // Create the theme dynamically once options are loaded
  const theme = useMemo(() => {
    const options = themeOptions || defaultTheme;
    
    try {
      return createTheme(options);
    } catch (err) {
      console.error("Error creating theme:", err);
      return createTheme(defaultTheme);
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
