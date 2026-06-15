const Error = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <h2>{message}</h2>

      {onRetry && (
        <button onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;