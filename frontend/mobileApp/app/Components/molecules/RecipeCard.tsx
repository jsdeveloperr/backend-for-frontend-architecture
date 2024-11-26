import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '@/Components/atoms/Button';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type Recipe = {
    id: number;
    name: string;
    image: string;
    instructions: string[];
};
  
type RootStackParamList = {
  RecipeDetailScreen: { id: number };
};
  
type RecipeCardProps = {
    recipe: Recipe;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleViewRecipe = () => {
    navigation.navigate('RecipeDetailScreen', { id: recipe.id });
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.name}>{recipe.name}</Text>
      <Text style={styles.description}>{recipe.instructions[0]}</Text>
      <Button title="View Recipe" onPress={handleViewRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default RecipeCard;
