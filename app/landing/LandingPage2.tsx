import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LandingPage2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/landing2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Secure and Fast Transactions</Text>
      <Text style={styles.sub}>
        Experience the speed and security of our banking platform.
      </Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/auth/login')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    fontFamily: 'Poppins',
    marginBottom: 30,
    marginTop: 60,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 13,
    marginLeft: -1,
    marginTop: 50,
    paddingHorizontal: 120,
    alignItems: 'center',
  },

  buttonText: {
    color: '#03346E',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },

});
