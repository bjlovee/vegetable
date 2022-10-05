const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Vegetable</h1>
            <form method='POST' action="/vegetables">
                Name: <input type="text" name="name" placeholder='Name of vegetable Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of vegetable Here'></input><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Vegetable"></input>
            </form>
            </>
        )
    }
}

module.exports = New