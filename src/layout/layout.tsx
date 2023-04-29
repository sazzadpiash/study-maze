import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const Layout = ({ children }: any) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;