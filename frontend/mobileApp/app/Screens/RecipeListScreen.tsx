import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { fetchRecipes } from '@/Services/Recipes/recipes-service';
import RecipeCard from '@/Components/molecules/RecipeCard';

type Recipe = {
  id: number;
  name: string;
  image: string;
  instructions: string[];
};

const RecipeListScreen: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);


  useEffect(() => {
    fetchRecipes()
      .then(setRecipes)
      .catch(console.error);
  }, []);

  return (
   <FlatList
     data={recipes}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({ item }) => <RecipeCard recipe={item} />}
     contentContainerStyle={styles.container}
   />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RecipeListScreen;
