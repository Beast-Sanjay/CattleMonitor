import React from 'react';
import { StyleSheet,Text,View,Button,TouchableOpacity } from "react-native";

export default function Robot(){
    return(
        <View style={styles.container}>
            <View >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.des}>UP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bttn}>
                    <Text style={styles.des}>ROBOT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.des}>DOWN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rtn} >
                <TouchableOpacity style={styles.side}>
                    <Text>LEFT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.side}>
                    <Text >RIGHT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        margin: 16,
        backgroundColor:'#fff',
        alignItems:'center',
        // justifyContent:'center'
    },
    rtn:{
        flexDirection:'row',
        //justifyContent: 'space-between',
    },
    
    button: {
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: '#DDDDDD',
        padding: 10,
        width:130,
        height:60,
        margin:50,
        borderRadius:10,
      },

    bttn:{
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: '#DDDDDD',
        padding: 10,
        width:130,
        height:100,
        margin:50,
        marginTop:-35,
        marginBottom:-35,
        borderRadius:20,
    },

    side:{
        alignItems: 'center',
        justifyContent:"space-evenly",
        backgroundColor: '#DDDDDD',
        padding: 10,
        width:60,
        height:100,
        margin:80,
        marginTop:-225,
        borderRadius:10,
    },

    des:{
        fontSize:21,
    },
    desl:{
        fontSize:21,
        transform:[{ rotate:'90deg'}]
    },
    desr:{
        fontSize:21,
        transform:[{ rotate:'270deg'}]
    }
    
})