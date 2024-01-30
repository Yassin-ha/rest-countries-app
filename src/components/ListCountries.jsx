import Loading from "../pages/Loading";
import Cart from "./cart";

// eslint-disable-next-line react/prop-types
const ListCountries = ({ countries, loading }) => {
  console.log(countries);

  if(loading){
    return <Loading />
  }

  if (countries.status === 404) {
    return (
      <section className="pt-32 height-section font-bold">
        <h2 className="mx-auto mp-0 w-fit">No Country Found!</h2>
      </section>
    );
  }

  return (
    <section className="container height-section grid place-content-center mx-auto py-12 gap-6 grid-cols-1 md:grid-cols-3 md:gap-10 xl:grid-cols-4">
      {countries.map((country) => {
        return <Cart key={country.id} {...country} />;
      })}
    </section>
  );
};

export default ListCountries;
