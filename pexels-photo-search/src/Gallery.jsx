import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Photo from "./Photo";
import Pagination from "./Pagination";

const Gallery = () => {
  const fetchCurated = async () => {
    const url = `https://api.pexels.com/v1/curated/?page=1&per_page=10`;
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f91700001000001d3694f5f3f444938a2621cfc666c0cc4",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`response is not okay.`);
        }
        console.log(response);
        return response.json();
      })
      .then((body) => {
        console.log(body);
        return body;
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetchCurated()
      .then((res) => {
        setResponse(res);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="Gallery">
      {!response ? (
        <p>Loading...</p>
      ) : response.length === 0 ? (
        <p>
          <i>No results</i>
        </p>
      ) : (
        <div className="paginationContainer">
          <Pagination
            direction={"prev"}
            currentPage={response.page}
            nextPageUrl={response.next_page}
            prevPageUrl={response.prev_page}
          />
          <div className="galleryPhotos">
            <Photo photoData={response.photos[0]} />
            <Photo photoData={response.photos[1]} />
            <Photo photoData={response.photos[2]} />
            <Photo photoData={response.photos[3]} />
            <Photo photoData={response.photos[4]} />
            <Photo photoData={response.photos[5]} />
            <Photo photoData={response.photos[6]} />
            <Photo photoData={response.photos[7]} />
            <Photo photoData={response.photos[8]} />
            <Photo photoData={response.photos[9]} />
          </div>
          <Pagination
            direction={"next"}
            currentPage={response.page}
            nextPageUrl={response.next_page}
            prevPageUrl={response.prev_page}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
