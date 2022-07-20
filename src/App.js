import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {  Navbar } from './Layouts';
import {Action, Delivery, Error, Home} from './routes';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <main className='main'>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/action" element={<Action/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </main>
      {/* <Footer/> */}
    </div>
  );
}


export default App;
