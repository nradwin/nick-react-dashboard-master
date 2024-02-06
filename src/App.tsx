import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/routes'
function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<FullPageLoader />}> */}
      {/* <Providers> */}
      <AppRoutes />
      {/* </Providers> */}
      {/* </Suspense> */}
    </BrowserRouter>
  )
}
export default App
