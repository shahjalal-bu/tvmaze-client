import { Fragment } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Thumbnail = ({ tvData }) => {
  console.log(tvData);
  return (
    <div className="col-md-3" role="button">
      <div className="rounded shadow p-3 position-relative">
        {/* img section */}
        <img
          className="img-fluid rounded"
          style={{ height: "380px" }}
          src={tvData.show.image.original}
        />
        {/* details section  */}

        <div
          className="position-absolute bottom-0  start-0 end-0 w-full  m-3 p-2 text-white rounded-right rounded-bottom"
          style={{ background: "rgba(0, 0, 0, 0.9)" }}
        >
          <div className="fw-bolder fs-3"> {tvData.show.name}</div>
          <div className="fw-bold fw-semibold my-1">{tvData.show.language}</div>
          <div className="d-flex gap-2">
            <p className="text-primary">Genre</p>
            {tvData?.show.genres.map((el, index) => (
              <Fragment key={index}> | {el}</Fragment>
            ))}
          </div>
          <div className="d-grid gap-2 my-2">
            <Link to={`details/${tvData.show.id}`} className="btn btn-dark">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
