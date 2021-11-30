/* eslint-disable react/jsx-no-undef */
import { Box, Center, Flex } from "@chakra-ui/layout";
import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface HeaderConfirmationType {
  setIsContainHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderConfirmation: React.FC<HeaderConfirmationType> = function ({
  setIsContainHeader,
}) {
  const [isCheked, setIsCheked] = useState(true);

  const clickHandle = () => {
    setIsCheked(!isCheked);
  };

  useEffect(() => {
    if (setIsContainHeader) {
      setIsContainHeader(isCheked);
    }
  }, [isCheked, setIsContainHeader]);

  return (
    <FormControl mt="10px">
      <Center flexDir="column">
        <FormLabel>Does it contain headers?</FormLabel>
        <Box>
          <input
            type="checkbox"
            onClick={clickHandle}
            checked={isCheked}
            name="isContainHeader"
            value="yes"
          />
          Yes
          <input
            type="checkbox"
            onClick={clickHandle}
            checked={!isCheked}
            name="isContainHeader"
            value="no"
          />{" "}
          No
        </Box>
      </Center>
    </FormControl>
  );
};

export default HeaderConfirmation;
