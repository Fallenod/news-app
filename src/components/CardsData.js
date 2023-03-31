import { useSelector } from 'react-redux';
import { selectBookmarkIsLoading } from '../features/bookmark/bookmarkSlice';
import Card from './Card';
import EmptyPlaceholder from './EmptyPlaceholder';
import LoaderGrid from './LoaderGrid';

function CardsData({ cards, emptyText }) {
  const isLoading = useSelector(selectBookmarkIsLoading);
  if (cards?.length === 0) {
    return <EmptyPlaceholder emptyText={emptyText} />;
  }
  return (
    <>
      {cards?.map((el, index) => (
        <Card key={index} data={el} />
      ))}
    </>
  );
}

export default CardsData;
