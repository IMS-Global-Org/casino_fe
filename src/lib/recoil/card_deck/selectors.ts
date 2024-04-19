import { selector } from 'recoil';
import { cardDeckState } from './atoms';

import { CardDeck } from '../../models/CardDeck';

export const selectedCardDeckCards = selector({
  key: 'selectedCardDeckCards',
  get: ({ get }) => {
    const cardDeck: CardDeck = get(cardDeckState);

    return cardDeck.cards;
  },
});
