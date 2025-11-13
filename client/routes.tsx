import { createRoutesFromElements, Route } from 'react-router'
import Layout from './components/Layout'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}></Route>,
)
