import {
  FaAndroid,
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
