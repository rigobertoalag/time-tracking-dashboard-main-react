import React, { useState } from 'react'
import './styles.scss'

import UserCard from './components/UserCard'
import InfoCards from './components/InfoCards'

function App() {
  const [timeFrameSelection, setTimeFrameSelection] = useState('Weekly')

  return (
    <div className='app'>
      <div className='container'>
        <UserCard 
          func={setTimeFrameSelection}
        />
        <InfoCards timeSelected={timeFrameSelection}/>
      </div>
    </div>
  );
}

export default App;