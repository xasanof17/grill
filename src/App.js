import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {  Navbar } from './Layouts';
import {Error, Home} from './routes';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <main className='main'>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}


export default App;
