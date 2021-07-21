import React from "react"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProductPage from "./pages/ProductPage"
import DetailPage from "./pages/DetailPage"
import HospitalPage from "./pages/hospital/HospitalPage"
import CartPage from './pages/CartPage'
import IndexPage from "./pages/category/IndexPage"
import CreatePage from "./pages/category/CreatePage"
import EditPage from "./pages/category/EditPage"
import UploadPage from "./pages/UploadPage"
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastProvider } from 'react-toast-notifications';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import MemberPage from "./pages/MemberPage"
import PrivateRoute from "./guard/auth"
import UserStoreProvider from "./context/UserContext"
import configureStore from './redux/configureStore'

//redux setup
import { Provider } from 'react-redux'
import PdfReport from "./pages/report/PdfReport"
import ChartReport from "./pages/report/ChartReport"
// import { createStore } from 'redux'
// import rootReducer from './redux/reducers/index'
// const store = createStore(rootReducer)

//redux-persist setup
const { store } = configureStore()

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
        <ToastProvider autoDismiss autoDismissTimeout={4000}>
          <QueryClientProvider client={queryClient}>
            <Router>
              <div>
                <NavBar />
                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route path="/about">
                      <AboutPage />
                    </Route>
                    <Route path="/product">
                      <ProductPage />
                    </Route>
                    <Route path="/detail/:id/title/:title">
                      <DetailPage />
                    </Route>
                    <Route path="/hospital">
                      <HospitalPage />
                    </Route>
                    <Route path="/upload">
                      <UploadPage />
                    </Route>
                    <Route path="/cart">
                      <CartPage />
                    </Route>
                    <Route path="/pdf">
                      <PdfReport />
                    </Route>
                    <Route path="/chart">
                      <ChartReport />
                    </Route>

                    <PrivateRoute path="/member">
                      <MemberPage />
                    </PrivateRoute>

                    <Route path="/register">
                      <RegisterPage />
                    </Route>
                    <Route path="/login">
                      <LoginPage />
                    </Route>

                    {/* nest route */}
                    <Route 
                      path="/category"
                      render={({ match: {url} }) => (
                        <>
                          <Route path={`${url}/`} exact><IndexPage /></Route>
                          <Route path={`${url}/create`}><CreatePage /></Route>
                          <Route path={`${url}/edit/:id`}><EditPage /></Route>
                        </>
                      )}
                    ></Route> 

                  </Switch>
                <Footer />
              </div>
            </Router>
          </QueryClientProvider>
        </ToastProvider>
      </UserStoreProvider>
    </Provider>
  );
}

export default App;
