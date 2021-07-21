import React from 'react'
import axios from 'axios'

const AboutPage = () => {

    const [version, setVersion] = React.useState('')

    const getData = async () => {
        const res = await axios.get('https://api.codingthailand.com/api/version')
        setVersion(res.data.data.version)
    }

    React.useEffect(() => {
        
        // async function getData(){
        //     const res = await axios.get('https://api.codingthailand.com/api/version')
        //     setVersion(res.data.data.version)
        // }

        // const car = {
        //     type: 'toyota',
        //     color: 'black',
        //     model: 2019
        // }
        // console.log(`${color} ${model}`)
        const addMessage = (first, ...mess) => {
            return mess.map(m => first + m)
        }
        console.log(addMessage("Hi","JS","React"))

        const summary = (...number) => {
            return number.reduce((first, current) => {
                return first + current
            })
        }
        console.log(summary(1,2,3,4,5))
        const number = [10,20,30]
        const [val1, , val2] = number
        console.log(val1, val2)
        // getData()

    })

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>About Us</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        {
                            version && (
                                <p>
                                    Backend API Version : {version}
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
