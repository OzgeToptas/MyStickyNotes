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
  const [notes, setNotes]= useState ([]);
  const updateScreen = (data) = .{
    setScreen(data)
  }
  let content;
  if (screen=== ScreenType.addNote){
  content=  (
  <AddNote 
  onExit={updateScreen}
  onSave={(data)=>setNotes([...notes,{id:Date.now(),note:data}])}/>
  );  
}else if(screen===ScreenType.allNotes){
    content= <AllNoteScreen notes={notes} />;
  }else if (screen===ScreenType.home) {
    content = (<HomeScreen
    onExit={updateScreen}
    />
  );
  console.log(notes);
  return (
    <View style={styles.container}>
<Header/>
{screen!==ScreenType.home && (
 <BackButton onButtonClick={updateScreen}/> )}
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
