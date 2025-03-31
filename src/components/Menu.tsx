import React, { useState, useEffect, useRef } from 'react';
import { Container, IconButton, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Menu as MenuType } from '../types/menu';
import { MenuCategory } from './MenuCategory';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuProps {
  menu: MenuType;
}

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCategory, setVisibleCategory] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const visibleEntriesRef = useRef<Map<string, number>>(new Map());
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    setVisibleCategory(categoryId);
  };

  // Function to scroll to category
  const scrollToCategory = (categoryId: string) => {
    const element = document.querySelector(`[data-category-id="${categoryId}"]`);
    if (element) {
      // Disable intersection observer updates during programmatic scroll
      isScrollingRef.current = true;
      setVisibleCategory(categoryId); // Set the target category immediately

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Re-enable intersection observer after scroll animation (roughly 1 second)
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  // Set up intersection observer to track visible categories
  useEffect(() => {
    if (!selectedCategory) {
      const options = {
        root: document.querySelector('.menu-scroll-box'),
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };

      const callback: IntersectionObserverCallback = (entries) => {
        // Skip updates if we're programmatically scrolling
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
        visibleEntriesRef.current.clear();
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [selectedCategory, menu.categories]);

  // Reset scroll position when category changes
  useEffect(() => {
    const scrollBox = document.querySelector('.menu-scroll-box');
    if (scrollBox) {
      scrollBox.scrollTop = 0;
    }
  }, [selectedCategory]);

  // Function to scroll nav to highlighted category
  const scrollNavToCategory = (categoryId: string) => {
    const navContainer = navRef.current;
    const navItem = navContainer?.querySelector(`[data-nav-id="${categoryId}"]`);
    
    if (navContainer && navItem) {
      const containerWidth = navContainer.offsetWidth;
      const itemLeft = (navItem as HTMLElement).offsetLeft;
      const itemWidth = (navItem as HTMLElement).offsetWidth;
      
      // Calculate scroll position to center the item
      const scrollPosition = itemLeft - (containerWidth / 2) + (itemWidth / 2);
      
      navContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update nav scroll when visible/selected category changes
  useEffect(() => {
    const currentCategory = selectedCategory || visibleCategory;
    if (currentCategory) {
      scrollNavToCategory(currentCategory);
    }
  }, [selectedCategory, visibleCategory]);

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
        backgroundColor: '#fff'
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
          color: '#1a237e',
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
            backgroundColor: 'white',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
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
              backgroundColor: '#1a237e',
              borderRadius: '4px'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f5f5f5'
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
                  ? '#1a237e' 
                  : 'transparent',
                color: (selectedCategory === category.id || (!selectedCategory && visibleCategory === category.id)) 
                  ? 'white' 
                  : '#1a237e',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                fontWeight: 600,
                fontSize: '0.9rem',
                '&:hover': {
                  backgroundColor: (selectedCategory === category.id || (!selectedCategory && visibleCategory === category.id)) 
                    ? '#1a237e' 
                    : 'rgba(26, 35, 126, 0.1)'
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
              background: '#f1f1f1'
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '3px',
              '&:hover': {
                background: '#555'
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
              pb: selectedCategory ? 0 : '80px' // Add padding at bottom when not in selected mode
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