const  Country = ({country}) => {  

return (
    <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
            {Object.keys(country.languages).map(key => 
            <li key={key}>{country.languages[key]}</li>)}
        </ul>
        <img src={country.flags.png} />
    </div>
)
}

export default Country