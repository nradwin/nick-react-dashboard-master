// import { FullPageLoader } from '@/components/loader/FullPageLoader'
// import Loader from '@/components/loader/Loader'
// import {
//     AXIOS_REMOVE_AUTH_TOKEN,
//     AXIOS_SET_AUTH_TOKEN,
// } from '@/middleware/axios'

import Dashboard from "@/screens/dashboard/Dashboard"
import { Route, Routes } from "react-router-dom"



// const authToken = (token: string | null) => {
//     if (token) {
//         AXIOS_SET_AUTH_TOKEN(token)
//     } else {
//         AXIOS_REMOVE_AUTH_TOKEN()
//     }
// }

// const PrivetRoutes = () => {
//     if (useAuthStore.getState().loggedIn) {
//         authToken(useAuthStore.getState().loginToken)
//         return (
//             <Layout>
//                 <Suspense fallback={<Loader />}>
//                     <Outlet />
//                 </Suspense>
//             </Layout>
//         )
//     } else {
//         return <Navigate to="/" />
//     }
// }

// const PublicRoutes = () => {
//     if (useAuthStore.getState().loggedIn) {
//         return <Navigate to="/dashboard" />
//     } else {
//         AXIOS_REMOVE_AUTH_TOKEN()
//         return (
//             <Suspense fallback={<FullPageLoader />}>
//                 <Outlet />
//             </Suspense>
//         )
//     }
// }

const AppRoutes = () => {
    // nProgress.configure({
    //     speed: 500,
    //     trickleSpeed: 900,
    // })
    // const { pathname } = useLocation()
    // useEffect(() => {
    //     nProgress.start()
    //     nProgress.done()
    // }, [pathname])

    return (
        <Routes>
            <Route index path="/" element={<Dashboard />}></Route>
        </Routes>
    )
}

export default AppRoutes
