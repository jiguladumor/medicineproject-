
import Header from './Componets/Header/Header';
import Footer from './Componets/Footer/Footer';
import Home from './Container/Home';
import { Route, Switch } from 'react-router-dom';
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
import { configure } from './Redux/Store';








function App() { 
   const store= configure();
  return (
    <>
      <Provider store= {store}>
        <Header />
        <Switch>
          <PublicRoute exact path={"/"} component={Home} />
          <PublicRoute exact path={"/departments"} component={Department} />
          <PublicRoute exact path={"/doctor"} component={Doctor} />
          <PublicRoute exact path={"/about"} component={About} />
          <PublicRoute exact path={"/contact"} component={Contact} />
          <Private exact path={"/data"} component={card} />
          <PublicRoute restricted={true} exact path={"/primary"} component={Auth} />
          {/* <Private exact path={"/Bookapointment"} component={Booklist}/> */}
          <Private exact path={"/Bookapointment"} component={Booklist} />
          <Private exact path={"/listapoinment"} component={Listitem} />

        </Switch>




        <Footer />
      </Provider>
    </>
  );
}

export default App;
