import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
