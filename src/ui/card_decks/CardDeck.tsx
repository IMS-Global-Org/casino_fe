import React from 'react';
import { useRecoilValue } from 'recoil';
import { cardDeckState } from '../../lib/recoil/card_deck/atoms';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { PlayingCard } from '../playingCards';

const CardDeck = () => {
  const cardDeck = useRecoilValue(cardDeckState);

  return (
    <>
      List of Cards in the Deck
      <Wrap width="20em" spacing="1em">
        {cardDeck.cards.map((card) => (
          <WrapItem key={card.id}>
            <PlayingCard card={card} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default CardDeck;
