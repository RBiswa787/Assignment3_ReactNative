import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Svg, { Path } from "react-native-svg";
export default function App() {
  const [count,setCount] = useState(0);
  var [percentage,setPercentage] = useState(0);
  var [total, setTotal] = useState(100);
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
    enabled={Platform.OS === "ios" ? true : false}>
    <View style={styles.container}>
      <AnimatedCircularProgress
      style={styles.circular}
  size={190}
  width={10}
  fill={percentage}
  tintColor="white"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" />
      <Text style={styles.count}>{count}</Text>
    <View style={styles.bottom}>
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={styles.svg}>
      <Path
        fill="#FF9292"
        d="M0 256l24-26.7C48 203 96 149 144 128s96-11 144 5.3C336 149 384 171 432 176s96-5 144-21.3C624 139 672 117 720 96s96-43 144-42.7C912 53 960 75 1008 80s96-5 144 0 96 27 144 21.3c48-5.3 96-37.3 120-53.3l24-16V0H0z"
      />
    </Svg>
    <TextInput
        style={styles.input}
        placeholder="Target"
        keyboardType="numeric"
        defaultValue = {total}
        onChangeText={(newtotal) => {
          if(newtotal!=0){
          setTotal(newtotal);
          
          }
        }}
      />
      <TouchableOpacity style={styles.button}
      onPress={()=>{
        if(count<total){
        setCount(count+1);
        setPercentage(percentage = (count/total)*100);}
        if(count==total-1){
        setPercentage(percentage = ((count+1)/total)*100);
        }
      }}><Text style={
        styles.clickme
      }>+</Text></TouchableOpacity>
      <TouchableOpacity style={styles.reset}
      onPress={() => {setCount(0);
      setTotal(100);
      setPercentage(0);
      }}><Text style={
        styles.resetText
      }>Reset</Text></TouchableOpacity>
    </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FF9292',
    flexDirection: 'column',
  },
  bottom: {
    position: 'absolute',
    marginTop: '75%',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: '75%',
    width: '100%',
  },
  button: {
    width: '45%',
    backgroundColor: '#FFE699',
    height: '10%',
    borderRadius: 20,
    marginLeft: '27.5%',
  },
  reset: {
    width: '45%',
    backgroundColor: '#FF9999',
    height: '10%',
    borderRadius: 20,
    marginLeft: '27.5%',
    marginTop: '10%',
  },
  clickme: {
    fontSize: 50,
    marginLeft: 75,
    marginTop: -10,
    color: 'white',
  },
  resetText: {
    fontSize: 25,
    marginLeft: 60,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  count: {
    position: 'absolute',
    marginTop: '32%',
    marginLeft: '35%',
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  circular: {
    marginLeft: '27%',
    marginTop: '19%'
  },
  input: {
    position: 'relative',
    height: '10%',
    width: '20%',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    marginTop: '-60%',
    marginBottom: '30%',
    borderBottomWidth: 3,
    fontSize: 20,
    borderBottomColor: 'darkblue'
  },
  svg: {
    position: 'relative',
    marginTop: '-110%'
  }
});
