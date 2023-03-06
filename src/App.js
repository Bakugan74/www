import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Lorem ipsum dolor sit amet consectetur, OSDIfjh oisdF ksDMF i',
                    age: 40,
                    isHappey: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum dolor sit amet consectetur, OSDIfjh josdnfosdnfo dsfk mn ,sdf sdf d',
                    age: 22,
                    isHappey: false
                }

            ]
        }
        this.AddUser = this.AddUser.bind(this)
    }
    render() {
        return (<div >
            <Header title="Список пользователей" />
            <main>
                <Users users={this.state.users} />
            </main>
            <aside>
                <AddUser onAdd={this.AddUser} />
            </aside>
        </div>)
    }

    AddUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }
}
// Comment
export default App