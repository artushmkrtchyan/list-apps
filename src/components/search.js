import React, { useState, useEffect } from 'react';
import { debounced300 } from '../helpers/helpers';

const Search = ({ handelSearch, value }) => {
    const [searchValue, setValue] = useState("");

    useEffect(() => {
        if(searchValue && !value){
            setValue(value)
        }
    }, [value]);  // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (value) => {
        setValue(value);

        debounced300(() => handelSearch(value))
    };
    return (
        <header>
            <input
                type="search"
                name="apps"
                placeholder="Search by App"
                value={searchValue}
                onChange={({ target }) => handleChange(target.value)}
            />
        </header>
    )
};

export default Search;