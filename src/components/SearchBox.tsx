import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input borderRadius={20} placeholder="Search Games" />;
    </InputGroup>
  );
};

export default SearchBox;
