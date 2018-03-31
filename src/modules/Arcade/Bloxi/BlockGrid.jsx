import React, { Component } from 'react';

// Renders an instance of the game matrix.
export default class BlockGrid extends Component {
  render() {
    const model = this.props.matrix;
    const rows = model.rows().map((col) => {
      return (
        <tr>{col.map((num) => {
          return <td className={"grid-square-" + num} />;
        })}
        </tr>
      );
    });
    return (
      <table className="grid-table">
        { rows }
      </table>
    );
  }
}
