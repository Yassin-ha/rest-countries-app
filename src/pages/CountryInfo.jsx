import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loading from "../pages/Loading";

const CountryInfo = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const fetchData = async () => {
    try {
      const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const country = await resp.json();
      setCountry(...country);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if(loading) {
    return <Loading />
  }
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


  return (
    <section className="height-section pt-16 dark:bg-veryDark dark:text-white">
      <div className="container">
        <Link
          to={"/"}
          className="flex items-center gap-2 border rounded-md shadow-md w-fit px-4 py-1"
        >
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
                  Population:{" "}
                  <span className=" font-semibold">{population}</span>
                </p>
                <p className=" font-bold">
                  Region: <span className=" font-semibold">{region}</span>
                </p>
                <p className=" font-bold">
                  Sub Region:{" "}
                  <span className=" font-semibold">{subregion}</span>
                </p>
                <p className=" font-bold">
                  Capital: <span className=" font-semibold">{capital}</span>
                </p>
              </div>
              <div className="leading-7 mt-10 lg:mt-0">
                <p className=" font-bold">
                  Top Level Domain:{" "}
                  <span className=" font-semibold">{tld}</span>
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
            <div className="pb-10 mt-10 lg:absolute lg:bottom-0 lg:mt-0 lg:flex">
              <p className=" py-1 font-bold whitespace-nowrap">
                Borders Countries:
              </p>
              <ul className="flex gap-2 flex-wrap ml-2">
                {borders
                  ? Object.keys(borders).map((key) => {
                      return (
                        <li
                          key={key}
                          className="px-6 py-1 border font-semibold dark:border-none dark:bg-darkBlue"
                        >
                          {borders[key]}
                        </li>
                      );
                    })
                  : undefined}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CountryInfo;
