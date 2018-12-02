import React from "react";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  static propTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();

  // goToStore(event) {
  //   // 1. Stop the form from submitting
  //   event.preventDefault();
  //   // 2. Get the text from that input
  //   console.log(this.myInput);
  //   // 3. Change the page to /store/whatever-they-entered
  //   this.props.push(`/store/`);
  // }

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // console.log(this.myInput.current.value);
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
