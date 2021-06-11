# useToc

Create easy to use data for building table of content for you react component.

## Installation

```sh
npm i usestoc
```

or

```sh
yarn add usestoc
```

## Usage Example

```javascript
import Toc from ".components/Toc";
import useToc from 'usetoc';

export default function App() {
  const toc = usesToc(".container h3");

  return (
    <div className="App">
      <Toc tocData={toc} />
      // ...
  )
}

```

---

### Demo

[Sand Box](https://codesandbox.io/s/cold-rgb-65f06?file=/src/Toc.js)

---
