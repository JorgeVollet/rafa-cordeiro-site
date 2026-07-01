import { createBrowserRouter } from "react-router-dom";
import { App, InnerPage } from "@/App";
import { AdminLayout } from "@/components/layout/AdminLayout";

// Páginas públicas
import { Home } from "@/pages/Home";
import { Sobre } from "@/pages/Sobre";
import { Tratamentos } from "@/pages/Tratamentos";
import { Condicao } from "@/pages/Condicao";
import { Blog } from "@/pages/Blog";
import { Post } from "@/pages/Post";
import { Contato } from "@/pages/Contato";
import { Privacidade } from "@/pages/Privacidade";
import { NotFound } from "@/pages/NotFound";

// Painel (Fase 5)
import { Login } from "@/pages/admin/Login";
import { Dashboard } from "@/pages/admin/Dashboard";
import { EditorPost } from "@/pages/admin/EditorPost";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // Home: hero full-bleed (sem o respiro do InnerPage)
      { index: true, element: <Home /> },
      // Demais páginas públicas: com respiro no topo (header flutuante)
      {
        element: <InnerPage />,
        children: [
          { path: "/sobre", element: <Sobre /> },
          { path: "/tratamentos", element: <Tratamentos /> },
          { path: "/tratamentos/:slug", element: <Condicao /> },
          { path: "/blog", element: <Blog /> },
          { path: "/blog/:slug", element: <Post /> },
          { path: "/contato", element: <Contato /> },
          { path: "/privacidade", element: <Privacidade /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "editor", element: <EditorPost /> },
      { path: "editor/:id", element: <EditorPost /> },
    ],
  },
]);
