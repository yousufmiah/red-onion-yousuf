import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Breakfast from "./components/Breakfast/Breakfast";
import Dinner from "./components/Dinner/Dinner";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ItemDetails from "./components/Home/ItemDetails";
import Login from "./components/Login/Login";
import Lunch from "./components/Lunch/Lunch";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
export const ItemsContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <ItemsContext.Provider value={[items[0], setItems]}>
        <Header></Header>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route path="/" element={<Breakfast></Breakfast>}></Route>
            <Route path="lunch" element={<Lunch></Lunch>}></Route>
            <Route path="dinner" element={<Dinner></Dinner>}></Route>
          </Route>
          <Route
            path="/itemDetails"
            element={<ItemDetails></ItemDetails>}
          ></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
      </ItemsContext.Provider>
    </div>
    // <div>
    //   <ItemsContext.Provider value={[items[0], setItems]}>
    //     <Header></Header>
    //     <Routes>
    //       <Route path="/" element={<Home></Home>}></Route>
    //       <Route path="/home" element={<Home></Home>}></Route>
    //       <Route path="/login" element={<Login></Login>}></Route>
    //       <Route path="/signUp" element={<SignUp></SignUp>}></Route>
    //     </Routes>
    //   </ItemsContext.Provider>
    // </div>
  );
}

export default App;
