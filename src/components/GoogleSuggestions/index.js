// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updatedSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="suggestion-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-image"
            alt="google logo"
          />
          <div className="search-items-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-lists">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionDetails={eachSuggestion}
                  key={eachSuggestion.id}
                  updatedSearchInput={this.updatedSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
