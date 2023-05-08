import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";


interface Props{
  onSelectedPlatform: (platform:Platform) => void;
  selectedPlatform:Platform | null;
}

const PlatformFilter = ({onSelectedPlatform,selectedPlatform}:Props) => {
  const { data } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       {  selectedPlatform?.name ||  'Platforms' } 
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectedPlatform(p)}>{p.name}</MenuItem> 
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
