import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

import useGameStore from "../store";

const PlatformFilter = () => {
  const { data } = usePlatforms();
  const selectedPlaformId = useGameStore((s) => s.gameQuery.platformId);
  const onSelectedPlaform = useGameStore((s) => s.setPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {data?.results.find((p) => p.id === selectedPlaformId)?.name ||
          "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectedPlaform(p.id)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
