import React from 'react';
import Header from './components/Header';
import MangaScreen from './components/MangaScreen';
import './components/bootstrap.min.css'
import PublishScreen from './components/PublishScreen';
import {useSelector} from "react-redux"

function App() {
  // const formHandler = (e) => {
  //   e.preventDefault()
    
  // }
  const {panel} = useSelector(state => state.panel)
  return <>
        <Header />
        {panel.length < 10 ? <MangaScreen /> : <PublishScreen />}
        {/* <PublishScreen /> */}
    </>
}

export default App;
