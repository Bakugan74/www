import React from "react"


class Users extends React.Component {
    users = [
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

    render() {
        if (this.users.length > 0)
            return (<div>
                {this.users.map((el) => (<div className="user" key={el.id}>
                    <h3>{el.firstname} {el.lastname}</h3>
                    <p>{el.bio}</p>
                    <b>{el.isHappey ? 'Счастлив 😜' : 'Не особо 😒'}</b>
                </div>))}</div>)
        else
        return (<div className="user">
            <h3>Ползователей нет</h3>
        </div>)
    }
}

export default Users