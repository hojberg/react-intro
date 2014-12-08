var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
});

React.render(
  <Greeter name='Simon'/>,
  document.querySelector('body')
);
