import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandedText from "../components/ExpandedText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import ScreenShots from "../components/ScreenShots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandedText text={game.description_raw} />
      <GameAttributes game={game}></GameAttributes>
      <GameTrailers gameId={game.id}></GameTrailers>
      <ScreenShots gameId={game.id}></ScreenShots>
    </>
  );
};

export default GameDetailsPage;
