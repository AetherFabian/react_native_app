import React, { useEffect } from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const image_url = 
    "https://www.teahub.io/photos/full/354-3540090_rick-and-morty-wallpaper-phone.jpg";

export default function SplashScreen({ navigation }){
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Characters");
        }, 5000);
    });
    return (
        <SafeAreaView style={StyleSheet.image_container}>
            <Image source={{uri: image_url}} style={styles.image}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image_container:{
        flex:1,
        justifyContent: "center",
        alignContent: "center",
    },
    image:{
        width: "100%",
        height: "100%",
    }
})