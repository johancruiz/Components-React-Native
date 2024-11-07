import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import Animation101Screen from '../screens/animation/Animation101Screen';
import Animation102Screen from '../screens/animation/Animation102Screen';
import SwitchScreen from '../screens/switches/SwitchScreen';
import { AlertScreen } from '../screens/alerts/AlertScreen';
import TextInputsScreen from '../screens/input/TextInputsScreen';
import PullToRefreshScreen from '../screens/ui/PullToRefreshScreen';
import CustomSectionListScreen from '../screens/ui/CustomSectionListScreen';
import ModalScreen from '../screens/ui/ModalScreen';
import InfiniteScrollScreen from '../screens/ui/InfiniteScrollScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true
    }} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputsScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      
    </Stack.Navigator>
  );
}

export default Navigation;