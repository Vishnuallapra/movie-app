import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'

const MovieAdd = () => {

    var [value,setValue]=useForm({name:"",actor:"",actress:"",director:"",releaseyear:"",camera:"",producer:"",language:""})

    const readValues = () => {
        console.log(value)

    axios.post("https://localhost:8080/addmovies",value).then(
            (response) => {
                console.log(response.data)               

                if(response.data.status=="success")
                {
                    alert("Added Successfully ")
                }
                else
                {
                    alert("Something went wrong")
                }

            }
        )
    }

    return (
        <div>

<TextField
                value={value.name}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                label="Enter Movie Name"/>

                <TextField
                value={value.actor}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="actor"
                label="Actor"/>

                <TextField
                value={value.actress}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="actress"
                label="Actress"/>

                <TextField
                value={value.director}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="director"
                label="Director"/>

                <TextField
                value={value.releaseyear}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="releaseyear"
                label="Enter Release Year"/>

                <TextField
                value={value.camera}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="camera"
                label="Cameraman"/>

                <TextField
                value={value.producer}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="producer"
                label="Producer Name"/>

                <TextField
                value={value.language}
                onChange={setValue}
                variant="outlined"
                margin="normal"
                fullWidth
                name="language"
                label="Language"/>

                <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={readValues}
                >SUBMIT</Button>

            
        </div>
    )
}

export default MovieAdd