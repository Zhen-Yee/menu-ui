import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, IconButton, Box, Typography, useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Menu as MenuType } from '../types/menu';
import { MenuCategory } from './MenuCategory';
import { motion, AnimatePresence } from 'framer-motion';
import { RestaurantTheme } from '../themes/themes';

interface MenuProps {
  menu: MenuType;
}

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const theme = useTheme() as RestaurantTheme & Theme;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCategory, setVisibleCategory] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const visibleEntriesRef = useRef<Map<string, number>>(new Map());
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCategoryClick = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    setVisibleCategory(categoryId);
  }, [selectedCategory]);

  // Function to scroll to category
  const scrollToCategory = useCallback((categoryId: string) => {
    const element = document.querySelector(`[data-category-id="${categoryId}"]`);
    if (element) {
      isScrollingRef.current = true;
      setVisibleCategory(categoryId);

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  }, []);

  // Function to scroll nav to highlighted category
  const scrollNavToCategory = useCallback((categoryId: string) => {
    const navContainer = navRef.current;
    const navItem = navContainer?.querySelector(`[data-nav-id="${categoryId}"]`);
    
    if (navContainer && navItem) {
      const containerWidth = navContainer.offsetWidth;
      const itemLeft = (navItem as HTMLElement).offsetLeft;
      const itemWidth = (navItem as HTMLElement).offsetWidth;
      const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      navContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Set up intersection observer to track visible categories
  useEffect(() => {
    if (!selectedCategory) {
      const options = {
        root: document.querySelector('.menu-scroll-box'),
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };

      const visibleEntries = visibleEntriesRef.current;

      const callback: IntersectionObserverCallback = (entries) => {
        if (isScrollingRef.current) return;

        entries.forEach(entry => {
          const categoryId = entry.target.getAttribute('data-category-id');
          if (categoryId) {
            if (entry.isIntersecting) {
              visibleEntriesRef.current.set(categoryId, entry.intersectionRatio);
            } else {
              visibleEntriesRef.current.delete(categoryId);
            }
          }
        });

        let maxRatio = 0;
        let mostVisibleCategory = null;
        visibleEntriesRef.current.forEach((ratio, categoryId) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleCategory = categoryId;
          }
        });

        if (mostVisibleCategory && mostVisibleCategory !== visibleCategory) {
          setVisibleCategory(mostVisibleCategory);
        }
      };

      observerRef.current = new IntersectionObserver(callback, options);

      document.querySelectorAll('[data-category-id]').forEach(element => {
        observerRef.current?.observe(element);
      });

      const scrollBox = document.querySelector('.menu-scroll-box');
      if (scrollBox && scrollBox.scrollTop === 0) {
        setVisibleCategory(menu.categories[0].id);
      }

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
        if (visibleEntries) {
          visibleEntries.clear();
        }
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [selectedCategory, menu.categories, visibleCategory]);

  // Reset scroll position when category changes
  useEffect(() => {
    const scrollBox = document.querySelector('.menu-scroll-box');
    if (scrollBox) {
      scrollBox.scrollTop = 0;
    }
  }, [selectedCategory]);

  // Update nav scroll when visible/selected category changes
  useEffect(() => {
    const currentCategory = selectedCategory || visibleCategory;
    if (currentCategory) {
      scrollNavToCategory(currentCategory);
    }
  }, [selectedCategory, visibleCategory, scrollNavToCategory]);

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        py: 2,
        px: { xs: 2, sm: 3 },
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: theme.customProperties.menuHeaderBg
      }}
    >
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <IconButton
              onClick={() => setSelectedCategory(null)}
              sx={{ 
                mb: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }
              }}
              aria-label="back"
            >
              <ArrowBackIcon />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>

      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 700,
          letterSpacing: '0.15em',
          color: theme.palette.primary.main,
          fontSize: { xs: '1.75rem', sm: '2.25rem' },
          textTransform: 'uppercase'
        }}
      >
        NOS DÉJEUNERS
      </Typography>
      
      <Box sx={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Category Navigation Header */}
        <Box 
          ref={navRef}
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            backgroundColor: theme.customProperties.menuHeaderBg,
            borderBottom: `1px solid ${theme.palette.divider}`,
            px: 2,
            py: 1.5,
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            flexShrink: 0,
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              height: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.customProperties.scrollbarThumbColor,
              borderRadius: '4px'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme.customProperties.scrollbarTrackColor
            }
          }}
        >
          {menu.categories.map((category, index) => (
            <Box
              key={index}
              data-nav-id={category.id}
              onClick={() => {
                if (!selectedCategory) {
                  scrollToCategory(category.id);
                  setVisibleCategory(category.id);
                } else {
                  setSelectedCategory(category.id);
                }
              }}
              sx={{
                cursor: 'pointer',
                px: 2,
                py: 1,
                borderRadius: '20px',
                backgroundColor: (selectedCategory === category.id || (!selectedCategory && visibleCategory === category.id)) 
                  ? theme.customProperties.navigationPillActiveBg
                  : theme.customProperties.navigationPillBg,
                color: (selectedCategory === category.id || (!selectedCategory && visibleCategory === category.id)) 
                  ? '#fff'
                  : theme.palette.primary.main,
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                fontWeight: 600,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: (selectedCategory === category.id || (!selectedCategory && visibleCategory === category.id)) 
                    ? theme.customProperties.navigationPillActiveBg
                    : theme.customProperties.navigationPillBg
                }
              }}
            >
              {category.title}
            </Box>
          ))}
        </Box>

        {/* Menu Content */}
        <Box 
          className="menu-scroll-box"
          sx={{ 
            flex: 1,
            overflowY: 'auto',
            px: { xs: 0, sm: 1 },
            mx: -1,
            pb: 2,
            position: 'relative',
            height: '100%',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              width: '6px'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme.customProperties.scrollbarTrackColor
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.customProperties.scrollbarThumbColor,
              borderRadius: '3px',
              '&:hover': {
                backgroundColor: theme.customProperties.scrollbarThumbColor
              }
            }
          }}
        >
          <Box 
            sx={{
              display: 'grid',
              gridTemplateColumns: selectedCategory
                ? '1fr'
                : {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)'
                  },
              gap: 3,
              width: '100%',
              height: selectedCategory ? '100%' : 'fit-content',
              transition: 'all 0.3s ease',
              position: 'relative',
              pb: selectedCategory ? 0 : '80px'
            }}
          >
            {menu.categories.map((category, index) => (
              <MenuCategory
                key={category.id}
                category={category}
                isSelected={category.id === selectedCategory}
                isExpanded={!!selectedCategory && category.id !== selectedCategory}
                onClick={() => handleCategoryClick(category.id)}
                index={index}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}; 