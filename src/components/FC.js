import {useTheme} from '../context/ThemeContext'

export function FC() {
  const [darkTheme, toggleTheme] = useTheme()
  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  console.log(darkTheme)
  return (
    <>
      <h1 style={themeStyle}>{darkTheme ? 'night' : 'day'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}
