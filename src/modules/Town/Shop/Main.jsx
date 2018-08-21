import React from 'react';
import { connect } from 'react-redux';

import { addItem, addCoins } from 'reducers/sayluaReducer';
import { formatNumber } from 'utils';

import Character from 'models/Character';
import Item from 'models/Item';

import SayluaView from 'components/SayluaView';
import Button from 'components/Button';
import DialogueBox from 'components/DialogueBox';
import NotFound from 'modules/Error/NotFound';

import './Shop.css';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemId, count) => {
      dispatch(addItem(itemId, count));
    },
    addCoins: (count) => {
      dispatch(addCoins(count));
    },
  };
};

function Shop(props) {
  const character = Character.fromCanonName(props.match.params.character.toLowerCase());
  if (!(character && character.shop)) return <NotFound />;
  return (
    <SayluaView title="The Town">
      <h1>{ character.shop.name || `${character.name}'s Shop?` }</h1>
      <DialogueBox character={character}>
        {character.shop.greeting}
      </DialogueBox>
      {character.shop.stock.map((stock) => {
        const item = Item.fromId(stock.id);
        return (
          <div className="shop-item">
            <img
              src={Item.imageUrl(item)}
              alt={item.name}
              title={item.name}
              aria-label={item.name}
            />
            <span>{ item.name }</span>
            <span>Price: { formatNumber(stock.price) }</span>
            <Button onClick={() => {
                props.addItem(item.id, 1);
                props.addCoins(-stock.price);
              }}
            >Buy</Button>
          </div>
        );
      })}
    </SayluaView>
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(Shop);
