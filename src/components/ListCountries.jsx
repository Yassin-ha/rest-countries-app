import { useState } from "react";
import Loading from "../pages/Loading";
import Cart from "./cart";

// eslint-disable-next-line react/prop-types
const ListCountries = ({ countries, loading }) => {
  const [visible, setVisible] = useState(12);

  const showMoreData = () => {
    setVisible(visible + 8);
  };

  console.log(visible);
  console.log(countries.length);

  if (loading) {
    return <Loading />;
  }

  if (countries.status === 404) {
    return (
      <section className="pt-32 height-section font-bold">
        <h2 className="mx-auto mp-0 w-fit">No Country Found!</h2>
      </section>
    );
  }

  return (
    <>
      <section className="container height-section grid place-content-center mx-auto py-12 gap-6 grid-cols-1 md:grid-cols-3 md:gap-10 xl:grid-cols-4">
        {countries.slice(0, visible).map((country) => {
          return <Cart key={country.id} {...country} />;
        })}
      </section>
      {visible >= countries.length ? undefined : (
        <div className="flex justify-center pb-10">
          <button
            className="border rounded-md shadow-md px-4 py-1 dark:border-none dark:bg-darkBlue"
            onClick={showMoreData}
          >
            Load
          </button>
        </div>
      )}
    </>
  );
};

export default ListCountries;
