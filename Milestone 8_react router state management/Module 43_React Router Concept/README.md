# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Router Concepts

Here are some notes on the React Router setup in this project:

### 1. Router Setup (`main.jsx`)

We use `createBrowserRouter` to define our application's routes. This is the recommended router for all React Router web projects.

```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // ... routes
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

`RouterProvider` is used to render the application and make the router available to all components.

### 2. Nested Routes

Nested routes allow us to create a layout structure where child routes render inside a parent route's component. In our setup, the `Root` component acts as the parent layout.

```javascript
{
  path: "/",
  Component: Root, // The parent layout component
  children: [
    { index: true, Component: Home }, // Renders at the parent's path
    { path: 'mobiles', Component: Mobiles },
    { path: 'about', Component: About },
    // ... other child routes
  ]
},
```

The `Root` component uses the `<Outlet />` component to render the matched child route.

```javascript
// src/components/Root/Root.jsx
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet /> {/* Child routes will be rendered here */}
        </div>
    );
};
```

### 3. Dynamic Routes and Data Loading

Dynamic routes allow us to match URL patterns. For example, `mobiles/:mobileId` will match any URL like `/mobiles/1`, `/mobiles/abc`, etc.

We can also use a `loader` function to load data for a route before it renders. This is a powerful feature for fetching data from an API.

```javascript
{
  path: 'mobiles/:mobileId',
  Component: Mobile,
  loader: ({params}) => fetch(`/mobiles/${params.mobileId}.json`)
},
```

In the `Mobile` component, we can access the loaded data using the `useLoaderData` hook.

```javascript
// src/components/Mobile/Mobile.jsx
import { useLoaderData } from 'react-router-dom';

const Mobile = () => {
    const mobile = useLoaderData();
    // ... render mobile data
};
```

### 4. Navigation

We use the `<Link>` component to navigate between routes. This prevents full page reloads and provides a smoother user experience.

```javascript
// src/components/Header/Header.jsx
import { Link } from 'react-router-dom';

<nav>
    <Link to="/">Home</Link>
    <Link to="/mobiles">Mobiles</Link>
</nav>
```

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
