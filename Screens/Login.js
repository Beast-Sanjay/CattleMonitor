import { StyleSheet, Text, View,Button } from 'react-native';
import { useState } from 'react';
import {  TextInput } from 'react-native-paper';
import {ref,set,update,onValue,remove} from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import {db} from './config';


export default function Login({}) {
  const [Lun, setLun] = useState("")
  const [LPwd, setLPwd] = useState("")
  
  const [ErrorMsg, setErrorMsg] = useState("")
  const [FbPass, setFbPass] = useState("");
  const navigation=useNavigation()
  function readdata()
  {
  const starCountRef = ref(db, 'users/'+Lun);
  onValue(starCountRef,(snapshot)=>
  {
  const data = snapshot.val();
  console.log(data);
  if(data == null)
  {
    alert("Wrong username")
  }else{
    setFbPass(data.Password);
    if((data.Password) == LPwd)
    {
      setErrorMsg("Login is successful")
      navigation.navigate("Robot");
    } else
    {
      setErrorMsg("Wrong password")
      //setErrorMsg(JSON.stringify(data))
    }
  }
  })
}

function checkIps()
{

  if(Lun.length==0){
    setErrorMsg("UsrName Required");
   }
   else{
      if(LPwd.length==0){
        setErrorMsg("Password Required");}
      else{
        readdata()
      }
  }

}
  
  

  return (
    
      <View style={styles.container}>
      <Text>Login Now</Text>
      
      <TextInput style={styles.input}label="UserName" 
      left={<TextInput.Icon icon="account"/>}
      onChangeText={value=>setLun(value)}
      />
      <TextInput 
      style={styles.input}
      label="Password" 
      secureTextEntry left={<TextInput.Icon icon="form-textbox-password"/>}
      onChangeText={value=>setLPwd(value)}
      />
      <Button style={styles.btn} title="ENTER"
      onPress={checkIps}></Button>

<Text>{ErrorMsg}</Text>
      </View>

      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor:"lightblue",
    width:"50%",
    borderWidth:1,
    borderRadius:10,
    padding:5,
    margin:10
  },
  btn:{
    width:'30%',
    height:40,
  },
});