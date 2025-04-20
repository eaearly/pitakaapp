import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('https://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        router.replace('/');
      } else {
        Alert.alert('Login Failed', data.message || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.content}>
        {/* Updated image loading with fallback */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.jpg')}
            style={styles.logo}
            resizeMode="contain"
            onError={() => console.log('Failed to load logo')}
          />
        </View>

        <Text style={styles.title}>Sign in</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!loading}
        />

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}>
          <Text style={styles.buttonText}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Are you a new user? </Text>
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03346E',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 350,
    height: 280,
    maxWidth: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: '#FFFF',
    marginBottom: 20,
    textAlign: 'left',
  },
  input: {
    height: 51,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 30,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  button: {
    backgroundColor: '#FFFF',
    borderRadius: 20,
    paddingVertical: 10,
    width: 120,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonDisabled: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: '#03346E',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#FFFF',
    fontSize: 15,
    marginTop: 22,
  },
  footerLink: {
    color: '#0066FF',
    fontSize: 15,
    marginTop: 22,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
