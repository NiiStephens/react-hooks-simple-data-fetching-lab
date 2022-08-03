import React, {useEffect, useState} from "react"


// create your App component here
// Employ the useEFfect Hook
// send a fetch request inside the useEffect hook with the URL
// Display a <p> tag with the text loading when text is rendered the first time
//After API is rendered show dog image with the img tag and alt attribute "A random Dog"
//Export App 

function App () {
    const [image, setImage] = useState("")

    
    useEffect (() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then ((r) => r.json())
        .then ((data) => setImage(data.message))
    }, [])

    //if the page is yet to render anything show loading in <p> tag.
    if(!image) return <p>Loading...</p>

    return (
        <div>
            <img src = {image} alt = "A Random Dog" />
        </div>
    )

}

export default App;