/*export const Item = ({ item }) => {
    console.log (item)

    return (<>
    <div className="mx-auto my-auto">
        {item.name}
        {item.price}
    </div>
    </>);
} */
import ItemCount from "./ItemCount";

export const ItemDetail = ({ item }) => {


  const handleAdd = () => {
    console.log('agregar al carrito')
  }

  return (<>
    <div className="mx-auto my-auto">
      {item.name}
      {item.price}
      <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
    </div>
  </>);

}