import './App.css';
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <div className="container content">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 left-menu-display">
                        <LeftMenu />
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <MainContent />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
