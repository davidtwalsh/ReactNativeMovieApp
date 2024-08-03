import {View, Text, Platform} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline'

const ios = Platform.OS == 'ios';
export default function HomeScreen() {
    return (
        <View className="flex-1 bg-slate-900">
            <SafeAreaView className={ios? "-mb-2": "mb-3"}>
                <StatusBar style="light"/>
                <View className="flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size="30" strikeWidth={2} color="white" />
                    <Text className="text-red-500 text-4xl opacity-50">Yo</Text>
                </View> 
            </SafeAreaView>
        </View>
    )
}