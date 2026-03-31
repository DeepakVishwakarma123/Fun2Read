import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error); // Log the error for development/debugging

  return (
    <div id="error-page" className="flex justify-center items-center flex-col gap-12 text-2xl text-lime-600 font-semibold animate-pulse">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="bg-lime-400 text-white" to="/">Go to the homepage</Link>
    </div>
  );
}

export default ErrorPage