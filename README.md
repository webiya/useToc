# useToc

Create easy to use data for building table of content for you react component.

## 🚧 Under development 🚧

## Installation

```sh
npm i use-toc
```

or

```sh
yarn add use-toc
```

## Usage Example

```jsx
import Toc from './components/Toc';
import useToc from 'use-toc';

export default function App() {
  const toc = usesToc(".container h3");
  // toc = [ {id:"",text:""}, {id:"",text:""}, ...]
  return (
    <div className="App">
      <Toc tocData={toc} />
      <div className="container">
        <h3 id="one">
          Section
          <span role="img" aria-label="imoji">
            🦁
          </span>
        </h3>
        <p>
          Huh? We do now. I'll get it back to you, alright? Yeah. This is it.
          This is the answer. It says here that a bolt of lightning is gonna
          strike the clock tower precisely at 10:04 p.m. next Saturday night.
        </p>
      
        ...
    
    </div>  
  )
}
```

---

### Demo

[Sand Box](https://codesandbox.io/s/cold-rgb-65f06?file=/src/Toc.js)

---
