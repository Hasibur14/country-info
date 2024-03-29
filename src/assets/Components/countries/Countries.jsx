import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(item => <Country key={item.cca3}  country={item}></Country>)


            }
        </div>
    );
};

export default Countries;