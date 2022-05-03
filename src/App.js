import Topbar from "./pages/topbar/Topbar";
import TopbarChef from "./pages/topbarchef/TopbarChef";
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";
import MenuAdmin from "./pages/menuadmin/MenuAdmin";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    
    <div className="App">   
     <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Login/>}/>
       <Route exact path="/topbaradmin" element={<Topbar/>}/>
       <Route exact path="/topbarchef" element={<TopbarChef/>}/>
       <Route exact path="/menuadmin" element={<MenuAdmin/>}/>
       <Route exact path="/menu" element={<Menu/>}/>
    
       
     </Routes>
     </BrowserRouter>
      
 
   
    </div>
  );
}

export default App;
