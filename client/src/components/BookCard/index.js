import React from 'react'
import './style.css'

const BookCard = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h4>Book Title</h4>
                <p>Written by author</p>
                <button>View</button>
                <button>Delete</button>
            </div>
            <div className='row'>
                <div className='col-3'>
                    image
                </div>
                <div className='col-8'>
                    description
                </div>
            </div>
        </div>
    )
}

export default BookCard;
