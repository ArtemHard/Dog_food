import Cards from "../components/Cards/Cards";
import SearchResult from "../components/SearchResult/SearchResult";

const Catalog = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <SearchResult request={props.request} amount={props.amount} />
            <Cards data={props.data} />
        </div>
    )
}

export default Catalog