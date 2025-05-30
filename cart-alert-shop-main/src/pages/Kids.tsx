
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import ProductCard from '@/components/ProductCard';
import ShoppingCart from '@/components/ShoppingCart';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Kids = () => {
  const { toast } = useToast();

  const kidsProducts: Product[] = [
    {
      id: 7,
      name: "Kids' Tablet",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=400&fit=crop",
      description: "Educational tablet designed specifically for children's learning."
    },
    {
      id: 8,
      name: "Kids' Smart Watch",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop",
      description: "Fun and safe smart watch for kids with GPS tracking."
    },
    {
      id: 9,
      name: "Kids' Wireless Headphones",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1577471488278-16eec37db042?w=500&h=400&fit=crop",
      description: "Volume-limited wireless headphones designed for children's safety."
    }
  ];

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [productQuantities, setProductQuantities] = useState<{ [key: number]: number }>({});

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setProductQuantities(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const incrementProductQuantity = (productId: number) => {
    const product = kidsProducts.find(p => p.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  const decrementProductQuantity = (productId: number) => {
    setProductQuantities(prev => {
      const newQuantity = Math.max(0, (prev[productId] || 0) - 1);
      return { ...prev, [productId]: newQuantity };
    });

    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => !(item.id === productId && item.quantity === 1));
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    setProductQuantities(prev => ({ ...prev, [productId]: 0 }));
    
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">TechStore - Kids</h1>
            <p className="text-gray-600">Premium Electronics & Accessories for Kids</p>
          </div>
          <ShoppingCart
            cartItems={cartItems}
            onIncrement={incrementProductQuantity}
            onDecrement={decrementProductQuantity}
            onRemove={removeFromCart}
          />
        </div>
      </header>

      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <a href="/men" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Men
            </a>
            <a href="/women" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Women
            </a>
            <a href="/kids" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">
              Kids
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kids' Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium electronics for kids
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kidsProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={productQuantities[product.id] || 0}
              onAddToCart={addToCart}
              onIncrement={incrementProductQuantity}
              onDecrement={decrementProductQuantity}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Kids;
