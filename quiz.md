1. Why do we need to `import React from "react"` in our files?
Because of the following reasons:
- Scrimba doesn't use React v17 at the moment
- React is a dependency so we need to import the module, because in this module there is the definition of JSX

2. If I were to console.log(page) in index.js, what would show up? A javascript object because this is what JSX is at the root. It creates JS objects that gets transpiled later in HTML


3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
This code has 2 sibling elements. This is wrong because JSX needs one wrapping element that contains the rest


4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative: the logic to build something step by step is delegated to internal methods. The user doesn't need to know about them. Makes the code more readable and easy to understand.
Imperative: everything about the logic to build something is specified step by step.


5. What does it mean for something to be "composable"?
Composable means that something is built and composed of single, indipendent building blocks