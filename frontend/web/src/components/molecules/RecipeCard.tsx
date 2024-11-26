import React from 'react';
import Image from '@/components/atoms/Image';
import Heading from '@/components/atoms/Heading';
import Button from '@/components/atoms/Button';
import { useNavigate } from 'react-router-dom';

type Recipe = {
  id: number;
  name: string;
  image: string;
  rating: number;
  instructions: string[];
  reviewCount: number;
};

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigate = useNavigate();

  const handleViewRecipe = (id: number) => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col justify-between h-full">
      <div>
        <Image src={recipe.image} alt={recipe.name} className="mb-4 w-full h-48 object-cover" />
        <Heading text={recipe.name} />
        <p className="text-gray-600 py-1"><strong>Desc:</strong> {recipe.instructions[0]}</p>
        <p className="text-gray-600 pb-3"><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
      </div>
      <div className="mt-auto">
        <Button onClick={() => handleViewRecipe(recipe.id)}>
          View Recipe
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;
