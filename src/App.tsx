import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import ThemeSongPlayer from './components/ThemeSongPlayer'
import ScrollToTop from './components/ScrollToTop'
import BlogBanner from './components/BlogBanner'


function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <AppRoutes />
        </div>
        <ThemeSongPlayer />
        <BlogBanner />
      </div>
    </BrowserRouter>
  )
}

export default App