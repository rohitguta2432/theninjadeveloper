import React from 'react'
import '../Home/Home.css'
import { Button } from 'react-bootstrap'
import {Card} from 'react-bootstrap'
function Home() {
    return (
        <div className="home">
            <div className="home__child">
                <Card>
                    <Card.Img/>
                    <Card.Body>
                        <Card.Title>Java Developer</Card.Title>
                        <Card.Text>
                            Having 5 + years Of Experience Java developer
                         </Card.Text>
                        <Button variant="primary">View Profile</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Home
