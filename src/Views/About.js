import { View, Text, Image } from "react-native";
import tw from 'twrnc'


export default function About() {
    return (
        <>
            <View style={tw`flex justify-center ml-[140px] mt-[40px]`}>
                <Text style={tw`text-3xl`}>About Us</Text>
            </View>
            <View>
                <Image
                    source={{
                     uri:'https://www.mastersoftwaresolutions.com/wp-content/uploads/2014/08/bnr-1.png'
                    }}
                    style={tw`h-[400px] mt-[40px]`}

                />
            </View>
            <View style={tw`w-[280px] ml-[70px] mt-[50px]`}>
                <Text style={tw`text-xl`}>Hola soy un mono de mierda me gusta la banana y la verga.
                     Chupo pene todos los dias y mi cancion favorita es la de "yo soy el mejor mamando pene"</Text>
            </View>
        </>
    )
}