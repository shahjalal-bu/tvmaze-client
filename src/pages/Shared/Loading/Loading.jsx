import "./loading.css";
const Loading = () => {
  return (
    <>
      <div className="spinner-backdrop">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
