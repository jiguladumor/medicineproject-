
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer';
import Home from './Container/Home';
import { Route, Router, Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Auth from './Container/Auth/Auth';
import Contact from './Container/Contact/Contact';
import card from './Componets/card/card';
import PublicRoute from './Route/Publicroute/PublicRoute';
import Private from './Route/Private/Private';

import Listitem from './Container/Formik/Listitem';
import Booklist from './Container/Formik/Booklist';
import { Provider } from 'react-redux'
// import store, { configure } from './Redux/Store';
import { ThemeContext, ThemeProvider } from './Context_api/ThemeContext';
import { SnackbarProvider } from 'notistack';
import { persistor, store  } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history';
function App() {

  
      // jignasha 
  // const store = configure();
  return (
    <>  
     
      <SnackbarProvider  >
        <ThemeProvider>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/departments"} component={Department} />
              <Route exact path={"/doctor"} component={Doctor} />
              <Route exact path={"/about"} component={About} />
              <Route exact path={"/contact"} component={Contact} />
              <Route exact path={"/data"} component={card} />
              <Route   exact path={"/primary"} component={Auth} />
              {/* <Private exact path={"/Bookapointment"} component={Booklist}/> */}
              <Route exact path={"/Bookapointment"} component={Booklist} />
              <Route exact path={"/listapoinment"} component={Listitem} />
            </Switch>
            <Footer />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </SnackbarProvider>
     
    </>
  );
}

export default App;
