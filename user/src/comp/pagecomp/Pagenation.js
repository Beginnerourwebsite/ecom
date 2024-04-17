import React, { useState, useEffect, useContext } from 'react';
import Context from '../all/Context';

const Pagenation = ({ items }) => {
    let [show, insert] = (useContext(Context))
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    const itemsPerPage = 5;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const loadNextPage = () => {

        const nextPageItems = items.slice(startIndex, endIndex);
        
        // localStorage.setItem("startandend", JSON.stringify({ start: startIndex, end: endIndex }))
        insert({ ...show, "api": nextPageItems })
        setCurrentItems(nextPageItems);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        loadNextPage();
    }, [currentPage, items,show.add]);

    return (


        <nav>
            <ul>
                <li>
                    <button onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1} className="tp-pagination-prev prev page-numbers">
                        <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00017 6.77879L14 6.77879" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.24316 11.9999L0.999899 6.77922L6.24316 1.55762" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </li>
                {pageNumbers.map((pagenumber, index) => {
                    if (index == currentPage - 1) {

                        return (
                            <li key={index}>
                                <span className="current">{pagenumber}</span>
                            </li>
                        )
                    }
                    else
                        return (
                            <li key={index}>
                                <a >{pagenumber}</a>
                            </li>
                        )

                })}

                <li>
                    <button onClick={() => handlePageChange(currentPage + 1)}
                        disabled={endIndex >= items.length} className="next page-numbers">
                        <svg width={15} height={13} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9998 6.77883L1 6.77883" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.75684 1.55767L14.0001 6.7784L8.75684 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );


};


export default Pagenation;
