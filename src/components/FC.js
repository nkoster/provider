import {useContext} from 'react'
import {ThemeContext, ThemeUpdateContext} from '../context/ThemeContext'

export function FC() {
  const darkTheme = useContext(ThemeContext)
  const toggleTheme = useContext(ThemeUpdateContext)
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  console.log(darkTheme)
  return (
    <>
      <h1 style={themeStyle}>aap</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}
