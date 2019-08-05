import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

const AppLayout = ({ isFullScreen = false, children }) => {
  return isFullScreen ? (
    <>
      <Main children={children} />
    </>
  ) : (
    <>
      <Header />
      <Main children={children} />
      <Footer />
    </>
  )
}

export default AppLayout
