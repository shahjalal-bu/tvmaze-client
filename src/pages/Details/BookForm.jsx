const BookForm = ({ name }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Book A Movie Ticket
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                Name of Movie
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                value={name}
              />
            </div>
            <div className="input-group input-group-lg my-3">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                Ticket Quantity
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                value={1}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
