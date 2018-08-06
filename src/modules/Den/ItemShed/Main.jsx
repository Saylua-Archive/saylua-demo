import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useItem, addCoins } from 'SayluaStore';

import SayluaView from 'components/SayluaView';

import Modal from 'components/Modal';
import Pagination from 'components/Pagination';

import { formatNumber } from 'utils';
import Item from 'models/Item';

import './ItemShed.css';

const ITEMS_PER_PAGE = 25;

const mapStateToProps = ({ sayluaState: { inventory } }) => ({ inventory });

const mapDispatchToProps = (dispatch) => {
  return {
    useItem: (item, count) => {
      dispatch(useItem(item, count));
    },
    addCoins: (count) => {
      dispatch(addCoins(count));
    },
  };
};

class ItemShed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: -1,
    };
  }

  changeIndex(i) {
    this.setState({ selectedIndex: i });
  }

  sellItems(item, count) {
    this.props.useItem(item, count);
    this.props.addCoins(item.buybackPrice * count);
  }

  render() {
    let items = Object.keys(this.props.inventory).map((canonName) => {
      const entry = Item.fromCanonName(canonName);
      entry.count = this.props.inventory[canonName];
      return entry;
    });
    const totalItems = items.length;
    const pageCount = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const currentPage = this.props.match.params.page || 1;

    items = items.slice(
      ITEMS_PER_PAGE * (currentPage - 1),
      Math.min((ITEMS_PER_PAGE * (currentPage - 1)) + ITEMS_PER_PAGE, items.length),
    );

    const selectedItem = items[this.state.selectedIndex];

    if (!totalItems) {
      return (
        <SayluaView>
          <h2>Your Den: Item Shed</h2>
          <p>
            Hmm, your shed is totally empty! Perhaps you should search for some
            items in the <Link to="/wilderness">Wilderness</Link>.
          </p>
        </SayluaView>
      );
    }

    const body = items.map((item, i) => {
      return (
        <button
          onClick={this.changeIndex.bind(this, i)}
          className={`inventory-item ${i === this.state.selectedIndex ? 'selected' : ''}`}
          key={item.name}
        >
          <img
            src={Item.imageUrl(item)}
            alt={item.name}
            title={item.name}
            aria-label={item.name}
          />
          <span>{ item.name }</span>
          <small>Count: { formatNumber(item.count) }</small>
        </button>
      );
    });

    const pagination = (<Pagination
      currentPage={currentPage}
      pageCount={pageCount}
      routeBase="/items/"
    />);
    let itemModal = null;
    if (selectedItem) {
      const onModalClose = () => {
        this.changeIndex(-1);
      };
      const buybackOptions = [];
      for (let i = 1; i <= selectedItem.count; i++) {
        buybackOptions.push(<option value={i}>
            Sell { `${i} for ${i * selectedItem.buybackPrice} Coins` }
        </option>);
      }
      itemModal = (
        <Modal onClose={onModalClose} opened>
          <img
            src={Item.imageUrl(selectedItem)}
            className="item"
            alt={selectedItem.name}
            title={selectedItem.name}
            aria-label={selectedItem.name}
          />
          <p>Count: { formatNumber(selectedItem.count) }</p>
          <p>Buyback Price: { formatNumber(selectedItem.buybackPrice) } Cloud Coins</p>
          <p>{ selectedItem.description }</p>
          <button onClick={this.sellItems.bind(this, selectedItem, 1)}>
            Sell 1 for {selectedItem.buybackPrice} Coins
          </button>
        </Modal>
      );
    }
    return (
      <SayluaView>
        <h2>Your Den: Item Shed</h2>
        { pagination }
        <div className="inventory-grid">
          { body }
        </div>
        { pagination }
        { itemModal }
      </SayluaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemShed);
