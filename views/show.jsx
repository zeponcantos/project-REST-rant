const React = require('react')
const Def = require('./default')

function show ({ place }) {
    return (
        <Def>
          <main>
            <h1>{place.name}</h1>
          </main>
        </Def>
    )
};

module.exports = show;

// const React = require('react')
// const Def = require('../default')

// function show ({ place }) {
//     return (
//         <Def>
//           <main>
//             <h1>{place.name}</h1>
//           </main>
//         </Def>
//     )
// };

// module.exports = show;

