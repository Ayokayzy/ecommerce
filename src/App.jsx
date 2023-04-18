import { Route, Routes } from "react-router";
import AppNav from "./components/nav";
import Home from "./routes/home/home";
import About from "./routes/about/about";
import Login from "./routes/login/login";
import Shop from "./routes/shop/shop";
import ProtectedRoute from "./components/protected-routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppNav />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
