
import React from 'react';
import { ShoppingCart as CartIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import CartItem from './CartItem';

interface CartItemData {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ShoppingCartProps {
  cartItems: CartItemData[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  onIncrement,
  onDecrement,
  onRemove
}) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <CartIcon className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <CartIcon className="h-5 w-5" />
            <span>Shopping Cart ({totalItems})</span>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <CartIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  onRemove={onRemove}
                />
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-between items-center text-lg font-bold mb-4">
              <span>Total: ${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
