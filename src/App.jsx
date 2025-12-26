import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Loading } from './components/ui/Loading'

export default function App () {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 p-5'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
