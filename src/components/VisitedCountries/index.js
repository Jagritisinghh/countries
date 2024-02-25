import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, removeCountry} = props
  const {imageUrl, name, id} = visitedCountryDetails

  const removeBtn = () => {
    removeCountry(id)
  }

  return (
    <li className="list-items">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="container-1">
        <p className="country-name">{name}</p>
        <button className="remove-btn" type="button" onClick={removeBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
