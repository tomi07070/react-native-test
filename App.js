import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Views/Home';


const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
          <Tabs.Screen name='current' component={Home}/>
          <Tabs.Screen name='mono' component={Home}/>
      </Tabs.Navigator>
    </NavigationContainer>

  );
}


