import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Pagination.css';

export default class Pagination extends Component {
  getPageRoute(i) {
    const routeBase = this.props.routeBase || '';
    const routeEnd = this.props.routeEnd || '';

    i = Math.max(i, 1);
    i = Math.min(i, this.props.pageCount);

    return `${routeBase}${i}${routeEnd}`;
  }

  render() {
    const currentPage = this.props.currentPage || 1;
    const pageCount = this.props.pageCount || 1;
    const pageBuffer = this.props.pageBuffer || 2;

    const prevButton = (
      <Link to={this.getPageRoute(currentPage - 1)} className="previous-link">
        &#8592; Prev
      </Link>
    );

    const nextButton = (
      <Link to={this.getPageRoute(currentPage + 1)} className="next-link">
        Next &#8594;
      </Link>
    );

    let startPageRange = currentPage - pageBuffer;
    let endPageRange = currentPage + pageBuffer;

    if (startPageRange < 1) {
      endPageRange -= (startPageRange - 1);
      startPageRange = 1;
    }

    if (endPageRange > pageCount) {
      startPageRange -= (endPageRange - pageCount);
      if (startPageRange < 1) {
        startPageRange = 1;
      }
      endPageRange = pageCount;
    }

    const startPages = [];
    const mainPages = [];
    const endPages = [];

    if (startPageRange > 1) {
      startPages.push(<Link to={this.getPageRoute(1)}>1</Link>);
      startPages.push(<span>...</span>);
    }

    for (let i = startPageRange; i <= endPageRange; i++) {
      if (i === Math.floor(currentPage)) {
        mainPages.push(<span className="active-page">{ i }</span>);
      } else {
        mainPages.push(<Link to={this.getPageRoute(i)}>{ i }</Link>);
      }
    }

    if (endPageRange < pageCount) {
      endPages.push(<span>...</span>);
      endPages.push(<Link to={this.getPageRoute(pageCount)}>{ pageCount }</Link>);
    }
    return (
      <div className="pagination">
        { prevButton }
        { startPages }
        { mainPages }
        { endPages }
        { nextButton }
      </div>
    );
  }
}
