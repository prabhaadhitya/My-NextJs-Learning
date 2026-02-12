WHAT IS Next.js?
=> Next.js is a React framework for building full-stack web applications
    React:
        1. It's not feasible to create a fully-featured application ready for   production
        2. React is a library for building user interfaces
        3. You need to make decisions about other features such as routing, data fetching and more

    Next.js:
    1. It uses React for building user interfaces
    2. Provides additional features that enable you to build production-ready applications
    3. These features include routing, optimized rendering, data fetching, bundling, compiling, and more
    4. You don't need to install additional packages as Next.js provides everything you need
    5. Opinions and conventions should be followed to implement these features    

WHY LEARN Next.js?
=> Next.js simplifies the process of building production-ready web applications
    1. Routing
    2. API routes
    3. Rendering
    4. Data fetching
    5. Styling
    6. Optimization
    7. Dev and prod build system


React Server Components (RSC)
    - React Server Components is a new architecture that was introduced by the React team and quickly adopted by Next.js
    - This architecture introduces a new approach to creating React components by dividing them into two distinct types:
        1. Server components
        2. Client components.    

React Server Components and Routing contd.
    Server Components:
        - By default, Next.js treats all components as Server components
        - These components can perform server-side tasks like reading files or fetching data directly from a database
        - The trade-off is that they can't use React hooks or handle user interactions  

    Client Components:
        - To create a Client component, you'll need to add the "use client" directive at the top of your component file
        - While Client components can't perform server-side tasks like reading files, they can use hooks and handle user interactions
        - Client components are the traditional React components you're already familiar with from previous versions of React 

    - As we get into routing, you'll see practical examples of both types
    - Work with server components that wait for certain operations to complete before rendering content
    - Use client components to take advantage of hooks from the routing module   

Routing:
    - Next.js has a file-system based routing system
    - URLs you can access in your browser are determined by how you organize your files and folders in your code  

Routing conventions:
    1. All routes must live inside the app folder
    2. Route files must be named either page.js or page.tsx
    3. Each folder represents a segment of the URL path
    - When these conventions are followed, the file automatically becomes available as a route.                