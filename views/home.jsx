const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
           <main>
    <h1>HOME</h1>
    <div>
      <img src="/images/bird.jpg" alt="Colorful Bird" width="200"height="200" />
      <div>
      Photo by <a href="https://unsplash.com/@miklevasilyev?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mikhail Vasilyev</a> on <a href="https://unsplash.com/photos/gGC63oug3iY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

        </Def>
    )
}

module.exports = home
