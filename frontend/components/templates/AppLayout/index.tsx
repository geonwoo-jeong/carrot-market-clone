import Header from "../../organisms/Header";
import Main from "../../organisms/Main";
import Footer from "../../organisms/Footer";

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
  );
};

export default AppLayout;
