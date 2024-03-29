import "./airline.css"
const Airlinecard = ({item}) => {
    return (
      
        <div className="card aircard mt-2" style={{width: "18rem"}}>
            <img className="card-img-top img" src={item.logo} alt="Card image cap" style={{display:"inline-block",width:"250px",height:"100px"}} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title">{item.country}</h5>
                <p className="card-text">{item.slogan}</p>
                <a  href="#" >{item.website}</a>
            </div>
        </div>
      
    )
}

export default Airlinecard
