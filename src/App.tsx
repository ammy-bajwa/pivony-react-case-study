import { Box, Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import StepOne from "./components/StepOne";

function App() {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);

  useEffect(() => {
    console.log("selectedFile: ", selectedFile);
    if (selectedFile) {
      Papa.parse(selectedFile, {
        complete: (data: { data: Object; errors: Object; meta: Object }) =>
          console.log(data),
        header: true,
      });
    }
  }, [selectedFile]);

  return (
    <Flex justify="center" align="center" w="100%" h="100vh" overflow="hidden">
      <StepOne setSelectedFile={setSelectedFile} />
    </Flex>
  );
}

export default App;
