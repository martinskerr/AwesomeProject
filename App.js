import { StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';


const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {

  const [isWorking, setIsWorking] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingTop: Platform.OS === "android" && 30}}>
        <Text style={styles.text}>Pomodo App</Text>
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
  }
});
