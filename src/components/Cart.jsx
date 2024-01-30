import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cart = ({ name, flags, population, region, capital }) => {
  // eslint-disable-next-line react/prop-types
  const countryName = name.common;
  // eslint-disable-next-line react/prop-types
  const countryFlag = flags.png;

  return (
    <Link to={`/country/${countryName}`}>
      <article className="border-2 rounded-md overflow-hidden cursor-pointer mx-4 dark:border-none dark:bg-darkBlue ">
        <img src={countryFlag} alt="flag" className="w-full lg:h-44" />
        <div className="p-4">
          <h3 className="my-2 font-bold ">{countryName || name}</h3>
          <p className="font-semibold">
            Population: <span className="font-thin">{population}</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-thin">{region}</span>
          </p>
          <p className="font-semibold">
            Capital: <span className="font-thin">{capital}</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Cart;
