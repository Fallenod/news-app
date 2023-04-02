/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import EmptyPlaceholder from './EmptyPlaceholder';

function CardsData({ cards, emptyText }) {
  if (cards?.length === 0) {
    return <EmptyPlaceholder emptyText={emptyText} />;
  }
  return (
    <>
      {cards?.map((el, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card key={index} data={el} />
      ))}
    </>
  );
}
CardsData.defaultProps = {
  cards: [],
  emptyText: '',
};
CardsData.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    pubDate: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
    source_id: PropTypes.string,
  })),
  emptyText: PropTypes.string,
};
export default CardsData;
