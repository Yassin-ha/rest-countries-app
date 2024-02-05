import ListCountries from "../components/ListCountries";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
// import data from "../../data.json";

const url = "https://restcountries.com/v3.1/all";

const Home = () => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const dataAll = await resp.json();
      setCountries(dataAll);
      setData(dataAll);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  // search 
  useEffect(() => {

    const fetchCountry = async () => {
      setLoading(true);
      const resp = await fetch(`https://restcountries.com/v3.1/name/${search}`);
      const country = await resp.json();
      setCountries(country);
      setLoading(false);
    };
    if (search === "") {
      setCountries(data);
    } else {
      fetchCountry();
    }
  }, [search]);

  // filter 
  useEffect(() => {
    if (region === "All") {
      setCountries(data);
    } else {
      const newCountriesR = data.filter((country) => country.region === region);
      setCountries(newCountriesR);
    }
  }, [region]);

  return (
    <section className="dark:bg-veryDark dark:text-white ">
      <div className=" container mx-auto pt-8 sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center border rounded-md w-full shadow lg:w-1/3 sm:w-1/2 p-3 dark:border-none dark:bg-darkBlue">
          <IoSearchOutline className="mr-2" />
          <input
            type="text"
            value={search}
            onChange={handleChangeSearch}
            placeholder="Search for country..."
            className="outline-none w-full dark:bg-darkBlue"
          />
        </div>
        <div className="filter w-2-/3 mt-10 border p-3 shadow sm:mt-0 sm:w-52 dark:border-none dark:bg-darkBlue">
          <select
            name="region"
            id="region-select"
            onChange={handleChangeRegion}
            className="outline-none w-full bg-white dark:bg-darkBlue"
          >
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <ListCountries countries={countries} loading={loading} />
    </section>
  );
};

export default Home;
