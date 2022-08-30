import Card from "../Card/Card";
import data from '../../data.json';


const Cards = () => {
    return (
        <div className="container">
            { data.map(el => <Card {...el} key={el.id}/>) }
            
        </div>
    )
}

export default Cards