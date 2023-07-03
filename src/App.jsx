import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      return (currentIndex + 1) % people.length;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      return (currentIndex - 1 + people.length) % people.length;
    });
  };

  const randomPerson = () => {
    setIndex((currentIndex) => {
      currentIndex = Math.floor(Math.random() * people.length);
      return currentIndex;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img alt={name} src={image} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
