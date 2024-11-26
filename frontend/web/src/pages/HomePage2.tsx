import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/components/layouts/Layout';
import ProductSection from '@/components/organisms/ProductSection';

type Product = {
  id: number;
  name: string;
};

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:3002/products', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Layout>
      <ProductSection products={products} />
    </Layout>
  );
};

export default HomePage;
