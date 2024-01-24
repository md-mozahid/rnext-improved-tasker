export default function NoTaskFound() {
  return (
    <>
      <div className="py-10 flex flex-grow items-center justify-center">
        <div className="rounded-lg bg-gray-200 p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold text-rose-500">404</h1>
          <p className="text-gray-600">
            Oops! The task you are looking for could not be found.
          </p>
          <a className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
            Go back to Home
          </a>
        </div>
      </div>
    </>
  );
}
