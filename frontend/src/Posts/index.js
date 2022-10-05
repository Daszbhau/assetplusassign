import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'


/**
 * The below components shows the working example of axios for API calls.
 * Also Material UI is integrated for design.
 */


function TestingAPI() {
    const [post, setPost] = React.useState({});

    function findPost(testposts, name){
        console.log(testposts.length);
        for (let i=0; i < testposts.length; i++){
            console.log(testposts[i]);
            if(testposts[i].name == name){
                console.log("true");
                setPost(testposts[i]);
            }
        }
    }

    const [posts, setPosts] = React.useState(undefined);

    return (
        <Card style={{ width: "320px", margin: "20px", padding: "20px" }}>
            <CardHeader title="Test Component"></CardHeader>
            <CardActions>
                <Button
                    variant="contained"
                    onClick={async () => {
                        const response = await axios.get(`http://localhost:8000/post`);
                        setPosts(response.data);
                        console.log(posts);
                        console.log(response.data);
                    }}>
                    Click to Test
                </Button>
            </CardActions>
            <CardContent>
                <Typography variant='body1'> 
                    <Button onClick={() => findPost(posts, "name1")}>test</Button>
                    name: {post.name}
                    desc: {post.desc}
                </Typography>
            </CardContent>

            <CardActionArea>
                <Typography variant='caption'>You can make all the changes here -{'>'} <u><em>src/Posts/index.js</em></u> </Typography>
            </CardActionArea>

        </Card>


    )
}

export default function Posts() {
    // You can delete testingAPI component and start your assignment.    
    return <TestingAPI />
}
