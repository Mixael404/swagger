import Layout from '../components/layouts/main-layout/layout'
import RequestsList from './requests-list/requests-list'
import Header from './header/header'
import { ServiceContextProvider } from '../context/service-context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddService } from './add-service/add-service'


export function App() {
  return (
    <BrowserRouter basename='/swagger'>
      <ServiceContextProvider>
        <Routes>
          <Route path='/' element={
            <Layout>
              <Header />
              <RequestsList />
            </Layout>
          } />
          <Route path='/add-service' element={<AddService />} />
          <Route path='*' element={<p>Not found</p>} />
        </Routes>
      </ServiceContextProvider>
    </BrowserRouter>
  )
}


