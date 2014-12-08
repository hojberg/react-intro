var App = React.createClass({

  getInitialState: function () {
    return {
      name: ''
    };
  },

  render: function () {
    return (
      <div>
        <NameCapture name={this.state.name} onChange={this.handleNameChange} />
        <Greeter name={this.state.name} />
      </div>
    );
  },

  handleNameChange: function (name) {
    this.setState({ name: name });
  }

});

var NameCapture = React.createClass({
  render: function () {
    return (
      <input type='text' value={this.props.name} onChange={this.handleChange}/>
    )
  },

  handleChange: function (ev) {
    this.props.onChange(ev.target.value);
  }
});

var Greeter = React.createClass({
  render: function () {
    var name = this.props.name;

    return (
      <div>
        Hello {name}
      </div>
    );
  },

});

React.render(
  <App />,
  document.querySelector('body')
);
