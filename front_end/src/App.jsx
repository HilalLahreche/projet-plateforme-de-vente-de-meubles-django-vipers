import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/organisms/Footer";
import Connexion from "./components/pages/Connexion";
import LoginForm from "./components/atoms/LoginForm";
import SignupForm from "./components/atoms/SignupForm";
import Product from "./components/pages/Product";

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow">
          {/* Router qui mène vers les diffèrentes pages, NavBar et Foooter ne change pas */}
          <Router>
            <Routes>
              {/* URL vers Home */}
              <Route path="/" element={<Home />} />

              {/* URL vers page de connexion, soit Login, soit Signup */}
              <Route path="/connexion" element={<Connexion />}>
                <Route path="login" element={<LoginForm />} />
                <Route path="signup" element={<SignupForm />} />
              </Route>

              <Route path="/product" element={<Product />}/>
            
            
            </Routes>
          </Router>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;