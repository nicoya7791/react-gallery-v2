
// This component will display  search is query is not found
const SearchNotFound = () => {
    return (
        <>
            <li className='not-found'>
                <h2 style={{color: 'red'}}>Search not found!</h2>
                <p>Please try searching another subject!</p>
            </li>
        </>

    );
}

export default SearchNotFound;