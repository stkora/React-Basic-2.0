const =Filter =() => {
    return (
        <div className="filter">
           <div className="filter_control">
            <lebel>
                Filter by year
            </lebel>
            <select>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>

           </div>
        </div>
    )
}
export default Filter;