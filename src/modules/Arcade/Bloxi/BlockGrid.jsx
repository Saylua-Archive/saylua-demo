import React, { Component } from 'react';

// Renders an instance of the game matrix.
export default class BlockGrid extends Component {
  render() {
    const model = this.props.matrix;
    let i = 0;
    const rows = model.rows().map((col) => {
      i += 1;
      let j = 0;
      return (
        <tr key={`${i}`}>{col.map((num) => {
          j += 1;
          return <td key={`${i} ${j}`} className={`grid-square-${num}`} />;
        })}
        </tr>
      );
    });
    return (
      <table className="grid-table">
        <tbody>
          { rows }
        </tbody>
      </table>
    );
  }
}
