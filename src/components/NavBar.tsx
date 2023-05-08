import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";
interface Props{
  onSearch: (searchText:string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchBox  onSearch={onSearch}/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
