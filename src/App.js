import React, { useState, useEffect } from 'react';
import SongBlock from './components/SongBlock'; 
import Footer from './components/Footer'; 
import colors from './components/colors';

function App() {
  document.title = "Bardic Songbook";
  const [songBlocks, setSongBlocks] = useState([]);
  const [bard, setBard] = useState([]);

  const addSongBlock = () => {
    console.log("\naddSongBlock called");
    setSongBlocks((prevSongBlocks) => [...prevSongBlocks, prevSongBlocks.length + 1]);
  };



  useEffect(() => {
    // Code to run on page load
    let bardStored = JSON.parse(localStorage.getItem("bard"));
    if (bardStored) {
      console.log("Bard encountered:", bardStored);
      setBard(bardStored)
      localStorage.setItem('bard', bardStored)

      let numSpells = bardStored.length
      console.log("Number of spells: ", numSpells)

      let i = 0;
      while (i < numSpells) {
        addSongBlock()
        i++
      }



    } else {
      console.log("Let's create a bard!");
      addSongBlock()

    }
    
    
  }, []);


    
    
  



  return (
    
    <div style={{ display:'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: colors.yellow, textShadow: `2px 2px 4px black`, }}>Bardic Songbook</h1>
      {songBlocks.map((blockId) => (
        <SongBlock key={blockId} blockId={blockId}/>
      ))}
      <button onClick={addSongBlock}  style={{ width: "max-content", margin: '10px', marginBlockEnd: '100px' }} className="songbuttons" >New Song</button>
      <Footer/>
    </div>
    
  );
}

export default App;