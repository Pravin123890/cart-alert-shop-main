
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CategorySectionProps {
  title: string;
  products: Product[];
  productQuantities: { [key: number]: number };
  onAddToCart: (product: Product) => void;
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  products,
  productQuantities,
  onAddToCart,
  onIncrement,
  onDecrement
}) => {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={productQuantities[product.id] || 0}
            onAddToCart={onAddToCart}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
