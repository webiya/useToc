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
import useToc from '----';

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

### Dependencies

---
