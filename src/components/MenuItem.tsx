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
import { Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MenuItem as MenuItemType } from '../types/menu';
import { RestaurantTheme } from '../themes/themes';

interface MenuItemProps {
  item: MenuItemType;
  isExpanded: boolean;
}

const defaultImage = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80';

export const MenuItem: React.FC<MenuItemProps> = ({ item, isExpanded }) => {
  const theme = useTheme() as RestaurantTheme & Theme;
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
          transition: 'all 0.4s ease-in-out',
          backgroundColor: theme.customProperties.itemCardBg,
          borderRadius: theme.shape.borderRadius
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
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                {item.name}
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                {item.price}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
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
            backgroundColor: theme.customProperties.itemCardBg,
            borderRadius: theme.shape.borderRadius * 2
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
            <Typography variant="h5" component="div" color="text.primary">
              {item.name}
            </Typography>
            <Typography color="primary" variant="h5" sx={{ mt: 0.5 }}>
              {item.price}
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.text.secondary
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
                borderRadius: theme.shape.borderRadius,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            />
          </Box>

          <DialogContentText sx={{ mb: 3, color: theme.palette.text.secondary }}>
            {item.description}
          </DialogContentText>

          {item.ingredients && (
            <>
              <Typography variant="h6" sx={{ mb: 1, color: theme.palette.text.primary }}>
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
                          color: theme.palette.text.secondary
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </DialogContent>
      </Dialog>

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
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: theme.palette.text.primary,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
                borderRadius: theme.shape.borderRadius,
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}; 