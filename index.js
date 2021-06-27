import { useEffect, useState } from 'react';

const updateClassLists = (list, method) => {
  list.forEach(({ selector, className }) => {
    const element = document.querySelector(selector)?.classList;
    if (!element) return;

    if (method === 'add') {
      element.add(className);
    }

    if (method === 'remove') {
      element.remove(className);
    }
  });
};

export default function (selector, effectDependencies = [], additionalClassList = []) {
  const [tocData, setTocData] = useState([]);

  useEffect(() => {
    const templateContext = [...document.querySelectorAll(selector)].map(({ innerText, id }) => ({
      text: innerText,
      id
    }));
    setTocData(templateContext);
    updateClassLists(additionalClassList, 'add');
    return () => {
      setTocData('');
      updateClassLists(additionalClassList, 'remove');
    };
  }, [...effectDependencies]);

  return tocData;
}
