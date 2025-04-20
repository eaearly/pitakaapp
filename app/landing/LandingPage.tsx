import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/landing.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Seamless Bank Anytime</Text>
      <Text style={styles.sub}>
        Access your finances whenever and wherever. Banking made easy for you.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/landing/LandingPage2')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03346E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 310,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  sub: {
    fontSize: 13,
    color: '#FFFFFF',
    // fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginBottom: 30,
    marginTop: 60,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 130,
    marginTop: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#03346E',
    fontSize: 18,
    fontWeight: '600',
  },
});
