const Description = (props) => {
  return (
    <div className="cardDescription">
      <h3 className="title">{props.title}</h3>

      <div className="description">
        <span className="descriptionTitle">Descripcion:</span>
        <p className="paragraph">{props.paragraph}</p>
      </div>

      <span className="quantity">Cantidad: {props.quantity} Unidades</span>

      <span className="price">${props.price}</span>
    </div>
  )
}

export default Description;
