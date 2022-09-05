import style from "./index.module.css"

const SearchResult = ({request, amount}) => {

    const reqTrim = request.trim()

    function endWordGoods(int, array) {
        return (array = array || ['товар', 'товара', 'товаров']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
    }
    function endWordFinds(int, array) {
        return (array = array || ['найден', 'найдено', 'найдено']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
    }

    if (reqTrim)
    return (
        <div className={style.SearchTextResult}>
            <p>
                По запросу <strong>{reqTrim}</strong> {endWordFinds(amount)} <strong>{amount}</strong> {endWordGoods(amount)}
            </p>
        </div>
    )

}

export default SearchResult