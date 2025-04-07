import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Modal,
  Fade,
  Backdrop,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MenuItem as MenuItemType } from '../types/menu';
import { RestaurantThemeWithBase } from '../themes/defaultTheme';

interface MenuItemProps {
  item: MenuItemType;
  isExpanded: boolean;
}

const defaultImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80';

export const MenuItem: React.FC<MenuItemProps> = ({ item, isExpanded }) => {
  const theme = useTheme() as RestaurantThemeWithBase;
  const [open, setOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [
    item.image || defaultImage,
    ...(item.additionalImages || [])
  ];

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = (image: string, index: number) => {
    setEnlargedImage(image);
    setCurrentImageIndex(index);
  };

  const handleEnlargedClose = () => {
    setEnlargedImage(null);
  };

  const handlePrevImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
    setEnlargedImage(allImages[currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1]);
  };

  const handleNextImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
    setEnlargedImage(allImages[currentImageIndex === allImages.length - 1 ? 0 : currentImageIndex + 1]);
  };

  return (
    <>
      <Card 
        sx={{
          height: '100%',
          opacity: isExpanded ? 1 : 0,
          transform: isExpanded ? 'scale(1)' : 'scale(0.95)',
          transition: theme.customProperties.defaultTransition,
          backgroundColor: theme.customProperties.itemCardBg,
          borderRadius: theme.customProperties.borderRadiusBase
        }}
      >
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="160"
            image={item.image || defaultImage}
            alt={item.name}
            sx={{
              objectFit: 'cover',
              cursor: 'pointer'
            }}
          />
          <CardContent>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: 1
            }}>
              <Typography variant="h6" component="div" sx={{ 
                fontWeight: 600,
                color: theme.customProperties.itemNameColor
              }}>
                {item.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  fontWeight: 600,
                  color: theme.customProperties.itemPriceColor
                }}
              >
                {item.price}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ 
              color: theme.customProperties.itemDescriptionColor 
            }}>
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: theme.customProperties.modalBg,
            borderRadius: theme.customProperties.borderRadiusDialog
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 1
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" component="div" sx={{ 
              color: theme.customProperties.itemNameColor 
            }}>
              {item.name}
            </Typography>
            <Typography sx={{ 
              mt: 0.5, 
              color: theme.customProperties.itemPriceColor,
              fontSize: '1.5rem',
              fontWeight: 600
            }}>
              {item.price}
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <Box 
              component="img"
              src={item.image || defaultImage}
              alt={item.name}
              onClick={() => handleImageClick(item.image || defaultImage, 0)}
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: theme.customProperties.borderRadiusImage,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            />
          </Box>

          <DialogContentText sx={{ 
            mb: 3, 
            color: theme.customProperties.itemDescriptionColor 
          }}>
            {item.description}
          </DialogContentText>

          {item.ingredients && (
            <>
              <Typography variant="h6" sx={{ mb: 1, color: theme.customProperties.itemNameColor }}>
                Ingrédients:
              </Typography>
              <List dense>
                {item.ingredients.map((ingredient, index) => (
                  <ListItem key={index}>
                    <ListItemText 
                      primary={ingredient}
                      primaryTypographyProps={{
                        sx: { 
                          fontSize: '1rem',
                          color: theme.customProperties.itemDescriptionColor 
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {allImages.length > 1 && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, color: theme.customProperties.itemNameColor }}>
                Plus de photos
              </Typography>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 1
              }}>
                {allImages.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => handleImageClick(img, index)}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        opacity: 0.9,
                        transform: 'scale(1.02)',
                        transition: 'all 0.2s'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`${item.name} - ${index + 1}`}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100px',
                        objectFit: 'cover', 
                        borderRadius: theme.customProperties.borderRadiusImageThumbnail
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Enlarged Image Modal */}
      <Modal
        open={!!enlargedImage}
        onClose={handleEnlargedClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={!!enlargedImage}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
            }}
            onClick={handleEnlargedClose}
          >
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: theme.customProperties.modalButtonBg,
                '&:hover': {
                  backgroundColor: theme.customProperties.modalButtonHoverBg,
                }
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: theme.customProperties.modalButtonBg,
                '&:hover': {
                  backgroundColor: theme.customProperties.modalButtonHoverBg,
                }
              }}
            >
              <NavigateNextIcon />
            </IconButton>
            <img
              src={enlargedImage || ''}
              alt={item.name}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: theme.customProperties.borderRadiusImage,
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}; 