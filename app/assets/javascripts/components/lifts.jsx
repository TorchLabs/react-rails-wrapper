this.Lifts = React.createClass({
  getInitialState: function() {
    return {
      lifts: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      lifts: []
    };
  },
  addLift: function(lift) {
    var lifts;
    lifts = this.state.lifts.slice();
    lifts.push(lift);
    return this.setState({
      lifts: lifts
    });
  },
  render: function() {
    var lift;
    return React.DOM.div({
      className: 'lifts'
    }, React.DOM.h1({
      className: 'title'
    }, 'Lifts'), React.createElement(LiftForm, {
      handleNewLift: this.addLift
    }), React.DOM.table({
      className: 'table table-bordered'
    }, React.DOM.thead(null), React.DOM.th(null, 'Date'), React.DOM.th(null, 'Lift Name'), React.DOM.th(null, 'Weight Lifted'), React.DOM.th(null, 'Reps Performed'), React.DOM.th(null, '1 RM'), React.DOM.tbody(null, (function() {
      var i, len, ref, results;
      ref = this.state.lifts;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        lift = ref[i];
        results.push(React.createElement(Lift, {
          key: lift.id,
          lift: lift
        }));
      }
      return results;
    }).call(this))));
  }
});
