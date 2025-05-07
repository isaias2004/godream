import Header from "../app/components/Header"
import Body from "../app/components/Body"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF]">
      <Header />
      <Body/>
      <Footer/>
    </div>
  )
}
