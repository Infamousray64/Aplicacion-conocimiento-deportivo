import '../styles/main.scss'

import { useOutlet } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'
import NavigationComponent from '../components/NavigationComponent'
import LandingPage from './LandingPage'

function HomePage() {
  const outlet = useOutlet()

  return (
    <div className="mainlayout">
      <div className="container py-3">
        <NavigationComponent />
        <div>{outlet || <LandingPage />}</div>
        <FooterComponent />
      </div>
    </div>
  )
}

export default HomePage
