import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAuth } from '@/Context/AuthContext';
import { useNavigation, useRoute } from '@react-navigation/native';

const Menu: React.FC = () => {
  const { logout } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const isRecipeDetailScreen = route.name === 'RecipeDetail';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        {isRecipeDetailScreen && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>{'< Back'}</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.title}>
          {isRecipeDetailScreen ? 'Recipe Detail' : 'Recipes'}
        </Text>

        {!isRecipeDetailScreen && (
          <TouchableOpacity onPress={openMenu}>
            <Text style={styles.menuButton}>Menu</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal
        visible={isMenuVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeMenu}
      >
        <View style={styles.overlay}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Menu</Text>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                logout();
                closeMenu();
              }}
            >
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={closeMenu}>
              <Text style={styles.menuText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    flex: 1,
  },
  menuButton: {
    fontSize: 16,
    color: '#007bff',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 15,
  },
});
