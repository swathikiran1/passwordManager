import './index.css'

const PasswordItem = props => {
  const {eachItemDetails, isChecked, onDeleteItem} = props
  const {id, website, username, password} = eachItemDetails
  console.log(eachItemDetails)

  const onClickDeleteBtn = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="masked-password-container">
        <div className="profile-container">
          <p className="profile">{website[0].toUpperCase()}</p>
        </div>
        <div>
          <p className="website">{website}</p>
          <p className="name">{username}</p>
          {isChecked ? (
            <p className="name">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </div>
      </div>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onClickDeleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
