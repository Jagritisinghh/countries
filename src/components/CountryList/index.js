import './index.css'

const CountryList = props => {
  const {countryDetails, onClickVisit} = props
  const {name, id, isVisited} = countryDetails

  const visitCountry = () => {
    onClickVisit(id)
  }

  const isCountryVisited = isVisited ? (
    <p className="visited">Visited</p>
  ) : (
    <button type="button" className="visit-btn" onClick={visitCountry}>
      Visit
    </button>
  )

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isCountryVisited}
    </li>
  )
}
export default CountryList
