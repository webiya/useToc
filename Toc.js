export default function Toc({ tocHeaders }) {
  return (
    <nav className="tocNav">
      <h4>Table of contents</h4>

      <ol className="listOfContent">
        {tocHeaders.map(({ text, id }) => (
          <li key={id}>
            <a href={`/#${id}`}>{text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
