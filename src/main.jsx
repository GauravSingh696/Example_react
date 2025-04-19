import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import reportWebVitals from './reportWebVitals';
// import Home from './component/Home';
// import Blogs from './component/Blogs';
// import Contact from './component/Contact';
// import NoPage from './component/NoPage';
// import Github from './component/Github';


// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='' element={<Home />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NoPage />} />
//         <Route path="/Github" element={<Github/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // reportWebVitals();