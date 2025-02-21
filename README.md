# Next.js 15 Client-Side Error: Function Not Defined

This repository demonstrates a common but easily missed error in Next.js 15 applications.  The error occurs when calling a function within a component that's not properly defined in scope on the client-side.

The bug is present in `pages/about.js`. Calling `MyComponent()` results in a client-side error if the function isn't properly defined within the component's scope in a way that is accessible on the client.

The solution demonstrates how to fix the error by ensuring correct function definition and scope.