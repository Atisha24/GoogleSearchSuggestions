// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updatedSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updatedSearchInput(suggestion)
  }

  return (
    <li className="search-list">
      <p className="suggestion-name">{suggestion}</p>
      <button
        type="button"
        onClick={onClickSuggestion}
        className="arrow-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
