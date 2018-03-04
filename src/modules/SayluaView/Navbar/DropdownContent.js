import React from 'react';

import { Link } from 'react-router-dom';

export const dropdownContent = [
  {
    'name': 'Site',
    'icon': 'fa-globe',
    'content': (
      <div className="dropdown-menu menu">
        <h3>General Saylua Stuff</h3>
        <Link to="/home">
          <img src="/img/icons/house.png" alt="house" title="My House" aria-label="My House" /> My House
        </Link>
        <Link to="/news/">
          <img src="/img/icons/newspaper.png" alt="newspaper" title="The News" aria-label="The News" /> Saylua News
        </Link>
        <Link to="/inventory/">
          <img src="/img/icons/box.png" alt="box" title="Inventory" aria-label="Inventory" /> My Inventory
        </Link>
      </div>
    )
  },
  {
    'name': 'Play',
    'icon': 'fa-paw',
    'content': (
      <div className="dropdown-menu menu">
        <h3>Games and Fun</h3>
        <Link to="/adventure/">
          <img src="/img/icons/compass.png" alt="compass" title="Adventure" aria-label="Adventure" /> Adventure
        </Link>
        <Link to="/town/">
          <img src="/img/icons/group.png" alt="people" title="Town Square" aria-label="Town Square" /> Town Square
        </Link>
        <Link to="/arcade/">
          <img src="/img/icons/joystick.png" alt="joystick" title="Games" aria-label="Games" /> The Arcade
        </Link>
      </div>
    )
  },
  {
    'name': 'Trade',
    'icon': 'fa-suitcase',
    'content': (
      <div className="dropdown-menu menu">
        <h3>Buy and Sell</h3>
        <Link to="/shop/general/">
          <img src="/img/icons/tag_blue.png" alt="tag" title="Sales" aria-label="Sales" /> General Store
        </Link>
        <Link to="/bank/">
          <img src="/img/icons/coins.png" alt="coins" title="Bank" aria-label="Bank" /> Bank of Saylua
        </Link>
        <Link to="/market/">
          <img src="/img/icons/direction.png" alt="crossroads" title="Market" aria-label="Market" /> Player Market
         </Link>
        <span className="dropdown-separator"></span>
        <Link to="/starshards/">
          <img src="/img/icons/star_1.png" alt="star" title="Star Shards" aria-label="Star Shards" /> Purchase Star Shards
        </Link>
      </div>
    )
  },
  {
    'name': 'Community',
    'icon': 'fa-comments',
    'content': (
      <div className="dropdown-menu menu">
        <h3>Interact with Others</h3>
        <Link to="/forums/">
          <img src="/img/icons/comment.png" alt="speech bubble" title="Forums" aria-label="Forums" /> Forums
        </Link>
        <a href="https://discord.gg/CPet6aq" target="_blank" rel="noopener">
          <img src="/img/icons/transmit.png" alt="transmission" title="Chat" aria-label="Chat" /> Discord Server
        </a>
        <span className="dropdown-separator"></span>
        <Link to="/reserve/">
          <img src="/img/icons/heart.png" alt="heart" title="Reserve" aria-label="Reserve" /> Pet Reserve
        </Link>
      </div>
    )
  },
  {
    'name': 'Archives',
    'icon': 'fa-book',
    'content': (
      <div className="left-menu dropdown-menu menu" id="archives-menu">
        <h3>Learn About Saylua</h3>
        <Link to="/species/">
          <img src="/img/icons/clipboard_text.png" alt="clipboard" title="Species Guide" aria-label="Species Guide" /> Species Guide
        </Link>
        <Link to="/items/">
          <img src="/img/icons/drawer.png" alt="drawer" title="Item Database" aria-label="Item Database" /> Item Database
        </Link>
        <Link to="/knowledge/">
          <img src="/img/icons/find.png" alt="magnifying glass" title="Knowledge Base" aria-label="Knowledge Base" /> Knowledge Base
        </Link>
        <span className="dropdown-separator"></span>
        <Link to="/museum/">
          <img src="/img/icons/palette.png" alt="palette" title="Museum" aria-label="Museum" /> The Museum
        </Link>
      </div>
    )
  },
];
