import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Views/Home.js';
import About from './src/Views/About.js';
import Contact from './src/Views/Contact.js';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Make sure to import the specific icon library

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'About') {
              iconName = 'information-circle';
            } else if (route.name === 'Contact') {
              iconName = 'mail';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="About" component={About} />
        <Tabs.Screen name="Contact" component={Contact} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

