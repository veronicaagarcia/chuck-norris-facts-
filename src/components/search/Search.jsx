import { useState } from "react"
import PropTypes from "prop-types"
import { InputGroup, FormControl, Form, Button, Container } from "react-bootstrap"

export function Search ({searchFact}) {

    const [ text, setText] = useState('')

    function getFact (e) {
        e.preventDefault()
        searchFact(text)
    }

    return (
        <Container>
            <h2>Find your own saying chucksnorristic</h2>
            <Form onSubmit={getFact}>
                <InputGroup>
                    <FormControl onChange={(e)=>setText(e.target.value)} placeholder="Free text search" value={text} name="text"/>
                </InputGroup>
                <hr />
                <Button variant="outline-info" type="submit"> Search </Button>
            </Form>
        </Container>
    )
}

Search.propTypes = {
    searchFact : PropTypes.func.isRequired
}