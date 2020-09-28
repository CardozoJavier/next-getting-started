const Error = ({ statusCode }) => (
  statusCode
  ? <h1>An {statusCode} error ocurred on server</h1>
  : <h1>An error occured on client</h1>
);

export default Error;
