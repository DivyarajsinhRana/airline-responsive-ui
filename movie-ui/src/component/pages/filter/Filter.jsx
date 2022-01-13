import { SearchOutlined } from "@material-ui/icons"
import './filter.css'


const Filter = (props) => {
   
    return (
        <div className='d-flex justify-content-between mt-3 ml-3'>
            <div className='text-center mx-3 '>
                <h3>{props.length} Airline found</h3>
            </div>
            <div className="d-flex search justify-content-center align-items-center">
                    <input className="form-control mr-sm-2 border-0" type="search" placeholder="Search by country" aria-label="Search" value={props.search} onChange={props.handleChange}/>
                    <span>{<SearchOutlined/>}</span>
            </div>
            <div className='mx-3'>
                <select className="form-select" aria-label="Default select example" onChange={props.handleChange}>
                    <option value="All">All</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Germany">Germany</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Japan">Japan</option>
                    <option value="Austrailia">Austrailia</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Earth">Earth</option>
                    <option value="France">France</option>
                    <option value="Nomansland">Nomansland</option>
                    <option value="Spain">Spain</option>
                    <option value="Allemagne">Allemagne</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Sri Lanka GG">Sri Lanka GG</option>
                    <option value="Sri Lanka TT">Sri Lanka TT</option>
                    <option value="Sri Lanka AA">Sri Lanka AA</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
