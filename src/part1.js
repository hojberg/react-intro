var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        Hello World.
      </div>
    );
  }
});

React.render(
  <Greeter/>,
  document.querySelector('body')
);
