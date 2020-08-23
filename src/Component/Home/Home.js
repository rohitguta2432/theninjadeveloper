import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { ENV } from '../Constant/Constants'
import Axios from 'axios'
function Home() {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        Axios.get(ENV.URL + 'profile')
            .then((response) => {
                setProfile(response.data)
            }).catch((error) => {
                console.log(error)
            })
    })
    return (
        <div className="home">
            <div className="home__child">
                {
                    profile.map((prof) => {
                        return (<Card key={prof.id}>
                            <Card.Img />
                            <Card.Body>
                        <Card.Title>{prof.title}</Card.Title>
                                <Card.Text>
                                {prof.description}
                             </Card.Text>
                                <Button variant="primary">View Profile</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Home
