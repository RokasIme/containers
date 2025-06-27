import { BrowserRouter, Route, Routes } from "react-router";
import { PublicLayout } from "./layout/PublicLayout";
import { PageHome } from "./pages/PageHome";
import { PageLogin } from "./pages/PageLogin";
import { PageRegister } from "./pages/PageRegister";
import { PageDashboard } from "./pages/PageDashboard";
import { PrivateLayout } from "./layout/PrivateLayout";
import { PageNotFound } from "./pages/PageNotFound";
import { UserContextWrapper } from "./context/UserContextWrapper";
import { PageContainers } from "./pages/PageContainers";
import { PageContainerInner } from "./pages/PageContainerInner";

export function App() {
  return (
    <UserContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route index path="/" element={<PageHome />} />
            <Route path="/containers" element={<PageContainers />} />
            <Route path="/containers/:id" element={<PageContainerInner />} />
            <Route path="/register" element={<PageRegister />} />
            <Route path="/login" element={<PageLogin />} />
          </Route>
          <Route Component={PrivateLayout}>
            <Route path="/dashboard" element={<PageDashboard />} />
          </Route>
          <Route Component={PublicLayout}>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextWrapper>
  );
}
