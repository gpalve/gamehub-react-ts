import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justify={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Text fontSize="4xl" fontWeight="bold">Game Hub</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
