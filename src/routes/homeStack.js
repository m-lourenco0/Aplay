import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Player from "../screens/Player";
import Config from '../screens/Config';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Player" component={Player} options={{ headerShown: false }} />
            <Stack.Screen name="Config" component={Config} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}