import { Flex } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import FileUploader from "./components/FileUploader";
import { Progress } from "@chakra-ui/react";
import FileInputSelector from "./components/FileInputSelector";

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
    <Flex
      justify="center"
      flexDir="column"
      align="center"
      w="100%"
      h="100vh"
      overflow="hidden"
    >
      <FileUploader setSelectedFile={setSelectedFile} />
      {!!progressValue && (
        <Progress value={progressValue} size="xs" colorScheme="green" />
      )}
      {!!excelFields.length && (
        <>
          <FileInputSelector
            options={excelFields}
            placeHolder="Column Name"
            label="Chose the column name that contains text"
          />
          <FileInputSelector
            options={excelFields}
            placeHolder="Column Name"
            label="Chose the column name that contains date"
          />
        </>
      )}
    </Flex>
  );
}

export default App;
