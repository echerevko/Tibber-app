import React from 'react'
import texts from '../../assets/textContent/textContent.json'
import header from '../../assets/textContent/textHeader.json'

const Article = () => {
  return (
    <div>
      <section className="Article">
        <h1>{header[0].title}</h1>
        {texts?.map((text, i) => {
          return <p key={i}>{text.text}</p>
        })}
      </section>
    </div>
  )
}

export default Article
