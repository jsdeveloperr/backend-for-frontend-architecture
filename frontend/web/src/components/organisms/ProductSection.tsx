import React from 'react';
import Heading from '../atoms/Heading';
import ProductList from '../molecules/ProductList';

type Product = {
  id: number;
  name: string;
};

type ProductSectionProps = {
  products: Product[];
};

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => (
  <div className="mt-4">
    <Heading text="Products" />
    <ProductList products={products} />
  </div>
);

export default ProductSection;
