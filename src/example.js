import React from 'react';

class Example1Component extends React.Component {
  submit() {
    alert('Working');
  }
  render() {
    return (
      <div>
        <h1>Exampe1</h1>
        <label>First Name: </label>
        <input type="text" id="fstname" />
        <br />
        <br />
        <label>Last Name: </label>
        <input type="text" id="sndname" />
        <br />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default Example1Component;
