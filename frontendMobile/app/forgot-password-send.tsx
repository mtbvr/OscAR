import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgUri } from 'react-native-svg';
import { Asset } from 'expo-asset';

// Forgot Password after code was send screen 

export default function ForgotPasswordScreen() {
    const router = useRouter();

    // Get URI from icon module
    function getIconUri(iconSource: number): string {
        return Asset.fromModule(iconSource).uri || '';
    }

    return (
      <View style={{flex: 1}}>
          <LinearGradient colors={['#F72C25', '#F7B32B']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{flex: 1, paddingVertical: 128, paddingHorizontal: 30, alignItems: 'center'}}>
            <View style={styles.container}>
                <Text style={styles.title}>LOOTOPIA</Text>
                <Text style={styles.subtitle}>La chasse vous attend !</Text>
                
                {/* Input Security Code */}
                <View>
                    <Text style={styles.inputTexte}>Code de sécurité</Text>
                    <View style={styles.inputContainer}>
                        <SvgUri
                            uri={getIconUri(require('../assets/icon/lock.svg'))}
                            width={20}
                            height={20}
                            style={styles.inputIcon}
                            color={'#cdcdcdff'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="XXXXXX"
                            placeholderTextColor="#A9A9A9"
                            keyboardType="default"
                        />
                    </View>
                </View>

                {/* Input Password */}
                <View>
                    <Text style={styles.inputTexte}>Mot de passe</Text>
                    <View style={styles.inputContainer}>
                        <SvgUri
                            uri={getIconUri(require('../assets/icon/lock.svg'))}
                            width={20}
                            height={20}
                            style={styles.inputIcon}
                            color={'#cdcdcdff'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="************"
                            placeholderTextColor="#A9A9A9"
                            secureTextEntry
                        />
                    </View>
                </View>

                {/* Input Confirm Password */}
                <View>
                    <Text style={styles.inputTexte}>Confirmez le mot de passe</Text>
                    <View style={styles.inputContainer}>
                        <SvgUri
                            uri={getIconUri(require('../assets/icon/lock.svg'))}
                            width={20}
                            height={20}
                            style={styles.inputIcon}
                            color={'#cdcdcdff'}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="************"
                            placeholderTextColor="#A9A9A9"
                            secureTextEntry
                        />
                    </View>
                </View>

                {/* Button "Reset" */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/forgot-password-send')}>
                    <LinearGradient
                        colors={['#F72C25', '#F7B32B']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonText}>Réinitialiser</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={() => router.push('/connection')} activeOpacity={0.7}>
                      <Ionicons name="arrow-back" size={24} color="#393939" />
                      <Text style={styles.backText}>Annuler</Text>
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
        marginBottom: 10,
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
});
