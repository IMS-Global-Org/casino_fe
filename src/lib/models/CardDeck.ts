import { Card } from './';

export class CardDeck {
  id: number = 0;
  brand: string = '';
  classification: string = '';
  number: number = 0;
  jokers: boolean = false;
  cards: Card[] = [];

  constructor(partial: Partial<CardDeck> = {}) {
    const { cards, ...rest } = partial;

    if (cards) this.cards = cards.map((card: Partial<Card>) => new Card(card));

    Object.assign(this, rest);
  }
}
