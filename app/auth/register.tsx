import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNumber: string;
};

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    router.replace('/');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Register</Text>

      
          <TextInput
            style={styles.input}
            placeholder="First name"
            value={formData.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
          />

    
          <TextInput
            style={styles.input}
            placeholder="Last name"
            value={formData.lastName}
            onChangeText={(text) => handleChange('lastName', text)}
          />

         
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
          />

        
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
          />

          
          <View style={styles.phoneInputContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+63</Text>
            </View>
            <TextInput
              style={[styles.input, styles.phoneInput]}
              placeholder="Contact Number"
              keyboardType="phone-pad"
              value={formData.contactNumber}
              onChangeText={(text) => handleChange('contactNumber', text)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/auth/login')}>
              <Text style={styles.footerLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03346E',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: '#FFFF',
    marginBottom: 120,
    marginTop: 60,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#FFFF',
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    paddingHorizontal: 30,
    marginBottom: 33,
    fontSize: 14,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  countryCode: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 32,
    marginRight: 13,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  countryCodeText: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#333',
  },
  phoneInput: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FFFF',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: -6,
    width: 120,
    marginLeft: 100,
  },
  buttonText: {
    color: '#03346E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#FFFF',
    fontSize: 14,
  },
  footerLink: {
    color: '#0066FF',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins',
    textDecorationLine: 'underline',
  },
});