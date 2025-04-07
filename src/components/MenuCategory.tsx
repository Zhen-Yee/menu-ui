import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Paper, useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MenuCategory as MenuCategoryType } from '../types/menu';
import { MenuItem } from './MenuItem';
import { RestaurantTheme } from '../themes/themes';

interface MenuCategoryProps {
  category: MenuCategoryType;
  isSelected: boolean;
  onClick: () => void;
  isExpanded: boolean;
  index: number;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({
  category,
  isSelected,
  onClick,
  isExpanded,
  index
}) => {
  const theme = useTheme() as RestaurantTheme & Theme;

  const variants = {
    collapsed: {
      scale: 1,
      opacity: 1,
      zIndex: 1,
      transition: {
        duration: 0.4
      }
    },
    expanded: {
      scale: 1,
      opacity: 1,
      zIndex: 2,
      transition: {
        duration: 0.4
      }
    },
    hidden: {
      scale: 0.95,
      opacity: 0,
      zIndex: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={isSelected ? 'expanded' : (isExpanded ? 'hidden' : 'collapsed')}
      onClick={!isSelected ? onClick : undefined}
      data-category-id={category.id}
      style={{ 
        cursor: !isSelected ? 'pointer' : 'default',
        transformOrigin: 'center top',
        height: isSelected ? '100%' : '100%',
        width: isSelected ? '100%' : 'auto',
        position: isSelected ? 'absolute' : 'relative',
        top: isSelected ? 0 : 'auto',
        left: isSelected ? 0 : 'auto',
        right: isSelected ? 0 : 'auto',
        zIndex: isSelected ? 2 : 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
      transition={{
        delay: index * 0.1
      }}
    >
      <Paper 
        elevation={isSelected ? 6 : 2}
        sx={{
          p: isSelected ? 3 : 2,
          backgroundColor: theme.customProperties.categoryCardBg,
          transition: 'all 0.3s ease',
          height: isSelected ? '100%' : '100%',
          position: 'relative',
          flexGrow: isSelected ? 0 : 1,
          overflowY: isSelected ? 'auto' : 'hidden',
          '&:hover': !isSelected ? {
            backgroundColor: theme.customProperties.categoryHoverBg,
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            transform: 'translateY(-4px)',
            '&::after': {
              opacity: 1
            }
          } : {},
          '&::after': !isSelected ? {
            content: '"Cliquez pour voir plus"',
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            fontSize: '0.75rem',
            color: theme.palette.primary.main,
            opacity: 0.7,
            fontStyle: 'italic',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          } : {},
          display: 'flex',
          flexDirection: 'column',
          border: !isSelected ? `1px solid ${theme.palette.divider}` : 'none',
          borderRadius: theme.shape.borderRadius,
          ...(isSelected && {
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: theme.customProperties.scrollbarTrackColor,
              borderRadius: theme.shape.borderRadius / 2
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme.customProperties.scrollbarThumbColor,
              borderRadius: theme.shape.borderRadius / 2
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme.customProperties.scrollbarTrackColor,
              borderRadius: theme.shape.borderRadius / 2
            }
          })
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <Typography 
            variant="h6" 
            component="h2" 
            sx={{
              fontWeight: 700,
              textAlign: 'left',
              letterSpacing: '0.05em',
              mb: category.subtitle ? 0.5 : 2,
              fontSize: isSelected ? '1.5rem' : '1.2rem',
              textTransform: 'uppercase',
              color: theme.palette.text.primary,
              lineHeight: 1.2,
              transition: 'color 0.3s ease',
              ...((!isSelected) && {
                '&:hover': {
                  color: theme.palette.primary.main
                }
              })
            }}
          >
            {category.title}
          </Typography>
          
          {category.subtitle && (
            <Typography 
              variant="caption" 
              sx={{
                textAlign: 'left',
                color: theme.palette.text.secondary,
                fontStyle: 'italic',
                mb: 2,
                display: 'block',
                fontSize: '0.85rem',
                lineHeight: 1.4,
                maxWidth: '90%'
              }}
            >
              {category.subtitle}
            </Typography>
          )}
        </Box>
        
        {isSelected ? (
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 2,
            mt: 2,
            height: 'auto',
            overflow: 'visible'
          }}>
            {category.items.map((item, index) => (
              <MenuItem 
                key={index} 
                item={item} 
                isExpanded={true}
              />
            ))}
          </Box>
        ) : (
          <>
            <Box sx={{ 
              display: 'grid',
              gap: 1.5,
              flex: 1,
              overflow: 'hidden',
              pb: 3
            }}>
              {category.items.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 2
                  }}>
                    <Typography 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        color: theme.palette.text.primary,
                        textTransform: 'uppercase',
                        lineHeight: 1.2
                      }}
                    >
                      {item.name} - {item.price}
                    </Typography>
                  </Box>
                  {item.description && (
                    <Typography 
                      sx={{ 
                        fontSize: '0.85rem',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.4,
                        pr: 2
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}
                  {item.ingredients && (
                    <Typography 
                      sx={{ 
                        fontSize: '0.85rem',
                        color: theme.palette.text.secondary,
                        fontStyle: 'italic',
                        lineHeight: 1.4,
                        pr: 2
                      }}
                    >
                      {item.ingredients.join(', ')}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </>
        )}
      </Paper>
    </motion.div>
  );
}; 