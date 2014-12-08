var App = React.createClass({
  getInitialState: function () {
    return {
      name: ''
    };
  },

  render: function () {
    var name = this.state.name;

    return (
      <div>
        <EnterName name={name} onChange={this.handleNameChange}/>
        <hr />
        <Greeter name={name} />
      </div>
    );
  },

  handleNameChange: function (newName) {
    this.setState({ name: newName });
  }
});

var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
});

var EnterName = React.createClass({
  render: function () {
    var name = this.props.name;

    return (
      <div>
        <input type='text' value={name} onChange={this.handleChange} />
      </div>
    );
  },

  handleChange: function (ev) {
    this.props.onChange(ev.target.value);
  }
});

React.render(
  <App />,
  document.querySelector('body')
);
