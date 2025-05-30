
import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
            {quantity > 0 && (
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDecrement(product.id)}
                  className="h-8 w-8 p-0 rounded-full hover:bg-red-100"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-semibold text-gray-800 min-w-[20px] text-center">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onIncrement(product.id)}
                  className="h-8 w-8 p-0 rounded-full hover:bg-green-100"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
