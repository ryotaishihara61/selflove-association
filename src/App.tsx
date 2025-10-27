import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import ThemeSongPlayer from './components/ThemeSongPlayer'


function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <AppRoutes />
        </div>
        <ThemeSongPlayer />
      </div>
    </BrowserRouter>
  )
}

export default App