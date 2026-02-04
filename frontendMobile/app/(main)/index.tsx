import React, { useRef } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { theme } from '../../constants/theme';
import '../../utils/ignoreWarnings';
import { GooglePlacesAutocomplete, GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env';

export default function MapsScreen() {
    const mapRef = useRef<MapView | null>(null);

    const handleLocationSelect = (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
        if (details && mapRef.current) {
            const { lat, lng } = details.geometry.location;
            mapRef.current.animateToRegion({
          		  latitude: lat,
                longitude: lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: theme.COLORS.background }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    {/* Header and Title */}
                    <View style={{ paddingVertical: theme.SPACING.large, paddingHorizontal: theme.SPACING.medium }}>
                        <Text style={{ fontSize: theme.FONT_SIZES.subtitle, fontWeight: 'bold', color: theme.COLORS.textPrimary }}>Carte de France </Text>
                    </View>

                    {/* Map View */}
                    <View style={{ marginHorizontal: theme.SPACING.medium, height: 400, borderWidth: 3, borderColor: '#000000', borderRadius: 8, overflow: 'hidden', }} >
                        <MapView ref={mapRef} style={{ height: '100%', width: '100%' }} initialRegion={{ latitude: 48.8566, longitude: 2.3522, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }} >
                            {/* Example Marker */}
                            <Marker coordinate={{ latitude: 48.8566, longitude: 2.3522 }} title="Paris" description="Capitale de la France" />
                        </MapView>
                    </View>

                    {/* Search Bar */}
                    <View style={{ marginHorizontal: theme.SPACING.medium, marginTop: theme.SPACING.medium, position: 'absolute', top: 70, left: 15, width: '83%', }} >
                        <GooglePlacesAutocomplete
                            placeholder="Recherchez une adresse"
                            onPress={handleLocationSelect}
                            fetchDetails={true}
                            query={{
                                key: GOOGLE_API_KEY,
                                language: 'fr',
                            }}
                            styles={{ 
                                textInput: { 
                                    height: 40, 
                                    borderColor: theme.COLORS.border, 
                                    borderWidth: 1, 
                                    paddingHorizontal: theme.SPACING.medium, 
                                    backgroundColor: theme.COLORS.background, 
                                    color: theme.COLORS.textPrimary, 
                                },
                            }}
                            textInputProps={{
                                placeholderTextColor: theme.COLORS.placeholder,
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
