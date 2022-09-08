import { useState } from "react";
import "./App.css";

const photos = [
  {
    id: "p1",
    title: "Photo One",
    url: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
  },
  {
    id: "p2",
    title: "Photo Two",
    url: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2",
  },
  {
    id: "p3",
    title: "Photo Three",
    url: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3",
  },
  {
    id: "p4",
    title: "Photo Four",
    url: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <div className="slider-container">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={
              photos[currentIndex].id === photo.id ? "fade" : "slide fade"
            }
          >
            <img src={photo.url} alt={photo.title} className="photo" />
            <div className="caption">{photo.title}</div>
          </div>
        ))}

        <button onClick={prev} className="prev">
          &lt;
        </button>

        <button onClick={next} className="next">
          &gt;
        </button>
      </div>

      <div className="dots">
        {photos.map((photo) => (
          <span
            key={photo.id}
            className={
              photos[currentIndex].id === photo.id ? "dot active" : "dot"
            }
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </>
  );
}

export default App;
