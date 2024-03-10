import './Country.css';
const Country = ({ country }) => {    //item->country
    const {name,flags} = country;

    console.log(country)
    console.log(name)

    return (
        <div className="country">
            <h3>Name: {name?.common}</h3>
            <p>official: {name.official}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;