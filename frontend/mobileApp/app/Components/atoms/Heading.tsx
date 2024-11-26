import React from 'react';
import { Text, StyleSheet } from 'react-native';

type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => (
  <Text style={styles.heading}>{text}</Text>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Heading;
