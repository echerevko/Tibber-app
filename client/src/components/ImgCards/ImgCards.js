import React from 'react'
import cards from '../../assets/textContent/textContentImg.json'
import Big_img from '../../assets/logo/Big_img.png'

const ImgCards = () => {
  return (
    <>
      <section className="Img-section">
        <div className="Img-wrapper">
          <img src={Big_img} alt="img" />
        </div>
        <div className="Img-wrapper">
          <div className="Cards">
            {cards?.map((card, i) => {
              return (
                <div className="Card" key={i}>
                  <img src={card.image} alt="Card" />
                  <div className="Text-container">
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
