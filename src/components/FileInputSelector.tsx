import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

interface FileInputSelectorType {
  options: string[];
  placeHolder: string;
  label: string;
}

const FileInputSelector: React.FC<FileInputSelectorType> = function ({
  options,
  placeHolder,
  label,
}) {
  return (
    <Box>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Select placeholder={placeHolder}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FileInputSelector;
