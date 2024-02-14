import { useState, useEffect } from 'react'
import Search from './components/Search'
import Information from './components/Information'

import countriesService from './services/countries'

function App() {
  const [newFilter,setNewFilter] = useState('')
  const [allCountries, setAllCountries] = useState('')
  const [filteredCountries, setFilteredCountries] = useState('')

  useEffect(() => {
    countriesService.getAll().then(countries => {
      console.log('countries', countries)
      setAllCountries(countries)
      setFilteredCountries(countries)
  })
}, [])

  const handleFilterChange = (e) => {
    let filter
    if (typeof e === 'object') {
      filter = e.target.value
    } else {
      filter = e
    }
    setNewFilter(filter)
    const currentFilteredCountries = allCountries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    setFilteredCountries(currentFilteredCountries)
  }

  const chooseCountry = (e) => {
    const country = e.target.id
    setNewFilter(country)
    setFilteredCountries(country)
    handleFilterChange(country)
  }

  return (
    <>
      <Search newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Information filteredCountries={filteredCountries} chooseCountry={chooseCountry} />
    </>
  )
}

export default App
