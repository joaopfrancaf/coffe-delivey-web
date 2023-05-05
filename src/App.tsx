import RoutesApp from "./Routes";
import Header from "./components/Header";
import { createServer } from "miragejs"

import data from './data.json'

createServer({
  routes() {
    this.get("api/coffe", () => {
      return data
    })
  },
})


export default function App() {

  return (
    <>
      <Header />
      <RoutesApp />
    </>
  )
}