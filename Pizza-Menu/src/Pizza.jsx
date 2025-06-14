

export default function Pizza(props){

  return(
    <section className="pizza">
    <div>
    <img src={props.src} alt={props.name} />
    </div>
    <span>
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <p>{props.price}</p>

    </span>

    </section>
  )
}
