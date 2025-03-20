import { useRouteError } from "react-router";
export const Error404 = () => {
  const { data, status, statusText } = useRouteError();
  //
  return (
    <div className="error">
      <h1>{status}</h1>
      <h2>{statusText}</h2>
      <h3>{data}</h3>
    </div>
  );
};
