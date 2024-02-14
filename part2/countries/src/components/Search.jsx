const Search = ({newFilter, handleFilterChange}) => {
    return (
        <form>
            <label htmlFor="search">find countries </label>
            <input value={newFilter} type="text" id="search" name="search" onChange={handleFilterChange}></input>
        </form>
    )
}

export default Search