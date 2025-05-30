
import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItemData {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemProps {
  item: CartItemData;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{item.name}</h4>
        <p className="text-blue-600 font-bold">${item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDecrement(item.id)}
          className="h-8 w-8 p-0 rounded-full"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="font-semibold text-gray-800 min-w-[30px] text-center">
          {item.quantity}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onIncrement(item.id)}
          className="h-8 w-8 p-0 rounded-full"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-right">
        <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 p-1"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
