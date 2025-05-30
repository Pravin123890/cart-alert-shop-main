
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

const Women = () => {
  const { toast } = useToast();

  const womenProducts: Product[] = [
    {
      id: 4,
      name: "Women's Bluetooth Earbuds",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=400&fit=crop",
      description: "Stylish and comfortable wireless earbuds for women."
    },
    {
      id: 5,
      name: "Women's Fashion Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&h=400&fit=crop",
      description: "Elegant fashion watch with smart features for modern women."
    },
    {
      id: 6,
      name: "Women's Designer Handbag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=400&fit=crop",
      description: "Trendy handbag perfect for everyday use and special occasions."
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
    const product = womenProducts.find(p => p.id === productId);
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">TechStore - Women</h1>
            <p className="text-gray-600">Premium Electronics & Accessories for Women</p>
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
            <a href="/women" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">
              Women
            </a>
            <a href="/kids" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Kids
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Women's Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium electronics for women
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {womenProducts.map((product) => (
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

export default Women;
