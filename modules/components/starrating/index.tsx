import React from 'react';

const StarRating = () => {
    const rating = 4.5;
    const fullStars = Math.floor(rating);
    const halfStar = Math.ceil(rating - fullStars) >= 0.5;

    return (
        <div>
            <p>
                3.8 <span className='text-yellow-500'>/5    </span>
            </p>

            {[...Array(fullStars)].map((_, index) => (
                <svg 
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className='h-5 w-5 text-goldColor'
                    viewBox='0 0 24 24'
                >
                    <path d='M12 2.5L9.04 8.53 2.5 9.94l5.4 4.67L6.88 21.5 12 17.42l5.12 4.08-1.02-6.89 5.4-4.67-6.54-1.41z' />
                </svg>
            ))}

            {halfStar && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2.5L9.04 8.53 2.5 9.94l5.4 4.67L6.88 21.5 12 17.42l5.12 4.08-1.02-6.89 5.4-4.67-6.54-1.41z" />
                    <path d="M12 5.5l2.96 6.03 6.54 1.41-5.4 4.67 1.02 6.89L12 17.42V5.5z" />
                </svg>
            )}

            {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                <svg
                    key={index + fullStars}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-current text-gray-400"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2.5L9.04 8.53 2.5 9.94l5.4 4.67L6.88 21.5 12 17.42l5.12 4.08-1.02-6.89 5.4-4.67-6.54-1.41z" />
                </svg>
            ))}
        </div>
    )
}