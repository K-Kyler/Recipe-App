import React from 'react';

const Form = ({ search, setSearch, setQuery }) => {
    const updateSearch = event => {
        setSearch(event.target.value);
    }

    const getSearch = event => {
        event.preventDefault();
        setQuery(search);
    }

    return (
        <div className="container pt-5">
             <form onSubmit={getSearch}>
                <div className="form-group row">
                    <div className="col-12 px-5 d-flex">
                        <input 
                            type="text" 
                            className="form-control mr-1" 
                            value={search}
                            onChange={updateSearch}
                        />
                        <button className="btn btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;