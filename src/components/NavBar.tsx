import { Flex, HStack, Image, Link, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex padding="10px" alignItems="center">
      <Link onClick={() => window.location.reload()}>
        <Image src={logo} boxSize="60px" />
      </Link>
      <Link onClick={() => window.location.reload()}>
        <Text fontSize="xl" fontWeight="bold" mr="auto">
          Game Hub
        </Text>
      </Link>

      <Spacer />
      <HStack spacing="4">
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;
