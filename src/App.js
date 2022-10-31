import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data/data";

export default function App() {
  useEffect(() => {
    filterGallery();
  }, []);

  const [gallery, setGallery] = useState(data);
  const filterGallery = () => {
    const max = data.length;
    const id = Math.floor(Math.random() * max + 1);
    const result = data.filter((curData) => {
      return curData.id === id;
    });
    setGallery(result);
  };
  return (
    <>
      <section className="contaner">
        <div className="container">
          {gallery.map((values) => {
            const { id, title, alt, url, fileType } = values;
            return (
              <>
                <div class="container">
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="card text-center col-md-4 mt-3 col-sm-10 p-0">
                      <div class="card-header p-0" id={id}>
                        {(function () {
                          if (fileType === "video" || fileType === "mp4") {
                            return (
                              <video width="auto" height="240" controls>
                                <source src={url} type="video/mp4"/>
                              </video>
                            );
                          } else if (
                            fileType === "image" ||
                            fileType === "images" ||
                            fileType === "img" ||
                            fileType === "jpg" ||
                            fileType === "png" ||
                            fileType === "jpeg"
                          ) {
                            return (
                              <img src={url} alt={alt} class="w-100" />
                            );
                          }
                        })()}
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                      </div>
                      <div class="card-footer text-muted">
                        {" "}
                        <a
                          type="button"
                          className="btn btn-success text-white"
                          onClick={filterGallery}
                        >
                          Change Image
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
