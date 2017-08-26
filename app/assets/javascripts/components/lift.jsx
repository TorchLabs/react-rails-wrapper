this.Lift = React.createClass({
  render: function() {
    return React.DOM.tr(null,
                React.DOM.td(null, this.props.lift.date),
                React.DOM.td(null, this.props.lift.liftname),
                React.DOM.td(null, this.props.lift.weightlifted),
                React.DOM.td(null, this.props.lift.repsperformed),
                React.DOM.td(null, this.props.lift.onerm));
  }
});
