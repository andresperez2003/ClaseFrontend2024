import { useState } from "react";
import "./App.css"
import Footer from './components/Footer'
import Header from './components/Header'
import { Principal } from "./components/Principal";



function App() {

  const [selectedTab, setSelectedTab] = useState<string>('Manizales');
  return (
   <>
    <Header onSelect={setSelectedTab} />
    <Principal selectedTab={selectedTab} />
    <Footer />
   </>
  )
}

export default App
