import React from 'react';
import RouterIndex from "./router";

import MainHeader from "./view/main-header";
import MainFooter from "./view/main-footer";
import "./view/index.css";

function App() {
  return (<div className="pageWrap">
    <MainHeader/>
    <main className="main">
      <RouterIndex/>
    </main>
    <MainFooter/>
  </div>)
}
export default App;
