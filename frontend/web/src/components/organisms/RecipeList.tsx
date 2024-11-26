import React from 'react';
import RecipeCard from '../molecules/RecipeCard';

type Recipe = {
  id: number;
  name: string;
  image: string;
  rating: number;
  instructions: string[];
  reviewCount: number;
};

type RecipeListProps = {
  recipes: Recipe[];
};

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
