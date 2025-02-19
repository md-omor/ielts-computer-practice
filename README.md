# Ecommerce Application - Folder Structure

This is a scalable **Next.js** project folder structure designed for large-scale e-commerce applications. It ensures modularity, maintainability, and ease of scaling as the application grows, with clear separations between business logic, UI components, state management, and routing.

## Folder Structure

```bash
/src
  /assets
  /components
  /features
  /pages
  /layouts
  /providers
  /services
  /hooks
  /context
  /utils
  /config
  /types
  /store
  /routes
  /tests
  /api
  /i18n
```

---

### **Folder Explanation**

#### 1. `/assets`

This folder holds static resources such as images, fonts, styles, icons, and any other non-JS assets.

- **Examples:** `logo.svg`, `icons/`, `images/`, `fonts/`, `styles/`

#### 2. `/components`

Contains reusable UI components. The **Atomic Design** approach can be used to organize components into atoms, molecules, organisms, and templates. This structure allows for building **small, reusable components** that can be combined into more complex components.

- **Structure Example:**

  ```bash
  /components
    /atoms
      Button.tsx
      LazyLoadPhoto.tsx
    /molecules
      MainNavbar.tsx
      SocialLogin.tsx
    /organisms
      Header.tsx
      Footer.tsx
    /common
      /form
        Form.tsx
        FormWrapper.tsx
        InputWrapper.tsx
      /loader
        ButtonLoader.tsx
  ```

  - **`atoms`**: Small, independent components (buttons, inputs, icons) used across the application.
  - **`molecules`**: More complex components that combine multiple atoms (e.g., a `Navbar` combining `Logo`, `SearchInput`, and `Buttons`).
  - **`organisms`**: Larger UI components that include molecules and atoms (e.g., a `Header` combining `Navbar` and `CartIcon`).
  - **`common`**: Utility components shared across different UI elements (e.g., `FormWrapper`, `ButtonLoader`).

#### 3. `/features`

Feature-based folders for specific business logic. Each feature folder can contain its own components, services, hooks, and context, making it easy to scale or modify features independently.

- **Structure Example:**

  ```bash
  /features
    /cart
      CartCard.tsx
      CartDetails.tsx
    /product
      ProductCard.tsx
      ProductDetails.tsx
  ```

  - **Feature-specific hooks**, components, and context should live here. For example, the cart feature might have its own logic for adding/removing items from the cart, and the product feature could have product-specific hooks or services.

#### 4. `/modules`

This folder contains the main **page components** corresponding to the app's routes. Each page imports components or features and represents a unique screen/view in the application.

- **Examples:** `Home.tsx (page)`, `ProductDetails.tsx (page)`, `Cart.tsx (page)`

#### 5. `/layouts`

Layouts define the overall structure of different pages, such as headers, footers, sidebars, and wrappers.

- **Examples:** `MainLayout.tsx (layout)`, `AuthLayout.tsx (layout)`, `AdminLayout.tsx (layout)`

#### 6. `/providers`

This folder holds **global providers** for third-party libraries or application-wide contexts, such as `ThemeProvider` or `AuthProvider`.

- **Examples:** `ThemeProvider.tsx`, `AuthProvider.tsx`

#### 7. `/services`

Contains **API services** and other shared business logic. This is where you make your API calls or interact with the backend, currently we are avoiding `actions` folder under `app/actions.

- **Examples:** `authService.ts`, `productService.ts`, `orderService.ts`

#### 8. `/hooks`

This folder contains **custom React hooks** used across the app. For feature-specific hooks, those should live within the respective feature folder.

- **Examples:** `useAuth.ts`, `useFetch.ts`, `useDebounce.ts`

#### 9. `/context` not necessary in this project.

~~For global **state management** using React's Context API or third-party state management like Redux.~~

~~- **Examples:** `AuthContext.ts`, `CartContext.ts`~~

#### 10. `/utils`

Contains **reusable utility functions** and helper modules used throughout the application.

- **Examples:** `dateFormat.ts`, `mathUtils.ts`, `storage.ts`

#### 11. `/config`

Holds **configuration files** like environment settings, constants, or route configuration.

- **Examples:** `constants.ts`, `routes.ts`, `appConfig.ts`

#### 12. `/types`

Contains **TypeScript type definitions and interfaces**. This folder is essential for maintaining type safety across your project.

- **Examples:** `product.d.ts`, `user.d.ts`, `cart.d.ts`

#### 13. `/store`

For **Redux Toolkit** or other centralized state management libraries. This folder contains the store configuration and slices.

- **Structure Example:**

  ```bash
  /store
    /slices
      cartSlice.ts
      productSlice.ts
      userSlice.ts
    store.ts
  ```

  - **Example of `cartSlice.ts`:**

    ```typescript
    // store/slices/cartSlice.ts
    import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
      name: "cart",
      initialState: {
        items: [],
      },
      reducers: {
        addItem: (state, action) => {
          state.items.push(action.payload);
        },
        removeItem: (state, action) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        },
      },
    });

    export const { addItem, removeItem } = cartSlice.actions;
    export default cartSlice.reducer;
    ```

  - **Example of `productSlice.ts`:**

    ```typescript
    // store/slices/productSlice.ts
    import { createSlice } from "@reduxjs/toolkit";

    const productSlice = createSlice({
      name: "product",
      initialState: {
        products: [],
      },
      reducers: {
        setProducts: (state, action) => {
          state.products = action.payload;
        },
      },
    });

    export const { setProducts } = productSlice.actions;
    export default productSlice.reducer;
    ```

  - **Example of `userSlice.ts`:**

    ```typescript
    // store/slices/userSlice.ts
    import { createSlice } from "@reduxjs/toolkit";

    const userSlice = createSlice({
      name: "user",
      initialState: {
        userInfo: null,
      },
      reducers: {
        setUserInfo: (state, action) => {
          state.userInfo = action.payload;
        },
        clearUserInfo: (state) => {
          state.userInfo = null;
        },
      },
    });

    export const { setUserInfo, clearUserInfo } = userSlice.actions;
    export default userSlice.reducer;
    ```

  - **Example of `store.ts`:**

    ```typescript
    // store/store.ts
    import { configureStore } from "@reduxjs/toolkit";
    import cartReducer from "./slices/cartSlice";
    import productReducer from "./slices/productSlice";
    import userReducer from "./slices/userSlice";

    const store = configureStore({
      reducer: {
        cart: cartReducer,
        product: productReducer,
        user: userReducer,
      },
    });

    export default store;
    ```

#### 14. `/routes` not necessary in this project.

~~Contains the **React Router** configuration, where each route is defined. It can include logic for protected routes, lazy loading, and route-based layouts.~~

~~- **Structure Example:**~~

```bash
/routes
  AppRouter.tsx
  ProtectedRoute.tsx
```

- **Example of `AppRouter.tsx`:**

  ```typescript
  // routes/AppRouter.tsx
  import React from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import HomePage from "../pages/Home";
  import ProductDetails from "../pages/ProductDetails";
  import Cart from "../pages/Cart";
  import routes from "../config/routes";

  const AppRouter = () => (
    <Router>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.PRODUCT_DETAILS} component={ProductDetails} />
        <Route path={routes.CART} component={Cart} />
      </Switch>
    </Router>
  );

  export default AppRouter;
  ```

#### 15. `/tests`

Unit, integration, and end-to-end tests. This folder can also include testing utilities and mock data.

- **Structure Example:**
  ```bash
  /tests
    /unit
      cart.test.ts
      product.test.ts
    /integration
      appIntegration.test.ts
  ```

#### 16. `/api`

Contains **API-related logic**, including Axios setup, request interceptors, and global error handling.

- **Examples:** `axiosInstance.ts`, `requestInterceptors.ts`

#### 17. `/i18n`

For **internationalization and localization** files, including locale data and translations.

- **Examples:** `en.json`, `fr.json`, `bn.json`

---

## Folder and File Naming Conventions

- Use **`PascalCase`** for React components: `ProductCard.tsx`
- Use **`camelCase`** for hooks, utilities, and services: `useFetch.ts`, `authService.ts`
- Group related files together when appropriate:
  ```bash
  /components
    /Button
      Button.tsx
      Button.css
      Button.test.ts
  ```

---

## Key Takeaways for Scalability:

1. **Feature-Based Structure:** Each domain or feature gets its own folder, making the project more scalable.
2. **Reusable Components:** Common UI components are stored in `/components` and follow **Atomic Design** patterns for reuse.
3. **Modular Layouts:** Organizing pages and layouts separately promotes clean, modular design.
4. **Separation of Concerns:** Business logic, UI, and data fetching are separated for maintainability.
5. **State Management:** Centralized state management (like Redux) is organized in `/store` for scalability.
# ielts-computer-practice
