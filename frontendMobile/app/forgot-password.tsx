import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

// Forgot Password screen 

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Get URI from icon module
    function getIconUri(iconSource: number): string {
        return Asset.fromModule(iconSource).uri || '';
    }

    const handleReset = async () => {
        if (!email) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        const code = Math.floor(100000 + Math.random() * 900000); // Génère un code à 6 chiffres

        try {
            const response = await fetch('http://localhost:5000/api/password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Échec de l\'envoi de l\'email');
            }

            const data = await response.json();
            setMessage(data.message);
            setError('');
            router.push('/forgot-password-send');
        } catch (err: any) {
            setError(err.message);
            setMessage('');
            console.error('Erreur lors de l\'envoi de l\'email :', err);
            alert('Une erreur est survenue lors de l\'envoi de l\'email.');
        }
    };

    return (
      <View style={{flex: 1}}>
          <LinearGradient colors={['#F72C25', '#F7B32B']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{flex: 1, paddingVertical: 215, paddingHorizontal: 30, alignItems: 'center'}}>
            <View style={styles.container}>
                <Text style={styles.title}>LOOTOPIA</Text>
                <Text style={styles.subtitle}>La chasse vous attend !</Text>
                
                {/* Input Email */}
                <View>
                  <Text style={styles.inputTexte}>Email</Text>
                  <View style={styles.inputContainer}>
                      <SvgUri
                          uri={getIconUri(require('../assets/icon/mail.svg'))}
                          width={20}
                          height={20}
                          style={styles.inputIcon}
                          color={'#cdcdcdff'}
                      />
                      <TextInput
                          style={styles.input}
                          placeholder="votre@email.com"
                          placeholderTextColor="#A9A9A9"
                          keyboardType="email-address"
                          value={email}
                          onChangeText={setEmail}
                      />
                  </View>
                </View>

                {/* Button "Réinitialiser" */}
                <TouchableOpacity style={styles.buttonContainer} onPress={handleReset}>
                    <LinearGradient
                        colors={['#F72C25', '#F7B32B']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Réinitialiser</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Message Success/Error */}
                {message ? <Text style={styles.success}>{message}</Text> : null}
                {error ? <Text style={styles.error}>{error}</Text> : null}

                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={() => router.push('/connection')} activeOpacity={0.7}>
                      <Ionicons name="arrow-back" size={24} color="#393939" />
                      <Text style={styles.backText}>Retour à la connexion</Text>
                </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 50,
        backgroundColor: '#FEFEFE',
        borderRadius: 18,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingTop: 36,
        gap: 8,
    },
    backText: {
        fontSize: 16,
        color: '#393939',
        fontWeight: '700',
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        fontFamily: 'sans-serif',
        color: '#1f1f1f',
    },
    subtitle: {
        fontSize: 15,
        color: '#1f1f1f',
        marginTop: 8,
        marginBottom: 36,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    inputContainer_mdp: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
    },
    inputIcon: {
        marginRight: 12,
    },
    inputTexte: {
        fontSize: 20,
        marginBottom: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1f1f1f',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#F7B32B',
        fontWeight: '600',
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#F7B32B',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    loginButtonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    signupContainer: {
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 16,
        marginBottom: 24,
    },
    signupText: {
        fontSize: 14,
        color: '#1f1f1f',
    },
    signupLink: {
        fontSize: 14,
        color: '#F7B32B',
        fontWeight: '600',
    },
    buttonContainer: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 16,
    },
    buttonGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '900',
    },
    success: {
        color: 'green',
        marginTop: 20,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        marginTop: 20,
        textAlign: 'center',
    },
});
