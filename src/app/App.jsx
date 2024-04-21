import Layout from '../components/layouts/main-layout/layout'
import RequestsList from './requests-list/requests-list'
import Header from './header/header'
import { ServiceContextProvider } from '../context/service-context'


export function App() {
  return (
   <ServiceContextProvider>
     <Layout>
        <Header />
        <RequestsList />
     </Layout>
   </ServiceContextProvider>
  )
}

