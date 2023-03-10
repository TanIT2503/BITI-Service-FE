// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Create from './components/Create/Create';
import List from './components/List-product/List';
import Navbar from "./components/Navbar/Navbar";
import Update from './components/Update/Update';
import { Routes, Route } from "react-router-dom";
import Detail from './components/List-product/Details';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/create" element={<Create />} />
                <Route path="/detail" element={<Detail />} />
                {/* <List /> */}
                {/* <Create /> */}
                {/* <Update /> */}
            </Routes>
        </>
    );


}

export default App;
