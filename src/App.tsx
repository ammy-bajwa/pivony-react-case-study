import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import StepOne from "./components/StepOne";
import { Progress } from "@chakra-ui/react";

function App() {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [excelFields, setExcelFields] = useState<string[]>([]);

  useEffect(() => {
    console.log("selectedFile: ", selectedFile);
    if (selectedFile) {
      Papa.parse(selectedFile, {
        complete: excelDataHandler,
        header: true,
      });
    }
  }, [selectedFile]);

  const excelDataHandler = (data: Papa.ParseResult<unknown>) => {
    console.log(data);
    if (data?.meta?.fields?.length) {
      setExcelFields(data?.meta?.fields);
    }
  };

  return (
    <Flex justify="center" align="center" w="100%" h="100vh" overflow="hidden">
      <StepOne setSelectedFile={setSelectedFile} />
      {!!progressValue && (
        <Progress value={progressValue} size="xs" colorScheme="green" />
      )}
    </Flex>
  );
}

export default App;
