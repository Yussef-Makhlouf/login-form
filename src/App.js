import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './register';
import RecoverPassword from './recoverPassword';
import Navbar from './NavBar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={
            <section className="relative bg-black text-white h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
            <div className="relative z-10 max-w-4xl text-center px-6">
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                Welcome to <span className="text-orange-500">Your App</span>
              </h1>
              <p className="text-lg mb-8">
                Your go-to platform for amazing experiences. Discover, connect, and grow with us.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
          } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
