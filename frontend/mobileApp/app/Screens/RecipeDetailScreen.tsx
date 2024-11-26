import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchRecipeDetail } from '@/Services/Recipes/recipes-service';
import { Recipe } from '@/Types/recipe';

const RecipeDetailScreen: React.FC = () => {
    const { params }: any = useRoute();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
  
    useEffect(() => {
      fetchRecipeDetail(params.id).then(setRecipe).catch(console.error);
    }, [params.id]);
  
    if (!recipe) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.title}>{recipe.name}</Text>
        <Text>Prep Time: {recipe.prepTimeMinutes} mins</Text>
        <Text>Cook Time: {recipe.cookTimeMinutes} mins</Text>
        <Text>Servings: {recipe.servings} mins</Text>
        <Text>Difficulty: {recipe.difficulty} mins</Text>
        <Text>Cuisine: {recipe.cuisine} mins</Text>
        <Text>Calories per Serving: {recipe.caloriesPerServing} mins</Text>
        <View style={styles.section}>
        <Text style={styles.subtitle}>Tags:</Text>
        <View style={styles.tagContainer}>
          {recipe.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        <View style={styles.listContainer}>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.listItem}>
              - {ingredient}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Instructions:</Text>
        <View style={styles.listContainer}>
          {recipe.instructions.map((instruction, index) => (
            <Text key={index} style={styles.listItem}>
              {index + 1}. {instruction}
            </Text>
          ))}
        </View>
      </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {     
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      padding: 16,
      marginVertical: 10, 
    },
    image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    section: {
      marginBottom: 1,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      marginTop: 16,
    },
    tagContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    tag: {
      backgroundColor: '#d4edfc',
      color: '#007bff',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize: 14,
      marginRight: 8,
      marginBottom: 8,
    },
    listContainer: {
      paddingLeft: 16,
    },
    listItem: {
      fontSize: 16,
      marginBottom: 6,
      color: '#555',
    },
    errorText: {
      fontSize: 16,
      color: 'red',
    },
  });
  
  export default RecipeDetailScreen;
