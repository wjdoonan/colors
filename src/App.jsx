import './App.css';
import Divider from './comps'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <main>
        <div className="tabs">
          <h2>color</h2>
          <h2>view</h2>
          <h2>export</h2>
        </div>
        <div className="cp">
          <h1>Greys</h1>
          <div className="grey">
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <br />
          </div>
        </div>
        <div className="cp">
          <h1>Primary Color</h1>
          <div className="grey">
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <br />
          </div>
        </div>
        <div className="cp">
          <h1>Secondary Color</h1>
          <div className="grey">
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <br />
          </div>
        </div>
        <div className="cp">
          <h1>Alert</h1>
          <div className="grey">
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <br />
          </div>
        </div>
        <div className="cp">
          <h1>Warning</h1>
          <div className="grey">
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <br />
          </div>
        </div>
        <div className="cp">
          <h1>Success</h1>
          <div className="grey">
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <br />
          </div>
        </div>
        <div className="cp">
          <h1>Information</h1>
          <div className="grey">
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <input type="color" />
            <br />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
