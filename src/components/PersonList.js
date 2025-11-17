import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() 
  {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then((res) => {
        console.log('Axios data:', res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error('Error fetching data with axios:', error);
      });
  }

  render() {
    return (
      <div className="user-list-container">
        {this.state.persons.map((person) => (
          <div className="user-card-wrapper" key={person.login.uuid}>
            <div className="user-card">
              <div className="user-left">
                <img
                  src={person.picture.large}
                  alt={`${person.name.first} ${person.name.last}`}
                  className="user-img"
                />
                <button className="details-btn">Details</button>
              </div>

              
              <div className="user-right">
                <h3 className="user-name-line">
                  {person.name.title} {person.name.first} {person.name.last} -{' '}
                  {person.login.uuid}
                </h3>

                <p>
                  <strong>User Name:</strong> {person.login.username}
                </p>
                <p>
                  <strong>Gender:</strong> {person.gender.toUpperCase()}
                </p>
                <p>
                  <strong>Time Zone Description:</strong>{' '}
                  {person.location.timezone.description}
                </p>
                <p>
                  <strong>Address:</strong>{' '}
                  {person.location.street.number} {person.location.street.name},{' '}
                  {person.location.city}, {person.location.state},{' '}
                  {person.location.country} - {person.location.postcode}
                </p>
                <p>
                  <strong>Email:</strong> {person.email}
                </p>
                <p>
                  <strong>Birth Date and Age:</strong>{' '}
                  {person.dob.date} ({person.dob.age})
                </p>
                <p>
                  <strong>Register Date:</strong> {person.registered.date}
                </p>
                <p>
                  <strong>Phone:</strong> {person.phone}
                </p>
                <p>
                  <strong>Cell:</strong> {person.cell}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;