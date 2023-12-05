import { Container, Card, Button } from 'react-bootstrap'
// import PropTypes from 'prop-types'

export function RandomFact ({data}) {


    // console.log('array', dataresult)
    function handlerGetRandomFact (e) {
        e.preventDefault()
        location.reload()
    }
    
    return(
        <Container>
            <h2>A very wise words</h2>
            <div className='card-facts'>
             { ! data[0]?.result
              ?
                data?.map(item =>(

            <Card key={item.id}>
                <Card.Body>{item.value}</Card.Body>
            </Card> 
                )) 
                : 
                data[0].result.map(item =>(

                    <Card key={item.id}>
                        <Card.Body>{item.value}</Card.Body>
                    </Card> 
                ))
            }
            </div>
            
            <hr />
            <Button variant="outline-info" onClick={handlerGetRandomFact}>Get another fact</Button>
        </Container>
    )
}

// RandomFact.propTypes = {
//     data : PropTypes.objectOf(
//         PropTypes.shape({
//             // icon_url : PropTypes.string,
//             // id : PropTypes.string,
//             // url : PropTypes.string,
//             value : PropTypes.string,
//         }).isRequired
//     )
// }