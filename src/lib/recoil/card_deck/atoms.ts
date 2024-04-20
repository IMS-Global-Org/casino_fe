import { atom, AtomEffect } from 'recoil';

import { CardDeck } from '../../models';
import { Casino } from '../../axios';

export const cardDeckState = atom({
  key: 'cardDeckState',
  default: new CardDeck(),
  effects: [
    // Load Default Card Deck
    ({ setSelf, trigger }) => {
      const loadCardDeck = async () => {
        try {
          const response = await Casino.get(`/card_decks/1`);
          setSelf(new CardDeck(response.data));
        } catch (error: any) {
          // TODO use notifications
          console.log('>>> Error', error);
        }
      };

      if (trigger === 'get') {
        loadCardDeck();
      }
    },
  ],
});
