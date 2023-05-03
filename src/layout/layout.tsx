import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AuthProvider from '../Context/AuthProvider';

const Layout = ({ children }: any) => {

    return (
        <div>
            <AuthProvider>
                <Header></Header>
                {children}
                <Footer></Footer>
            </AuthProvider>
        </div>
    );
};

export default Layout;