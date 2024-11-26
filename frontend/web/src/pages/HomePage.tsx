import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/components/layouts/Layout';
import RecipeList from '@/components/organisms/RecipeList';

type Recipe = {
  id: number;
  name: string;
  image: string;
  rating: number;
  instructions: string[];
  reviewCount: number;
};

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/recipes')
      .then((response) => setRecipes(response.data))
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <Layout>
      <RecipeList recipes={recipes} />
    </Layout>
  );
};

export default HomePage;
