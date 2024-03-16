import Image from "./Image";
import Description from "./Description";
import ButtonDetails from "./ButtonDetails";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = () => {
  return (
    <div className="cardItems">
      <Image />
      <Description />
        <div className="buttons">
        <ButtonDetails />
        <ButtonAddCart />
        </div>
      
    </div>
  )
}

export default CardItem;
