import { Center, FormControl, FormLabel } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

interface FileInputSelectorType {
  options: string[];
  placeHolder: string;
  label: string;
  setIsFinished?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FileInputSelector: React.FC<FileInputSelectorType> = function ({
  options,
  placeHolder,
  label,
  setIsFinished,
}) {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined =
    (event) => {
      const value = event.target.selectedIndex;
      if (setIsFinished && value) {
        setIsFinished(true);
      } else if (setIsFinished) {
        setIsFinished(false);
      }
    };
  return (
    <Center>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Select onChange={handleChange} placeholder={placeHolder}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Select>
      </FormControl>
    </Center>
  );
};

export default FileInputSelector;
