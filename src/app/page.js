import Header from './components/Header'
import Body from "./components/Body"
import Footer from "./components/Footer"
import DiagonalSection from './components/DiagonalSection'
import Cards from './components/Cards'
import Main from './components/Main'
import Sponsors from './components/Sponsors'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <Main />
      <Sponsors />
      <Footer />
    </div>
  )
}
