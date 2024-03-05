import { View, Text, Image, Button } from "react-native";
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';



export default function Home() {
    const navigation = useNavigation();
    return (
        <>
            <View style={tw`ml-[100px] mt-[40px]`}>
                <Text style={tw`text-2xl`}>Welcome To my app</Text>
            </View>
            <View>
                <Image source={{
                    uri:'https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg'
                }}
                style={tw`h-[400px] mt-[40px]`}
                />
            </View>
            <View style={tw`mt-[80px] w-[180px] ml-[100px]`}>
                <Button 
                title="Get Started" 
                onPress={() => navigation.navigate('About')}
                />
            </View>
        </>
    )
}