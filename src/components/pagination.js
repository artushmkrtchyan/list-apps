import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ ...rest }) {
    return (
        <ReactPaginate
            previousLabel={<>&lt;</>}
            nextLabel={<>&gt;</>}
            breakLabel={'...'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            containerClassName={'pagination'}
            activeClassName={'active'}
            {...rest}
        />
    )
}