import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

interface CustomSafeAreaViewProps {
    children: React.ReactNode;
}

const CustomSafeAreaView = ({ children }: CustomSafeAreaViewProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    } as ViewStyle,
});
