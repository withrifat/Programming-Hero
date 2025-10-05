⚡ React Router Crash Notes
🧩 1. Install & Setup

Install:

npm install react-router-dom


Main setup (index.jsx):

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

🧱 2. Create Router

Routes.jsx

import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

🏠 3. Root Layout (with Outlet)

Root.jsx

import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>
      <Outlet /> {/* nested route show korbe */}
    </div>
  );
};

export default Root;

⚙️ 4. Important Hooks
🔹 useNavigate()

Programmatically navigate korar jonno:

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Go to About</button>;
};
# ⚡ React Router Crash Notes

## 🧩 1. Install & Setup

**Install:**
```bash
npm install react-router-dom
```

**Main setup (`index.jsx`):**
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

---

## 🧱 2. Create Router

**`Routes.jsx`:**
```jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
```

---

## 🏠 3. Root Layout (with Outlet)

**`Root.jsx`:**
```jsx
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>
      <Outlet /> {/* nested route show korbe */}
    </div>
  );
};

export default Root;
```

---

## ⚙️ 4. Important Hooks

### 🔹 `useNavigate()`
Programmatically navigate:
```jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Go to About</button>;
};
```

### 🔹 `useParams()`
Get parameters from dynamic route:
```jsx
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
};
```

### 🔹 `useLoaderData()`
Access data from route loader:
```jsx
import { useLoaderData } from "react-router-dom";

const Book = () => {
  const book = useLoaderData();
  return <h3>{book.title}</h3>;
};
```

---

## 🧭 5. Dynamic Routes Example

**`Routes.jsx`:**
```jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import User from "../pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/user/:userId", element: <User /> }, // dynamic route
    ],
  },
]);
```

**`User.jsx`:**
```jsx
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
};
```

---

## 📦 6. Loader Function (Data Fetch Example)

**`Routes.jsx`:**
```jsx
import { createBrowserRouter } from "react-router-dom";
import Book from "../pages/Book";

export const router = createBrowserRouter([
  {
    path: "/book/:id",
    element: <Book />,
    loader: ({ params }) =>
      fetch(`https://api.example.com/books/${params.id}`),
  },
]);
```

**`Book.jsx`:**
```jsx
import { useLoaderData } from "react-router-dom";

const Book = () => {
  const book = useLoaderData();
  return <h2>{book.name}</h2>;
};
```

---

## 🚨 7. Error Page Setup

**`ErrorPage.jsx`:**
```jsx
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
```

---

## 🧠 8. Summary (সরাসরি মনে রাখার মতো)

| Concept                | Purpose                    |
|------------------------|---------------------------|
| `createBrowserRouter()`| Route list বানায়           |
| `RouterProvider`       | Router app এ দেয়           |
| `Outlet`               | Nested route দেখায়         |
| `Link` / `NavLink`     | Page change করে           |
| `useNavigate()`        | Programmatic navigation    |
| `useParams()`          | URL params নেয়             |
| `useLoaderData()`      | Loader data access         |
| `useRouteError()`      | Error handle করে           |
🔹 useParams()

Dynamic route theke parameter nite:

import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
};

🔹 useLoaderData()

Route loader er data access korar jonno:

import { useLoaderData } from "react-router-dom";

const Book = () => {
  const book = useLoaderData();
  return <h3>{book.title}</h3>;
};

🧭 5. Dynamic Routes Example

Routes.jsx

import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import User from "../pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/user/:userId", element: <User /> }, // dynamic route
    ],
  },
]);


User.jsx

import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
};

📦 6. Loader Function (Data Fetch Example)

Routes.jsx

import { createBrowserRouter } from "react-router-dom";
import Book from "../pages/Book";

export const router = createBrowserRouter([
  {
    path: "/book/:id",
    element: <Book />,
    loader: ({ params }) =>
      fetch(`https://api.example.com/books/${params.id}`),
  },
]);


Book.jsx

import { useLoaderData } from "react-router-dom";

const Book = () => {
  const book = useLoaderData();
  return <h2>{book.name}</h2>;
};

🚨 7. Error Page Setup

ErrorPage.jsx

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

🧠 8. Summary (সরাসরি মনে রাখার মতো)
Concept	Purpose
createBrowserRouter()	Route list বানায়
RouterProvider	Router app এ দেয়
Outlet	Nested route দেখায়
Link / NavLink	Page change করে
useNavigate()	Programmatic navigation
useParams()	URL params নেয়
useLoaderData()	Loader data access
useRouteError()	Error handle করে