import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>Warning: there are no tags</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  handlingIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.badgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handlingIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }

  badgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
