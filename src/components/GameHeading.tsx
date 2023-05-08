import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""}  ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize={30}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
