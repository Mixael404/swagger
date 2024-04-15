import Layout from '../components/layouts/main-layout/layout'
import RequestBody from './request-body/request-body'
import { data } from '../data'
import { useCallback, useState } from 'react'
import Header from '../components/header/header'


export function App() {
   const [selectedService, setSelectedService] = useState('jsonplaceholder')
   const services = Object.keys(data)
   // console.log(services);
   const callbacks = {
      changeSelectedService : useCallback((serviceName) => {
         setSelectedService(serviceName)
      }, [])
   }
  return (
     <Layout>
        <Header services={services}  selectedService={selectedService} changeSelectedService={callbacks.changeSelectedService} />
        <RequestBody data={data} selectedService={selectedService} />
     </Layout>
  )
}

