
export default function Footer(){

  const openHours = 8 ;
  const closeHours = 20 ;
  const time = new Date().getHours() ;
  return(
    <footer className="footer">
    <div className="order">
    <h3>WE ARE OPEN BETWEEN {openHours}:00 AND {closeHours}:00</h3>
    <p>{time >= openHours && time <= closeHours ? "WE ARE CURRENTLY OPEN, PLACE YOUR ORDER" : "WE ARE CLOSED, WAIT FOR TOMORROW TO PLACE YOUR ORDER"}</p>

    {time >= openHours && time <= closeHours ? <button className="btn">Order now</button> : ""}
    <p>Crafted by @kail</p>
    <h5>&copy;{new Date().getFullYear()}</h5>
    </div>
    </footer>
  )
}
