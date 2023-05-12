import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platFormName = usePlatform(gameQuery.platformId);

  const heading = `${genre?.name || ""}  ${platFormName?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize={30}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
