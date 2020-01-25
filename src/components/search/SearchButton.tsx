import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useSearchModal } from '@components/search/SearchModal';
import { Button } from '@components/search/SearchButton.styles';

interface ISearchButtonProps {}

const SearchButton: React.FC<ISearchButtonProps> = () => {
  const [, setShowModal] = useSearchModal();

  return (
    <Button
      onClick={event => {
        event.preventDefault();
        setShowModal && setShowModal(true);
      }}
    >
      <FontAwesomeIcon icon={faSearch} />
    </Button>
  );
};

export default SearchButton;
