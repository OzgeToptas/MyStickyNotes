import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenType } from '../constants/constans';

const BackButton = (onButtonClick) => {
  return (
    <View styles={styles.container}>
      <Viev style={styles.button}>
        <Button onPress={()=>onButtonClick(ScreenType.home)} color={"grey"} title="< Back" />
      </Viev>
    </View>
  )
}

export default BackButton;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",

    },
    button:{
        margin:10,

    }
})