import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import './SayluaView.css';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


// The main Saylua layout component.
export default class SayluaView extends Component {
  componentDidMount() {
    this.fixNavbar();
    window.addEventListener('scroll', this.fixNavbar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fixNavbar);
  }

  fixNavbar() {
    const header = document.getElementById('header');
    if (!header) return;

    const top = header.offsetHeight;
    if (document.body.scrollTop > top ||
      document.documentElement.scrollTop > top) {
      document.getElementById('navbar').classList.add('navbar-fixed');
    } else {
      document.getElementById('navbar').classList.remove('navbar-fixed');
    }
  }

  render() {
    const content = this.props.children;
    const title = this.props.title;
    const fullTitle = 'Saylua - ' + (title || 'Adoptable Fantasy Pets');
    return (
      <DocumentTitle id="saylua" title={fullTitle}>
        <div id="saylua">
          <Header />
          <Navbar />

          <div id="main-body" className="main-body">
            <Sidebar />
            <div id="main-body-column" className="main-body-column">
              <div id="main-body-content" className="main-body-content">
                { content }
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}
