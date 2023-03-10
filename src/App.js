// import logo from './logo.svg';
import './App.css';
import Create from './components/Create/Create';
import List from './components/List-product/List';
import Navbar from "./components/Navbar/Navbar";
import Update from './components/Update/Update';

function App() {
    return (
        <>
            <Navbar />
            <List />
            <Create />
            <Update />
        </>

    );


}

export default App;
