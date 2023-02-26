import {Routes, Route} from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';

import "./App.css";
import MainLayout from "./MainLayout"
import MainPage from "./components/MainPage";
import categoryProps from "./categoryProps"
import HomePage from "./components/HomePage";

function App() {
    const data = "category=sports&";


    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                {categoryProps?.map((item) => {
                    return <Route path={item.url} element={<MainPage data={item}/>}/>;
                })}
            </Route>
        </Routes>
    );
}

export default App;
