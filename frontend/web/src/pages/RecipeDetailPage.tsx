import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '@/components/layouts/Layout';

type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
};

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/${id}`)
      .then((response) => setRecipe(response.data))
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return (
      <Layout>
        <p className="text-center text-gray-600">Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-10xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full rounded-lg shadow-md mb-6 max-h-96 object-cover"
        />
        <div className="grid grid-cols-2 gap-4 mb-6">
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
        </div>
        <div className="mb-6">
          <p className="mb-2"><strong>Tags:</strong></p>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredients</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Instructions</h2>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetailPage;
