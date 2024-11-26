import axios from 'axios';
import { Recipe } from "@/Types/recipe";

const API_BASE_URL = 'http://localhost:5000';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${API_BASE_URL}/recipes`);
  return response.data;
};

export const fetchRecipeDetail = async (id: number) => {
  const response = await axios.get(`${API_BASE_URL}/recipes/${id}`);
  return response.data;
};
