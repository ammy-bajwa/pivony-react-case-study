import Papa from "papaparse";
import { Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Button, Progress } from "@chakra-ui/react";

import FileUploader from "./components/FileUploader";
import FileInputSelector from "./components/FileInputSelector";
import HeaderConfirmation from "./components/HeaderConfirmation";

function App() {
  const [selectedFile, setSelectedFile] = useState<null | File>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [isContainHeader, setIsContainHeader] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
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

  const submitHandler = () => {
    setSelectedFile(null);
    setExcelFields([]);
    setIsFinished(false);
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

      {selectedFile?.name && (
        <Text>Selected file is "{selectedFile?.name}"</Text>
      )}

      {!!selectedFile && (
        <HeaderConfirmation setIsContainHeader={setIsContainHeader} />
      )}
      {!!excelFields.length && (
        <>
          <FileInputSelector
            options={excelFields}
            placeHolder="Column Name"
            label="Chose the column name that contains text"
            setIsFinished={setIsFinished}
          />
          {isContainHeader && (
            <FileInputSelector
              options={excelFields}
              placeHolder="Column Name"
              label="Chose the column name that contains date (optional)"
            />
          )}
        </>
      )}
      {isFinished && (
        <>
          <Text mt="10px">All is done !!</Text>
          <Button colorScheme="green" mt="10px" onClick={submitHandler}>
            Submit
          </Button>
        </>
      )}
    </Flex>
  );
}

export default App;
