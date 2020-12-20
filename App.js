import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View ,Button,TextInput,TouchableOpacity,AppRegistry} from 'react-native';
import { Appbar } from 'react-native-paper';
import Constants from 'expo-constants';

export default function App(navigation) {
    const [prize, setprize] = useState('');
    const [ p_age, setp_age] = useState(''); 
    const [ sav, setsav] = useState('0.00');
    const [ final, setfinal] = useState('0.00');
    const [error, seterror] = useState("");

    
    useEffect(() => {
      if(prize === "" || p_age === ""){
        
      }
      else if (p_age <= 100 && prize  >= 0 && p_age >= 0) {
        var sav = (prize * p_age) / 100;
        var final= prize  - sav;
        setsav(sav.toFixed(2));
        setfinal(final.toFixed(2));      
        seterror("");
        
      } else if (p_age > 100) {
        seterror("Discount Cannot be greater than 100%");
        
      } else if (prize < 0 || p_age < 0) {
        seterror("Original Price or Discount Price must be greater than 0");
        
      }
      else
      {
        seterror("Invalid Input");
         
      }    
    });




    return (

        
      
        <View >


            <Appbar.Header>
      
              <Appbar.Content title="Home" subtitle="Discount Calculator " />
    
            </Appbar.Header>

            
            <View style={{flexDirection:'row',justifyContent:'center',paddingTop:40}}>
              

                  <TextInput keyboardType={"number-pad"} style={{borderColor:"Black",borderWidth:2,padding:15}}
                  
                  placeholder="Enter the Prize" value={prize}
                  
                  onChangeText={nwprize => setprize(nwprize)}
                  defaultValue={prize}
                  />


            </View>
            
            <View style={{padding:30,flexDirection:'row',justifyContent:'center'}}>
              
                  <TextInput keyboardType={"number-pad"} style={{borderColor:"Black",borderWidth:2,padding:15}}
                  
                  placeholder="Discount Percentage" value={p_age}
                  onChangeText={nwp_age => setp_age(nwp_age)}
                  defaultValue={p_age}
                  />


            </View>


            <View style={{padding:25}}>
                <Text style={styles.textStyle} >Final Price:{final}</Text>
                <Text style={styles.textStyle}>Saved Amount:{sav}</Text>
                
            </View>
            

            <View>
              <Button title = "Save"/>

            </View>



            


            <View style = {{marginTop:30}} >

              <TouchableOpacity >
                <Button title = "History" onPress={() => navigation.navigate('History')}/>
              </TouchableOpacity>            
        


            </View>

                        
          </View>    

    );
 
}


function HistoryScreen (navigation, route){
      
      
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Of Employees will be presented here</Text>
    </View>
  );


   
}




const Stack = createStackNavigator();

function Flow() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        
        <Stack.Screen name="History" component={HistoryScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent:"center",
  },


  
});
