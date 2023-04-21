import { StyleSheet,Text,View,Button } from "react-native";
import {useNavigation} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage(){
    const navigation=useNavigation();
    return(
        <SafeAreaView style={styles.container}>
        <View >
            <View style={styles.container}>
            <Text style={styles.textstyle}>Cattle Care </Text></View>
            <View style={[styles.fixToText]}>
            <Button style={styles.btn} color='#000' title='Login' onPress={()=>navigation.navigate('Login')} ></Button>
            <Button style={styles.btn} color='#000' title='Register' onPress={()=>navigation.navigate('Register')}></Button>
            </View>
            
        </View>
        </SafeAreaView>
    
    );
}
const  styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 16,
    },
    btn:{
        
        
    },
    textstyle:{
        fontSize:30,

    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    fd:{
        flexDirection:'row'
    }
 })