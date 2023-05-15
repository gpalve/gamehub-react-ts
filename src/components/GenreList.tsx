import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameStore from "../store";

const GenreList = () => {
  const { data } = useGenres();
  const selectedGenre = useGameStore((s) => s.gameQuery.genreId);
  const setSelectedGenre = useGameStore((s) => s.setGenreId);

  return (
    <>
      <Heading fontSize="xl" marginY={2}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                padding={1}
              ></Image>
              <Button
                onClick={() => setSelectedGenre(genre.id)}
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
