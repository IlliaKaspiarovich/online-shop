import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
  Box
} from '@mui/material'

type Props = {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.images[0]}
        title={product.title}
      />
      <CardContent>
        <Typography noWrap gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            minHeight: '40px'
          }}
          variant="body2"
          color="text.secondary"
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Rating value={product.rating} readOnly />
          <Button size="small">View Details</Button>
        </Box>
      </CardActions>
    </Card>
  )
}
