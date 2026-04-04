import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

import Gallery from "./pages/Gallery"; // new page
import FloatingChat from "./components/floating/floating";


/* Home page layout */

function Home(){

return(

<>

<Navbar/>

<Hero/>

<About/>

<Work/>

<Services/>

<Contact/>
<FloatingChat/>

</>

);

}


/* main app */

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/gallery" element={<Gallery/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;