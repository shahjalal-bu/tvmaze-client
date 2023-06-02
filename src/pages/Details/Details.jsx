/* eslint-disable react/jsx-no-target-blank */
import { Rating } from "@smastrom/react-rating";
import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import Loading from "../Shared/Loading/Loading";
import Error from "../Shared/Error/Error";
import BookForm from "./BookForm";
const Details = () => {
  const {
    isLoading,
    isError,
    error,
    data: tvDatum,
  } = useQuery(["tvData"], () =>
    fetch("https://api.tvmaze.com/search/shows?q=all").then((res) => res.json())
  );
  const { id } = useParams();
  let matchData;

  if (!isLoading && !isError) {
    matchData = tvDatum.find((el) => el.show.id == id);
  }

  //render to ui
  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;
  if (!isLoading && !isError)
    return (
      <>
        <div className="container">
          <div className="row p-3">
            <div className="col-md-4">
              <img
                src={matchData?.show.image.original}
                alt="Movie Poster"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h1 className="mt-4">{matchData?.show.name}</h1>
              <p className="text-muted">
                Release Date:{" "}
                {moment(matchData?.show.premiered).format("DD MMMM YYYY")}
              </p>
              <h5>Overview</h5>
              <p
                dangerouslySetInnerHTML={{ __html: matchData?.show.summary }}
              ></p>

              <h5>Genre</h5>
              <p>
                {matchData?.show.genres.map((el, index) => (
                  <Fragment key={index}> | {el}</Fragment>
                ))}
              </p>
              <Rating
                style={{ maxWidth: 180 }}
                value={
                  matchData?.show.rating.average
                    ? Math.round(Number(matchData?.show.rating.average) / 2)
                    : 0
                }
                readOnly
              />
              <h5>Runtime</h5>
              <p>{matchData?.show.averageRuntime} minutes</p>
              <div className="d-grid gap-2 my-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Book A Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
        <BookForm name={matchData?.show.name} />
      </>
    );
};

export default Details;
