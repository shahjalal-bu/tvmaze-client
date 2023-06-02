import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="text-muted">Error Occurs</h2>
            <Link to="/" className="btn btn-primary">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
