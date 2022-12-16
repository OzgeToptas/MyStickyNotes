import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from './components/BackButton';
import { ScreenType } from './constants/constans';
import AddNote from './screens/AddNote';
import AllNoteScreen from './screens/AllNoteScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [screen, setScreen]= useState (ScreenType.home);
  let content;
  if (screen=== ScreenType.addNote){
    <AddNote/>;
    
  }else if(screen===ScreenType.allNotes){
    content= <AllNoteScreen/>;
  }elseif (screen===ScreenType.home){
    content = <HomeScreen
    onExit={(data)=> {
      setScreen(data);
    }}
    />
  };
  return (
    <View style={styles.container}>
<Header/>
<BackButton onButtonClick={(data)=>setScreen(data)}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
