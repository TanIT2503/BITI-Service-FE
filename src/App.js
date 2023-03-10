// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Create from './components/Create/Create';
import List from './components/List-product/List';
import Navbar from "./components/Navbar/Navbar";
import Update from './components/Update/Update';

function App() {
    return (
        <>
        <Navbar />
        <div>
        <Routes>
            <Route path='/Create' element={<Create/>}/>
            <Route path='/List' element={<List/>}/>
        </Routes>
        </div>
        </>

        // <Navbar />
        // <List />
        // <Create />
        // <Update />
    );


}

export default App;
