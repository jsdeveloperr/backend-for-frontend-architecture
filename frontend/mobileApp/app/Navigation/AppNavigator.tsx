import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '@/Context/AuthContext';
import Menu from '@/Layout/Menu';
import RecipeListScreen from '@/Screens/RecipeListScreen';
import RecipeDetailScreen from '@/Screens/RecipeDetailScreen';
import LoginScreen from '@/Screens/LoginScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="RecipeListScreen"
            component={RecipeListScreen}
            options={{
              header: (props: any) => <Menu {...props} />,
            }}
          />
          <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} options={{ title: 'Recipe Detail'}} />
        </>
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login'}} />
      )}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
