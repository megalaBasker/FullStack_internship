// import  React from'react'
// const Header=() =>{
//     return(
//         <div>
//             <ul>
//                 <li>home</li>
//                 <li>products</li>
//                 <li>contact</li>
//             </ul>
//         </div>
//     )
// }
// export default Header;
import React from 'react';

const Header = () => {
    let data = [1, 2, 3, 4, 5];
    return (
        <div>
            <ul> {/* Wrap the <li> elements in a <ul> or <ol> */}
                {data.map((i, k) => (
                    <li key={k}>{i}</li> // Use a unique key for each <li>
                ))}
            </ul>
        </div>
    );
};

export default Header;