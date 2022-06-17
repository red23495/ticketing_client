const ErrorAlert = ({ message, details }) => {
  return (
    <div className="alert alert-danger">
      <h4>{message}</h4>
      <ul>
        {details.map(({ message }, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorAlert;