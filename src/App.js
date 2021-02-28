import React, { useState } from 'react'
import Margin from './Margin'
import Recipes from './Recipes'
import Untagged from './Untagged'
import Disabled from './Disabled'
import Incorrect from './Incorrect'
const App = () => {
  const [togglerecipes, setToggleRecipes] = useState(false)
  const [toggleincorrect, setToggleincorrect] = useState(false)
  const [toggleuntagged, setToggleuntaged] = useState(false)
  const [toggledisabled, setToggledisabled] = useState(false)
  const handleincorrect = () => {
    setToggleRecipes(false)
    setToggleincorrect(true)
    setToggledisabled(false)
    setToggleuntaged(false)
  }
  const untagged = () => {
    setToggleuntaged(true)
    setToggleRecipes(false)
    setToggledisabled(false)
    setToggleincorrect(false)
  }
  const disable = () => {
    setToggledisabled(true)
    setToggleRecipes(false)
    setToggleuntaged(false)
    setToggleincorrect(false)

  }
  const allrecipes = () => {
    setToggleRecipes(true)
    setToggleuntaged(false)
    setToggleincorrect(false)
    setToggledisabled(false)
  }
  return (
    <div>
      <Margin />
      <button className="btn btn-outline-primary" onClick={allrecipes}>All Recipes</button>
      <button className="btn btn-outline-primary" onClick={handleincorrect}>Incorrect</button>
      <button className="btn btn-outline-primary" onClick={untagged}>Untagged</button>
      <button className="btn btn-outline-primary" onClick={disable}>Disabled</button>
      {togglerecipes && <Recipes />}
      {toggleuntagged && <Untagged />}
      {toggledisabled && <Disabled />}
      {toggleincorrect && <Incorrect />}
    </div>
  )
}
export default App;