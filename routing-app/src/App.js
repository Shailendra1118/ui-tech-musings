import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function Home() {
  return <h3>Home Page </h3>;
}

function Verification() {
  let { id } = useParams();
  return <div style={{ fontSize: "50px" }}>
           Verifying credentials for {id}
         </div>;
}


function App() {
  return (
    <Router>
     <Routes>
       <Route path="/validation/:id" element={<Verification/>}>
       </Route>
       <Route path="/" element={<Home/>}>
       </Route>
     </Routes>
    </Router>
  );
}

export default App;
