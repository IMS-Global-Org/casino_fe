import { Rank, Suit } from './';

export class Card {
  id: number = 0;
  rank: Rank = Rank.NONE;
  suit: Suit = Suit.NONE;
  points: number = 0;
  name: string = '';

  constructor(card: Partial<Card> = {}) {
    Object.assign(this, card);
  }
}
