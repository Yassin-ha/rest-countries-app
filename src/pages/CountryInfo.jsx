import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryInfo = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();
  // console.log(name);

  const fetchData = async () => {
    try {
      const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const country = await resp.json();
      setCountry(...country);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(country);

  const {
    flags,
    region,
    population,
    capital,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = country;
  const countryName = country?.name?.nativeName;
  const countryFlag = flags?.svg;
  console.log(flags);

  return (
    <section className="height-section container mx-auto pt-16 dark:bg-veryDark dark:text-white">
      <Link to={"/"} className="flex items-center gap-2 border rounded-md shadow-md w-fit px-4 py-1">
        <FaArrowLeftLong /> Back
      </Link>
      <article className="pt-12 gap-2 lg:flex ">
        <div className="image lg:w-1/2">
          <img
            src={countryFlag}
            alt={flags?.alt}
            className="lg:h-[370px] lg:w-[520px]"
          />
        </div>
        <div className="text pt-5 lg:w-1/2 lg:relative">
          <h1 className="font-bold text-3xl pb-5">{name}</h1>
          <div className="lg:flex lg:justify-between">
            <div className=" leading-7">
              <p className=" font-bold">
                Native Name:{" "}
                <span className=" font-semibold">
                  {countryName
                    ? Object.values(countryName)[0].common
                    : undefined}
                </span>
              </p>
              <p className=" font-bold">
                Population: <span className=" font-semibold">{population}</span>
              </p>
              <p className=" font-bold">
                Region: <span className=" font-semibold">{region}</span>
              </p>
              <p className=" font-bold">
                Sub Region: <span className=" font-semibold">{subregion}</span>
              </p>
              <p className=" font-bold">
                Capital: <span className=" font-semibold">{capital}</span>
              </p>
            </div>
            <div className="leading-7 mt-10 lg:mt-0">
              <p className=" font-bold">
                Top Level Domain: <span className=" font-semibold">{tld}</span>
              </p>
              <p className=" font-bold">
                Currencies:{" "}
                <span className=" font-semibold">
                  {currencies ? Object.values(currencies)[0].name : undefined}
                </span>
              </p>
              <p className=" font-bold">
                Languages:{" "}
                {languages
                  ? Object.keys(languages).map((key) => {
                      return (
                        <span key={key} className=" font-semibold">
                          {languages[key]}{" "}
                        </span>
                      );
                    })
                  : undefined}
              </p>
            </div>
          </div>
          <p className="font-bold pb-10 mt-10 lg:absolute lg:bottom-0 lg:mt-0">
            Borders Countries:{" "}
            {borders
              ? Object.keys(borders).map((key) => {
                  return (
                    <span
                      key={key}
                      className=" px-6 py-1 border mr-2 font-semibold dark:border-none dark:bg-darkBlue"
                    >
                      {" "}{borders[key]}
                    </span>
                  );
                })
              : undefined}
          </p>
        </div>
      </article>
    </section>
  );
};

export default CountryInfo;
