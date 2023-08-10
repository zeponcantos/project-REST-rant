const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"></link>         
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Place</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def



// body {
//     background-color: lightblue;
//     text-align: center;
//   }
  
//   main {
//     margin-right: 20px;
//     margin-left: 20px;
//     background-color: white;
//   }
  