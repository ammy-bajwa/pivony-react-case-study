import { Box } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface FileUploaderType {
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
}

const FileUploader: React.FC<FileUploaderType> = function ({
  setSelectedFile,
}) {
  const fileUploadBtnClickHandler = () => {
    const fileUploadInput = document.getElementById("fileUploadInput");
    if (fileUploadInput) {
      fileUploadInput.click();
    }
  };

  const fileUploadInputHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const files = event.target.files;
    if (files?.length) {
      setSelectedFile(files[0]);
    }
  };
  return (
    <Box>
      <Input
        type="file"
        id="fileUploadInput"
        display="none"
        placeholder="large size"
        onChange={fileUploadInputHandler}
        size="lg"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
      <Button
        colorScheme="green"
        borderRadius="100%"
        onClick={fileUploadBtnClickHandler}
      >
        +
      </Button>
    </Box>
  );
};

export default FileUploader;
