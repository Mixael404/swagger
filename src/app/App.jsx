import Layout from '../components/layouts/main-layout/layout'
import RequestsList from './requests-list/requests-list'
import Header from './header/header'
import { ServiceContextProvider } from '../context/service-context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export function App() {
  return (
    <BrowserRouter>
      <ServiceContextProvider>
        <Routes>
          <Route path='/swagger' element={
            <Layout>
              <Header />
              <RequestsList />
            </Layout>
          } />
        </Routes>
      </ServiceContextProvider>
    </BrowserRouter>
  )
}


