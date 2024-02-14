import Country from './Country'
import Weather from './Weather'

const Information = ({filteredCountries, chooseCountry}) => {
    const listStyle = {
        listStyle: "none"
    }  

    if (filteredCountries.length > 10) {
        return (
            <p>Too many matches, please specify your filter.</p>
        )
    } else if (filteredCountries.length > 1) {
        return (
            <ul style={listStyle}>
                {filteredCountries.map(country => <li key={country.cca2}>{country.name.common}<button onClick={chooseCountry} id={country.name.common}>show</button></li>)}
            </ul>
        )
    } else if (filteredCountries.length === 1) {
        const country = filteredCountries[0]
        const capital = country.capital
        return (
            <>
                <Country country={country} />
                <Weather capital={capital} />
            </>
        )
    }
}

export default Information