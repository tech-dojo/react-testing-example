import React from 'react';
import ReactDOM from 'react-dom';
var ReactTestUtils = require('react-addons-test-utils');
require('jasmine-expect-jsx');



class Count extends React.Component {
    constructor(props, context) {
    super(props, context);
    this.state = {};
    this.state.count = 0;
    this.countIncrease = this.countIncrease.bind(this);
  }

  countIncrease(){
    this.setState({count: this.state.count+1});
  }

  render() {
    return (
<CountChild count = {this.state.count} countIncrease= {this.countIncrease}/>
    );
  }
}

class CountChild extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.countIncrease = this.countIncrease.bind(this);
  }

  countIncrease(){
    this.props.countIncrease();
  }

  render() {
   var count = this.props.count;
    return (
   <div>
          <div>
            <h1>{count}</h1>
            <hr></hr>
          </div>
          <div>
            <button id='countInc' onClick={this.countIncrease}>Increase</button>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById('app'));

   describe('CountChild', () => {

     var buttonClickSuccessSpy;
       const count = 0;

  beforeEach(function(){
    buttonClickSuccessSpy = sinon.spy();
    $(document).on("click", buttonClickSuccessSpy);
  });

  it('should have count = 0', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<CountChild count={count}/>);
    const actual = renderer.getRenderOutput();
    const expected =   <div>
        <h1>0</h1>
        <hr></hr>
      </div>;


   expect(actual).toIncludeJSX(expected);

  });


});
