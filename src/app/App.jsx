import Layout from '../components/layouts/main-layout/layout'
import RequestsList from './request-list/requests-list'
import { data } from '../data'
import { useCallback, useState } from 'react'
import Header from '../components/header/header'


export function App() {
   const [selectedService, setSelectedService] = useState('jsonplaceholder')
   const services = Object.keys(data)
   const callbacks = {
      changeSelectedService : useCallback((serviceName) => {
         setSelectedService(serviceName)
      }, [])
   }
  return (
     <Layout>
        <Header services={services}  selectedService={selectedService} changeSelectedService={callbacks.changeSelectedService} />
        <RequestsList data={data} selectedService={selectedService} />
     </Layout>
  )
}

