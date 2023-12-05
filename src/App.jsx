import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useFetch } from './hooks/useFetch'
import { RandomFact } from './components/randomFact/RandomFact'
import './App.css'
import { Loading } from './components/loading/Loading'
import { Search } from './components/search/Search'

function App() {
  const [ endpoint, setEndpoint ] = useState("random")
  const { data, loading, error } = useFetch(endpoint)

  function searchFact(text){
   
    setEndpoint(`search?query=${text}`)
  }

  return (
    <Container>
      <h1>The Chuck Norris Facts App</h1>

      { loading && (
        <Loading />)
      }

      <RandomFact data={data} />

      <Search searchFact={searchFact} />

    </Container>
  )
}

export default App
