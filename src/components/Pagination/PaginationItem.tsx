import { Button } from "@chakra-ui/react";

interface PaginationProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}
