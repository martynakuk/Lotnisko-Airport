import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Lot from "./pages/Lot";
import Updatelot from "./pages/Updatelot";
import Addlot from "./pages/Addlot";
import Samolot from "./pages/samoloty/Samolot";
import Addsamolot from "./pages/samoloty/Addsamolot";
import Updatesamolot from "./pages/samoloty/Updatesamolot";
import Przelot from "./pages/przeloty/Przelot";
import AddPrzelot from "./pages/przeloty/AddPrzelot";
import UpdatePrzelot from "./pages/przeloty/UpdatePrzelot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lot/>}/>
        <Route path="/addlot" element={<Addlot/>}/>
        <Route path="/updatelot/:id" element={<Updatelot/>}/>
        <Route path="/samolot" element={<Samolot/>}/>
        <Route path="/samolot/addsamolot" element={<Addsamolot/>}/>
        <Route path="/samolot/:id" element={<Updatesamolot/>}/>
        <Route path="/przelot" element={<Przelot/>}/>
        <Route path="/addprzelot" element={<AddPrzelot/>}/>
        <Route path ="/przelot/:idSamolot/:idLot" element={<UpdatePrzelot/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
