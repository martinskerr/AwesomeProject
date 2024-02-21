import { StyleSheet, Platform, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Header from './src/components/header';
import Timer from './src/components/Timer';
import {Audio} from "expo-av"


const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {

  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK" );
  const [isActive, setIsActive] = useState(false);
  
  function handlerStartStop(){
    playSound();
    setIsActive(!isActive);
  };
  
  async function playSound(){
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sound.mp3")
    )
    await sound.playAsync();
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View 
      style={{
              flex: 1,
              paddingHorizontal:15, 
              paddingTop: Platform.OS === "android" && 30,
              
              }}>
        <Text style={styles.text}>Pomodo App</Text>
        <Header 
        currentTime={currentTime} 
        setCurrentTime={setCurrentTime} 
        setTime={setTime}/>

        <Timer time={time}/>

        <TouchableOpacity onPress={handlerStartStop} style={styles.button}>
              <Text style={{color: "white", fontWeight:"bold", }} >
                {isActive ? "STOP" : "START"}
              </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    fontSize:32, 
    fontWeight:"bold"
  },
  button:{
    backgroundColor: "#333333",
    marginTop: 15,
    padding:15,
    borderRadius:15,
    alignItems:"center"
  }

});
