import React from 'react'
import cards from '../../assets/textContent/textContentImg.json'
import Big_img from '../../assets/logo/Big_img.png'

const ImgCards = () => {
  return (
    <>
      <section className="Img-section">
        <div className="img-wrapper">
          <img src={Big_img} alt="img" />
        </div>
        <div className="img-wrapper">
          <div className="cards">
            {cards?.map((card, i) => {
              return (
                <div className="card" key={i}>
                  <img src={card.image} alt="Card" />
                  <div className="text-container">
                    <h3>{card.text}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ImgCards
