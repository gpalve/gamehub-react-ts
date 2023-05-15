import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../store";

const SearchBox = () => {
  const ref = useRef<HTMLInputElement>(null);
  const searchText = useGameStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) searchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input ref={ref} borderRadius={20} placeholder="Search Games" />;
      </InputGroup>
    </form>
  );
};

export default SearchBox;
