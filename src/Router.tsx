
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/app" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
