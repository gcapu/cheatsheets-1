---
title: React.js
category: React
ads: true
tags: [Featured]
updated: 2024-07-25
weight: -10
keywords:
  - React
  - Hooks
  - useState
  - useEffect
  - Functional Components
intro: |
  [React](https://reactjs.org/) is a JavaScript library for building user interfaces. This guide targets modern React (v16.8+) and focuses on hooks and functional components.
---

{%raw%}

Functional Components
---------------------
{: .-three-column}

### Basic Component

A component is a function that returns JSX. It can be as simple as this:

```jsx
function MyComponent() {
  return <div>Hello world!</div>
}
```

Props are passed as the first argument.

```jsx
function Hello({ name }) {
  return <div>Hello, {name}!</div>
}
```

### Rendering

Use `createRoot` (from `react-dom/client`) to render a component into the DOM.

```jsx
import { createRoot } from 'react-dom/client'

const el = document.getElementById('root')
const root = createRoot(el)
root.render(<Hello name="John" />)
```

### Fragments

Components can return multiple elements by wrapping them in a `Fragment`.

```jsx
import { Fragment } from 'react'

function UserInfo({ user }) {
  return (
    <Fragment>
      <UserAvatar src={user.avatar} />
      <p>{user.name}</p>
    </Fragment>
  )
}
```

You can also use the shorter `<>...</>` syntax.

```jsx
function UserInfo({ user }) {
  return (
    <>
      <UserAvatar src={user.avatar} />
      <p>{user.name}</p>
    </>
  )
}
```

### Children

Content passed between a component's tags is available as `props.children`.

```jsx
<AlertBox>
  <h1>You have pending notifications.</h1>
</AlertBox>
```

```jsx
function AlertBox({ children }) {
  return <div className="alert-box">{children}</div>
}
```

Hooks
-----
{: .-three-column}

### useState

The `useState` hook adds state to a functional component.

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

`useState` returns an array with the current state value and a function to update it.

### useEffect

The `useEffect` hook performs side effects in functional components.

```jsx
import { useState, useEffect } from 'react'

function FriendStatus({ friendID }) {
  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribe(friendID, handleStatusChange)
    return () => {
      ChatAPI.unsubscribe(friendID, handleStatusChange)
    }
  }, [friendID]) // Re-run if friendID changes

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}
```

The function passed to `useEffect` runs after every render. The optional second argument is an array of dependencies; the effect will only re-run if one of these dependencies changes.

The return function is a "cleanup" function that runs when the component unmounts.

### useContext

The `useContext` hook allows you to subscribe to React context without introducing nesting.

```jsx
const ThemeContext = React.createContext('light')

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return <Button theme={theme} />
}
```

### useReducer

An alternative to `useState` for managing complex state logic.

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

### useCallback and useMemo

`useCallback` memoizes functions, while `useMemo` memoizes values. They are useful for performance optimization.

```jsx
// Memoizes the callback, so it's not recreated on every render
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// Memoizes the result of the calculation
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef

`useRef` creates a mutable object that persists across renders. It's often used to access DOM elements.

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

JSX Patterns
------------
{: .-two-column}

### Conditional rendering

You can use standard JavaScript conditionals.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

Or inline with the logical `&&` operator:

```jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```

### Lists

Use `map()` to render a list of items. Don't forget to provide a unique `key` for each item.

```jsx
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      )}
    </ul>
  );
}
```

Class Components (Legacy)
-------------------------
{: .-three-column}

### Basic class component

```jsx
class Hello extends React.Component {
  render () {
    return <div className='message-box'>
      Hello {this.props.name}
    </div>
  }
}
```

### State

```jsx
class Counter extends React.Component {
  state = { count: 0 }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}
```

### Lifecycle

| Method                   | Description                                  |
| ------------------------ | -------------------------------------------- |
| `constructor(props)`     | Before rendering                             |
| `render()`               | Renders the component                        |
| `componentDidMount()`    | After rendering (DOM available)              |
| `componentDidUpdate()`   | After a component update                     |
| `componentWillUnmount()` | Before DOM removal                           |
| `shouldComponentUpdate()`| Skips `render()` if returns false            |
| `componentDidCatch()`    | Catches errors                               |

Also see
--------

* [React website](https://reactjs.org) _(reactjs.org)_
* [Awesome React](https://github.com/enaqx/awesome-react) _(github.com)_
* [React patterns](https://reactpatterns.com/) _(reactpatterns.com)_

{%endraw%}
