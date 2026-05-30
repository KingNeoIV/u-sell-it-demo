import { Routes, Route } from "react-router-dom";
import PublicPage from "../pages/publicPage";
import Layout from "../layout/Layout";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <PublicPage />
          </Layout>
        }
      />
    </Routes>
  );
}
