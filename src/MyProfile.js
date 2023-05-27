import React from 'react';

class MyProfile extends React.Component {
  render() {
    const { name, image } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <img src={image} alt={name} style={{width:'200px',height:'200px'}}/>
      </div>
    );
  }
}

export default MyProfile;