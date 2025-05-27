import Header from './components/Header'
import Body from "./components/Body"
import Footer from "./components/Footer"
import DiagonalSection from './components/DiagonalSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <DiagonalSection />
      <Body/>
      <Footer/>
    </div>
  )
}
