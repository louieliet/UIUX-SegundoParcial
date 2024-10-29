import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SpecialCard({ title, subtitle, description, imageSource }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>{subtitle}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 255,
        height: 144,
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        marginRight: 12,
    },
    imageContainer: {
        width: '100%',
        zIndex: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        zIndex: 40,
        borderRadius: 10,
        marginBottom: 10,
    },
    textContainer: {
        top: '50%',
        left: 10,
        alignItems: 'flex-start',
        position: 'absolute',
        zIndex: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'regular',
        color: 'white',
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
});