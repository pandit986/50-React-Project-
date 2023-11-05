import { useState, useEffect } from "react";

const Joke = () => {
  const [joke, setJoke] = useState([]);
  const [singleJoke, setSingleJoke] = useState({
    // id: 35,
    // title: "Knock-Knock Joke",
    // content:
    //   "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here.",
  });
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://random-jock-backend.onrender.com/api/jokes"
      );
      if (response.ok) {
        const data = await response.json();
        setJoke(data.data);
      } else {
        console.error("Failed to fetch joke");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  function jokeHandler() {
    const length = joke.length;
    const num = Math.floor(Math.random() * (length - 1)) + 1;
    setSingleJoke(joke[num]);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <p className="joke-text">
            {singleJoke?.content ||
              joke[Math.floor(Math.random() * (joke.length - 1)) + 1]?.content}
          </p>
          <button className="joke-button" onClick={jokeHandler}>
            Get Another Joke
          </button>
        </div>
      )}
    </div>
  );
};

export default Joke;
