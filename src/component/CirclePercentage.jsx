
var React    = require('react');
var ProgressElement = React.createClass({
  componentDidUpdate: function() {
    var percent = parseInt(this.props.percent);
    var deg = 360*percent/100 ;
    var element = this.refs.progress.getDOMNode();
    element.style.transform = 'rotate(-'+ deg +'deg)';
  },
  render: function() {
    var percent = Math.floor(this.props.percent);

    return (
      <div className="progress clearfix">
        <div className={ percent > 50 ?  'progress-pie-chart' : 'progress-pie-chart gt-50'  }>
          <div className="ppc-progress">
            <div className="ppc-progress-fill" ref="progress"></div>
          </div>
          <div className="ppc-percents">
            <div className="pcc-percents-wrapper">
              <span>{percent + '%'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProgressElement;
