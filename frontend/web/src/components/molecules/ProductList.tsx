import React from 'react';

type Product = {
  id: number;
  name: string;
};

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ul className="list-disc list-inside">
    {products.map((product) => (
      <li key={product.id} className="text-gray-700">
        {product.name}
      </li>
    ))}
  </ul>
);

export default ProductList;
