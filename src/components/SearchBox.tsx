import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const ref = useRef<HTMLInputElement>(null);
  const searchText = useGameStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          searchText(ref.current.value);
          navigate("/");
          // ref.current.value = "";
        }
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
