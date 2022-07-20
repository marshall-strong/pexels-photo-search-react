import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Photo from "./Photo";
import Pagination from "./Pagination";
import SearchForPhotos from "./SearchForPhotos";

const Gallery = () => {
  const [displayedUrl, setDisplayedUrl] = useState(null);
  
  const [nextUrl, setNextUrl] = useState(
    `https://api.pexels.com/v1/curated/?page=1&per_page=10`
  );

  const fetchPhotos = async (url) => {
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
        } else {
          setDisplayedUrl(url);
          setNextUrl(null);
          console.log(response);
          return response.json();
        }
        
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
    if (
      (!displayedUrl && nextUrl) ||
      (displayedUrl && nextUrl && (displayedUrl !== nextUrl))
    ) {
      fetchPhotos(nextUrl)
        .then((response) => {
          setResponse(response);
        })
        .catch((e) => console.log(e.message));
    }
  }, [displayedUrl, nextUrl]);

  return (
    <div className="Gallery">
      <div className="SearchContainer">
        <SearchForPhotos />
      </div>
      <div className="galleryContainer">
        {!response ? (
          <p>Loading...</p>
        ) : response.length === 0 ? (
          <p>
            <i>No results</i>
          </p>
        ) : (
          <div className="paginationContainer">
            <Pagination
              prevOrNext={"prev"}
              currentPage={response.page}
              prevPageUrl={response.prev_page}
              nextPageUrl={response.next_page}
              setNextUrl={setNextUrl}
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
              prevOrNext={"next"}
              currentPage={response.page}
              prevPageUrl={response.prev_page}
              nextPageUrl={response.next_page}
              setNextUrl={setNextUrl}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;