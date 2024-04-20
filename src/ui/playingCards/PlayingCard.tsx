import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

import { Card, Suit } from '../../lib/models';
import { SuitSvg } from '../../ui/svg';

type PlayingCardProps = {
  card: Card;
};

const PlayingCard = (props: PlayingCardProps) => {
  const { card } = props;

  const svgKey = Suit[card.suit.toUpperCase() as keyof typeof Suit];
  const SuitCmp = SuitSvg[svgKey];

  return (
    <Grid
      templateAreas={`
        "top"
        "middle"
        "bottom"
      `}
      templateRows="2em 1fr 2em"
      templateColumns="1fr"
      width="xs"
      height="md"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray600"
      margin="1em"
    >
      <GridItem area="top">
        <Grid templateColumns="3em 1fr 3em" templateRows="2em">
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <SuitCmp height="2em" width="2em" />
          </GridItem>
          <GridItem></GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="xl" fontWeight="800">
              {card.rank}
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem
        area="middle"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Center
      </GridItem>
      <GridItem area="bottom">
        <Grid templateColumns="3em 1fr 3em" templateRows="2em">
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="xl" fontWeight="800">
              {card.rank}
            </Text>
          </GridItem>
          <GridItem></GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <SuitCmp height="2em" width="2em" />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default PlayingCard;
