```javascript
// pages/about.js

export default function About() {
  // Solution: Define MyComponent() inside the About component or import it
  function MyComponent() {
    return <p>This is a test component.</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>{MyComponent()}</p>
    </div>
  );
}
```