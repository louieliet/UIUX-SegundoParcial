import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({ title, description, time, rating, imageSource }) {
    const [imageHeight, setImageHeight] = useState(100);

    useEffect(() => {
        const source = Image.resolveAssetSource(imageSource);
        
        if (source && source.uri) {
            Image.getSize(source.uri, (width, height) => {
                const aspectRatio = height / width;
                setImageHeight(150 * aspectRatio); 
            });
        }
    }, [imageSource]);

    return (
        <View style={styles.container}>
            <Image source={imageSource} style={[styles.image, { height: imageHeight }]} />
            <View style={styles.textContainer}>
                <View style={styles.row}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.rating}>⭐ {rating}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150, 
        borderRadius: 15,
        overflow: 'hidden',
        marginHorizontal: 8, 
        backgroundColor: '#f8f8f8', 
    },
    image: {
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    textContainer: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    rating: {
        fontSize: 14,
        color: '#555',
    },
    description: {
        fontSize: 12,
        color: '#777',
        marginVertical: 2,
    },
    time: {
        fontSize: 12,
        color: '#777',
    },
});