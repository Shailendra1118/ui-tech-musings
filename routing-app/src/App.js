import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
//import {getAllUsers} from './services/UserService'
import { useState, useEffect } from 'react'


function Home() {
  return <h3>Home Page </h3>;
}

function Verification() {

  //const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  let { emailId } = useParams();

  //validation
  if(emailId != "shailendra@google.com") {

      return <div style={{ fontSize: "20px" }}>
            This user ({emailId}) does not have access to app. Please raise a request.
            </div>;
  }else
  return <p>Welcome!</p>

//  useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((response) => {
//           console.log(response);
//           setError(null);
//         })
//         .catch(setError);
//  }, []);
//
//  if (error) return <p>An error occurred</p>

//  return (
//      <div style={{ fontSize: "50px" }}>
//      Verifying credentials for {emailId}
////       {roles.map(({ id, name, email, company }) => (
////         <Contact
////           key={id}
////           name={name}
////           email={email}
////           tagline={company.catchPhrase}
////         />
////       ))}
//     </div>
//  );

}


function App() {
  return (
    <Router>
     <Routes>
       <Route path="/validation/:emailId" element={<Verification/>}>
       </Route>
       <Route path="/" element={<Home/>}>
       </Route>
     </Routes>
    </Router>
  );
}

export default App;
