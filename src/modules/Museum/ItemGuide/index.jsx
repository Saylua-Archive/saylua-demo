import React from 'react';
import { Link } from 'react-router-dom';

import Item, { itemsList } from 'models/Item';
import Character, { CHARACTERS } from 'models/Character';

import DialogueBox from 'components/DialogueBox';
import SayluaView from 'components/SayluaView';

import './ItemGuide.css';

export default function ItemGuide() {
  return (
    <SayluaView title="Item Guide">
      <h1>The Item Archive</h1>
      <div className="breadcrumbs">
        <Link to="/museum" className="breadcrumbs-link">Museum</Link>
        <span className="separator">
          &raquo;
        </span>
        <Link to="/guide/items" className="breadcrumbs-link breadcrumbs-active">Item Guide</Link>
      </div>
      <DialogueBox character={Character.fromId(CHARACTERS.LUANA)}>
        There are many items to be found across Saylua. See them here.
      </DialogueBox>
      {
        itemsList.map((item) => {
          return (
            <div key={`${item.canonName}`} className="item-guide-entry" id={`${item.canonName}`}>
              <img src={Item.imageUrl(item)} alt={item.name} title={item.name} />
              <table>
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>{ item.name }</td>
                  </tr>
                  <tr>
                    <th>Description: </th>
                    <td>{ item.description }</td>
                  </tr>
                  <tr>
                    <th>Rufus&#39; Note:</th>
                    <td>{ item.rufusDescription }</td>
                  </tr>
                  <tr>
                    <th>Rufus&#39; Buyback Price:</th>
                    <td>{ item.buybackPrice } CC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      }
    </SayluaView>
  );
}
