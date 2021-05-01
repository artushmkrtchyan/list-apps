import React, { useEffect, useState, useCallback } from 'react';
import Sidebar from './sidebar';
import ListItem from './listItem';
import Pagination from './pagination';
import Search from './search';

import { fetchApps } from '../helpers/services';

const initialState = {
    page: 1,
    category: "",
    search: "",
    order: ""
}

const Home = () => {
    const [data, setData] = useState({});
    const [state, setState] = useState(initialState);
    const { category, page, search, order } = state;

    useEffect(() => {
        fetchApps({ category, page, search, order }).then(setData);
    }, [category, page, search, order]);

    const handelSearch = useCallback((search) => {
        setState(prev => ({ ...prev, search, page: 1 }))
    }, []);

    const handelPageChange = ({ selected }) => {
        setState(prev => ({ ...prev, page: selected + 1 }))
    };

    const handleOrder = ({ target }) => setState(prev => ({ ...prev, order: target.value }));

    return (
        <div className="flex-container">

            <Sidebar onChange={(category) => setState({ ...initialState, category })} />

            <section className="apps-list">

                <Search handelSearch={handelSearch} value={search} />

                <div className="order-container">
                    <label>Order</label>

                    <input type="radio" id="asc" value="asc" name="order" checked={order === 'asc'} onChange={handleOrder} />
                    <label htmlFor="asc">Ascending</label>

                    <input type="radio" id="desc" value="desc" name="order" checked={order === 'desc'} onChange={handleOrder} />
                    <label htmlFor="desc">Descending</label>

                    <input type="radio" id="clear-order" value="" name="order" onChange={handleOrder} />
                    <label htmlFor="clear-order">Clear</label>
                </div>

                <ul aria-label="apps">
                    {
                        Array.isArray(data.content) && data.content.length ?
                            data.content.map(item => <ListItem key={item.id} data={item} />)
                            :
                            <li className="text-center">There is not data to show</li>
                    }
                </ul>
                {
                    data.pageCount > 1 && <Pagination onPageChange={handelPageChange} pageCount={data.pageCount} />
                }

            </section>
        </div>
    );
};

export default Home;
