//============================================================================
//////////////////////////////////////////////////////////////////////////////
// CSS 
//////////////////////////////////////////////////////////////////////////////
import './App.css';
//============================================================================

//============================================================================
//////////////////////////////////////////////////////////////////////////////
// Router DOM 
//////////////////////////////////////////////////////////////////////////////
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//============================================================================

//============================================================================
//////////////////////////////////////////////////////////////////////////////
// AuthProvider
//////////////////////////////////////////////////////////////////////////////
import AuthProvider from './Context/AuthProvider';
//============================================================================

//============================================================================
//////////////////////////////////////////////////////////////////////////////
// Pages
//////////////////////////////////////////////////////////////////////////////
import Home from './Pages/Home/Home';
import Form from './Pages/Form/Form';
// import FakeDash from './Pages/FakeDash/FakeDash';
// import NewHome from './Pages/NewHome/NewHome';
//============================================================================

//============================================================================
//////////////////////////////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////////////////////////////
import LoginRoute from './Routes/LoginRoute';
import DashRoute from './Routes/DashRoute';
//============================================================================

function App() {
  // require('dotenv').config()
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          {/* <Route path="/form" element={<Form/>}/> */}
          {/* <Route path="/login" element={<NewHome/>}/> */}
          {/* <Route path="/home" element={<FakeDash/>}/> */}
          <Route path="/join" element={<LoginRoute><Home></Home></LoginRoute>}/>
          <Route exact path="/" element={<LoginRoute><Home></Home></LoginRoute>}/>
          <Route path="/dash" element={<DashRoute><Form></Form></DashRoute>}/>
          {/* <Route path="/home" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/> */}
          {/* private Routes */}
          {/* <Route path="/profile" element={<DashRoute><Dashboard></Dashboard></DashRoute>}/> */}
          {/* Error */}
          {/* <Route path="/*" element={<Error/>}/> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
