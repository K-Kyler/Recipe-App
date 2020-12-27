import React from 'react';

const Form = ({ search, setSearch, setQuery, searchPlaceholder }) => {
    const updateSearch = event => {
        setSearch(event.target.value);
    }

    const getSearch = event => {
        event.preventDefault();
        setQuery(search);
    }

    return (
        <div className="container pt-4">
             <form onSubmit={getSearch} className="search-form">
                <div className="form-group row">
                    <div className="col-12 offset-md-3 col-md-6 col-3 px-5 d-flex">
                        <input 
                            type="text" 
                            className="form-control mr-1" 
                            value={search}
                            onChange={updateSearch}
                            placeholder={searchPlaceholder}
                        />
                        <button className="btn btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;