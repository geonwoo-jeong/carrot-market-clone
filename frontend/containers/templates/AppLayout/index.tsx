import Header from "@containers/organisms/Header";
import Main from "@containers/organisms/Main";
import Footer from "@containers/organisms/Footer";

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
