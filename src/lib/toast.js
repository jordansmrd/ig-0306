import { useToast } from "@chakra-ui/react";
import { constant } from "../constant";
export const showToast = (
  toast,
  condition,
  success,
  success_dsc,
  failed,
  failed_dsc
) => {
  if (condition === constant.success)
    return toast({
      title: success,
      status: "success",
      description: success_dsc,
      isClosable: true,
      position: "top",
      duration: 1500,
    });

  toast({
    title: failed,
    description: failed_dsc,
    status: "error",
    position: "top",
    isClosable: true,
    duration: 1500,
  });
};
