import { Suit } from '../../lib/models';

import { ReactComponent as Spade } from './Spade.svg';
import { ReactComponent as Diamond } from './Diamond.svg';
import { ReactComponent as Heart } from './Heart.svg';
import { ReactComponent as Club } from './Club.svg';
import { ReactComponent as None } from './None.svg';

export const SuitSvg = {
  [Suit.SPADE]: Spade,
  [Suit.CLUB]: Club,
  [Suit.HEART]: Heart,
  [Suit.DIAMOND]: Diamond,
  [Suit.NONE]: None,
}
