Quiz!

1. What is a React component? A React component is a reusable piece of code. In fact it is a JS function, which is indeed a reusable piece of code


2. What's wrong with this code? 
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

The code above has the name case wrong, because React components need pascal case (every first letter of a word is capitalized)

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

The code above is wrong because if you return just the function with plain vanilla js syntax, what we are doing is returning a js object. BUT, ReactDOM.render needs a React element as the first parameter, so if we use JSX syntax for referencing a custom React components, so <Header></Header>, what we are doing to is to return the React element, which will later be transpiled in plain DOM element
