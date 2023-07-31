const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/error-cat.jpg" alt="error cat" width="200" height="200" />
              Photo by <a href="https://unsplash.com/@bogdanf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bogdan Farca</a> on <a href="https://unsplash.com/photos/CEx86maLUSc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
          </main>
      </Def>
    )
  }
  

module.exports = error404
