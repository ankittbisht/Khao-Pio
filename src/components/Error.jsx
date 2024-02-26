import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-800 mb-2">{err.message}</p>
        <p className="text-lg text-gray-800 mb-2">Something went wrong!</p>
        <p className="text-lg text-gray-800 mb-2">
          {err.status}: {err.statusText}
        </p>
      </div>
    </div>
  );
};

export default Error;
