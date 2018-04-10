import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import './SayluaView.css';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


// The main Saylua layout component.
export default class SayluaView extends Component {
  constructor(props) {
    super(props);
    this.fixNavbarAndSidebar = this.fixNavbarAndSidebar.bind(this);
  }

  componentDidMount() {
    this.fixNavbarAndSidebar();
    window.addEventListener('scroll', this.fixNavbarAndSidebar);
    window.addEventListener('resize', this.adjustSidebarWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fixNavbarAndSidebar);
    window.removeEventListener('resize', this.adjustSidebarWidth);
  }

  fixNavbarAndSidebar() {
    const header = document.getElementById('header');
    if (!header) return;

    const top = header.offsetHeight;
    if (document.body.scrollTop > top ||
      document.documentElement.scrollTop > top) {
      document.getElementById('navbar').classList.add('navbar-fixed');
      document.getElementById('sidebar').classList.add('sidebar-fixed');
      this.adjustSidebarWidth();
    } else {
      document.getElementById('navbar').classList.remove('navbar-fixed');
      document.getElementById('sidebar').classList.remove('sidebar-fixed');
    }
  }

  adjustSidebarWidth() {
    const parentWidth = document.getElementById('sidebar-container').offsetWidth;
    document.getElementById('sidebar').style.width = `${parentWidth}px`;
  }

  render() {
    const content = this.props.children;
    const title = this.props.title;
    const fullTitle = `Saylua - ${title || 'Adoptable Fantasy Pets'}`;
    return (
      <DocumentTitle title={fullTitle}>
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
