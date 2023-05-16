import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  text: string;
}

const ExpandedText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 800;

  if (text.length <= 300) return <Text>{text}</Text>;

  const summarized = expanded ? text : text.substring(0, limit) + "... ";
  return (
    <>
      {summarized}
      <Button
        colorScheme="yellow"
        fontWeight="bold"
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Load More"}
      </Button>
    </>
  );
};

export default ExpandedText;
