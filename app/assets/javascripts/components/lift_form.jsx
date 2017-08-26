this.LiftForm = React.createClass({
  getInitialState: function() {
    return {
      date: '',
      liftname: '',
      ismetric: '',
      weightlifted: '',
      repsperformed: '',
      onerm: ''
    };
  },
  handleValueChange: function(e) {
    var obj, valueName;
    valueName = e.target.name;
    return this.setState((
      obj = {},
      obj["" + valueName] = e.target.value,
      obj
    ));
  },
  valid: function() {
    return this.state.date && this.state.liftname && this.state.ismetric && this.state.weightlifted && this.state.repsperformed && this.state.onerm;
  },
  handleSubmit: function(e) {
    e.preventDefault();
    return $.post('', {
      lift: this.state
    }, (function(_this) {
      return function(data) {
        _this.props.handleNewLift(data);
        return _this.setState(_this.getInitialState());
      };
    })(this), 'JSON');
  },
  render: function() {
    return React.DOM.form({
      className: 'form-inline',
      onSubmit: this.handleSubmit
    }, React.DOM.div({
      className: 'form-group'
    }, React.DOM.input({
      type: 'date',
      className: 'form-control',
      placeholder: 'date',
      name: 'date',
      value: this.state.date,
      onChange: this.handleValueChange
    }), React.DOM.input({
      type: 'text',
      className: 'form-control',
      placeholder: 'liftname',
      name: 'liftname',
      value: this.state.liftname,
      onChange: this.handleValueChange
    }), React.DOM.input({
      type: 'boolean',
      className: 'form-control',
      placeholder: 'ismetric',
      name: 'ismetric',
      value: this.state.ismetric,
      onChange: this.handleValueChange
    }), React.DOM.input({
      type: 'number',
      className: 'form-control',
      placeholder: 'weightlifted',
      name: 'weightlifted',
      value: this.state.weightlifted,
      onChange: this.handleValueChange
    }), React.DOM.input({
      type: 'number',
      className: 'form-control',
      placeholder: 'repsperformed',
      name: 'repsperformed',
      value: this.state.repsperformed,
      onChange: this.handleValueChange
    }), React.DOM.input({
      type: 'number',
      className: 'form-control',
      placeholder: 'onerm',
      name: 'onerm',
      value: this.state.onerm,
      onChange: this.handleValueChange
    }), React.DOM.button({
      type: 'submit',
      className: 'btn btn-primary',
      disabled: !this.valid()
    }, 'Create Lift')));
  }
});
