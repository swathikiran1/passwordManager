import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  onChangeWebsite = e => {
    const inputValue = e.target.value
    this.setState({website: inputValue})
  }

  onChangeUserName = e => {
    const inputValue = e.target.value
    this.setState({username: inputValue})
  }

  onChangePassword = e => {
    const inputValue = e.target.value
    this.setState({password: inputValue})
  }

  onChangeSearchInput = e => {
    const inputValue = e.target.value
    this.setState({searchInput: inputValue})
  }

  onAddBtnClicked = event => {
    event.preventDefault()
    const {passwordsList, website, username, password} = this.state
    console.log(passwordsList)
    const passwordObj = {
      id: v4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, passwordObj],
      website: '',
      username: '',
      password: '',
    }))
  }

  onCheckboxClicked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onDeleteItem = id => {
    const {passwordsList} = this.state
    const updatedList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordsList: updatedList})
  }

  renderNoPasswordView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p className="no-password">No Passwords</p>
    </div>
  )

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      isChecked,
      searchInput,
    } = this.state

    const updatedList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = updatedList.length

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="add-password-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-image"
          />
          <div className="password-inputs-container">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.onAddBtnClicked}>
              <div className="password-container">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="password-container">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                </div>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.onChangeUserName}
                />
              </div>
              <div className="password-container">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo"
                  />
                </div>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="show-password-container">
          <div className="show-password-container1">
            <div className="top-show-container">
              <div className="heading-count-container">
                <h1 className="heading1">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="search-container">
                <div className="search-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-logo"
                  />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr />
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={this.onCheckboxClicked}
              />
              <label htmlFor="checkbox">Show Passwords</label>
            </div>
            {count === 0 ? (
              this.renderNoPasswordView()
            ) : (
              <ul>
                {updatedList.map(eachItem => (
                  <PasswordItem
                    key={eachItem.id}
                    eachItemDetails={eachItem}
                    isChecked={isChecked}
                    onDeleteItem={this.onDeleteItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
