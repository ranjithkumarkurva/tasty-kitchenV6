import React from 'react'

const ToggleChanges = React.createContext({
  activeRating: 'Highest',
  ChangeActiveRating: () => {},
  SavedList: [],
  addToSavedList: () => {},
  Count: 1,
  onUpdateCount: () => {},
  onClickAdd: false,
  onClickChange: () => {},
})

export default ToggleChanges
