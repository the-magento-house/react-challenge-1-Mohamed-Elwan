import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {counter: 1}
    }
    
    render () {
        return (
            <div>
                <div> Counter: {this.state.counter} </div>
            </div>
        )
    }

    tick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

      componentDidMount() {
          this.intervalID = setInterval(
              () => this.tick(),
              1000
          );
      }
}

export default Counter