import React from 'react';

const StarRating = ({rating} : {rating : number}) => {
    //3.3
    const fullStars = Math.floor(rating);  
    console.log(rating);
    //3.3 -3 
    const halfStar = Math.abs(rating - fullStars) 
    const halfStarPercentage = halfStar * 100
    const remaing = 100 - halfStarPercentage
    console.log(halfStar);
    return (
        <div className='flex flex-row'>
            {/* <p>
                {rating} <span className='text-yellow-500'>/5    </span>
            </p> */}

            {[...Array(fullStars)].map((_, index) => (
                <svg 
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className='h-6 w-6 text-goldColor fill-current'
                    viewBox='0 0 24 24'
                >
                    <path d='M12 2.5L9.04 8.53 2.5 9.94l5.4 4.67L6.88 21.5 12 17.42l5.12 4.08-1.02-6.89 5.4-4.67-6.54-1.41z' />
                </svg>
                
            ))}

            {halfStar > 0 && (
               <svg className='h-6 w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" 
                     fill="url(#halfFill)" 
                     strokeLinecap="round" 
                     strokeLinejoin="round"/>
               <defs>
                 <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset={`${halfStarPercentage}%`} style={{ stopColor: '#ffb300', stopOpacity: 1 }} />
                   <stop offset={`${remaing}%`} style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
                 </linearGradient>
               </defs>
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

export default StarRating;