import Footer from "./Footer";
import Header from "./Header";

type mainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <div className="boxed-page">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
