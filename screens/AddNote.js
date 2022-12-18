import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AddNote = ({onSave , onExit}) => {
    const [enteredText, setentereText] = useState("");
    const handleChange =(val) => {
        setentereText(val);
    };
    const handleClick = () => {
        if (enteredText.trim().length > 0 ) {
            onSave(enteredText);
            onExit(ScreenType.allNotes);
        }
        console.log(enteredText);
    
    };
  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <Text style={styles.title}> Add Note</Text> 
            <View> 
                <TextInput onChangeText={handleChange} style={styles.input}/>
            </View>
            <Button onPress={handleClick} title="Add" />

        </View>
      <Text>AddNote</Text>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    formContainer:{
        backgroundColor:"#f5f5f5",
        padding:10,
        marginVertical:10,
        marginHorizontal:10,
    },
    title: {
        fontsize:20,
        fontWeight:"bold",

    },
    input:{
        marginVertical:20,
        width:'100%',
        borderBottomWidth:2,
        fontSize:16,
        padding:10,
    }
});