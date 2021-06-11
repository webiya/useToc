import { useEffect, useState } from 'react';

export default function (htmlSelector) {
  const [tocData, setTocData] = useState([]);

  useEffect(() => {
    const templateContext = [...document.querySelectorAll(htmlSelector)].map(({ innerText, id }) => ({
      text: innerText,
      id
    }));
    setTocData(templateContext);
    return () => {
      setTocData('');
    };
  }, []);
  return tocData;
}
