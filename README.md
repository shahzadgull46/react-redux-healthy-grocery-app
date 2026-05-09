  # React Performance and Optimization
# React Performance & Optimization Notes

A comprehensive collection of modern React concepts, optimization techniques, custom hooks, bundlers, lazy loading, Suspense, and scalable frontend development patterns.

---

# 📚 Topics Covered

* Single Responsibility Principle
* Modular Architecture
* Custom Hooks
* Reusability & Maintainability
* Online/Offline Detection
* Bundlers
* Modern Frontend Tooling
* ES Modules (ESM)
* Vite Workflow
* Code Splitting
* Lazy Loading
* Suspense
* Tree Shaking
* Chunking
* Server Components
* Modern React Optimization Techniques

---

# 1. Single Responsibility Principle (SRP)

## What is SRP?

Each component should have **one clear responsibility**.

A component should not handle too many things at the same time.

### ❌ Bad Practice

A component:

* Fetching data
* Managing complex logic
* Rendering UI
* Handling multiple unrelated tasks

### ✅ Good Practice

Break large logic into:

* Smaller components
* Custom hooks
* Utility files

---

## Benefits of SRP

### ✔ Better Readability

Other developers can easily understand the code.

### ✔ Better Maintainability

Code becomes easier to manage and update.

### ✔ Better Reusability

Components can be reused in different places.

### ✔ Better Testability

Bugs become easier to find and fix.

Example:

If a bug exists inside a product card fetch logic, we can directly test and fix only that specific logic.

---

# 2. Modular Architecture

## What is Modular Code?

Modular means:

> Breaking the application into smaller independent modules.

Example:

```txt
Header Component
Footer Component
Product Card
Custom Hooks
Utils
```

---

## Benefits of Modular Code

* Easier debugging
* Better code organization
* Easier testing
* Better scalability
* Cleaner project structure

---

# 3. React Hooks

## What are Hooks?

Hooks are special JavaScript functions provided by React.

Examples:

```js
useState
useEffect
useParams
```

Hooks help us:

* Manage state
* Handle side effects
* Reuse logic

---

# 4. Custom Hooks

## What are Custom Hooks?

Custom hooks are reusable JavaScript functions built using React hooks.

They help separate logic from UI.

---

## Why Create Custom Hooks?

### ✔ Better Readability

Components become cleaner.

### ✔ Better Reusability

Logic can be reused in multiple components.

### ✔ Better Maintainability

Code becomes modular.

### ✔ Better Testability

Logic can be tested separately.

---

# Example: Product Info Hook

Instead of fetching data directly inside the component, we create a custom hook.

## Custom Hook

```jsx
import { PRODUCTINFO_URL } from "./constants";
import { useEffect, useState } from "react";

const useProductInfo = (barcode) => {
  const [productInfo, setproductInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(PRODUCTINFO_URL + barcode);
    const json = await data.json();

    setproductInfo(json.product);
  };

  return productInfo;
};

export default useProductInfo;
```

---

## Using the Custom Hook

```jsx
import useProductInfo from "../../../public/utils/useProductInfo";

const ProductInfo = () => {
  const { barcode } = useParams();

  const productInfo = useProductInfo(barcode);
```

---

# 5. Online / Offline Status Feature

We can detect whether the user is online or offline using browser events.

---

## Custom Hook for Online Status

```jsx
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });

    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
```

---

## Using the Hook

```jsx
const onlineStatus = useOnlineStatus();

if (onlineStatus === false) {
  return (
    <h1>
      Looks like you are offline. Please check your network connection.
    </h1>
  );
}
```

---

# 6. Bundlers

## What is a Bundler?

A bundler combines all application files into optimized files for the browser.

Examples:

* Webpack
* Parcel
* Vite

---

## Responsibilities of Bundlers

Bundlers can:

* Bundle files
* Compress code
* Minify JavaScript
* Create development server
* Hot Module Replacement (HMR)
* Code splitting
* Optimization

---

# 7. Earlier Frontend Workflow

Earlier tools like Webpack bundled the entire application immediately.

## Workflow

```txt
All Files → Bundle Everything → Browser
```

---

## Problems in Large Applications

* Slow startup
* Slow HMR
* Slow rebuilds
* Large bundle size
* Poor performance

---

# 8. Modern Frontend Workflow

Modern browsers now support:

# ES Modules (ESM)

Example:

```js
import Header from "./Header.js";
```

Browsers can understand modules directly.

---

# Modern Tools

* Vite
* Next.js
* Turbopack
* Rspack

---

## Modern Development Process

```txt
Files → ES Modules → Browser Directly
```

### Benefits

* Instant startup
* Faster development
* Fast HMR
* Better performance

---

# 9. Production Build Nowadays

Production applications still use bundling.

Why?

Because sending thousands of separate files to the browser is inefficient.

---

## Modern Production Workflow

```txt
Files → Optimized Chunks → Browser
```

Example:

```txt
vendor.js
home.chunk.js
cart.chunk.js
```

---

# 10. Code Splitting

## What is Code Splitting?

Code splitting means loading only the required code.

Example:

```jsx
const About = lazy(() => import("./About"));
```

---

## Benefits

* Smaller bundle size
* Faster loading
* Better performance

---

# 11. Lazy Loading

## What is Lazy Loading?

Lazy loading means loading components/pages only when they are needed.

Earlier:

All pages loaded together.

Nowadays:

Only required pages load first.

---

## Example

```jsx
const UserProfile = lazy(() => import("./components/UserProfile.jsx"));
```

---

## Benefits

* Faster initial loading
* Better optimization
* Smaller bundle size

---

# 12. Suspense

## What is Suspense?

Suspense is a React component used while lazy-loaded components are loading.

---

## Why Suspense is Needed?

Lazy-loaded components load asynchronously.

React needs a fallback UI while waiting.

---

## Example

```jsx
import { lazy, Suspense } from "react";

<Suspense fallback={<h1>Loading...</h1>}>
  <UserProfile />
</Suspense>
```

---

## Important Rule

Lazy-loaded components should always be wrapped inside `Suspense`.

---

# 13. Tree Shaking

## What is Tree Shaking?

Tree shaking removes unused code from the final production bundle.

---

## Earlier

Entire libraries were included even if only one function was used.

---

## Nowadays

Modern bundlers include only the used code.

---

## Benefits

* Smaller JS files
* Better optimization
* Faster loading

---

# 14. Chunking

## What is Chunking?

Chunking means dividing a large application into smaller JavaScript files called chunks.

---

## Earlier

Entire application sent as one large file.

---

## Nowadays

Application divided into smaller chunks.

Example:

```txt
home.chunk.js
cart.chunk.js
admin.chunk.js
```

---

## Benefits

* Faster loading
* Better caching
* Improved performance

---

# 15. Server Components

## What are Server Components?

Server Components run on the server instead of the browser.

Used mainly in:

* Next.js

---

## Earlier

All React components ran in the browser.

This increased JavaScript size.

---

## Nowadays

Some components run on the server and send ready HTML to the browser.

---

## Benefits

* Less JavaScript sent to browser
* Faster rendering
* Better SEO
* Better performance

---

# 16. Modern Optimization Techniques Summary

| Technique         | Purpose                          |
| ----------------- | -------------------------------- |
| Code Splitting    | Load only required code          |
| Lazy Loading      | Load components when needed      |
| Tree Shaking      | Remove unused code               |
| Chunking          | Split app into smaller files     |
| Suspense          | Show fallback UI while loading   |
| Server Components | Move work from browser to server |

---

# 17. Key Takeaways

✅ Keep components lightweight

✅ Follow Single Responsibility Principle

✅ Use modular architecture

✅ Create reusable custom hooks

✅ Use lazy loading for large components

✅ Wrap lazy-loaded components with Suspense

✅ Optimize performance using modern bundlers

✅ Understand modern frontend architecture

---

# 🚀 Technologies Used

* React
* Vite
* React Router DOM
* JavaScript (ES6+)
* Custom Hooks
* Lazy Loading
* Suspense
* Modern Frontend Optimization Techniques

---

# 📌 Final Note

These notes were created while learning modern React architecture, optimization techniques, scalable frontend patterns, and performance-focused development workflows.
