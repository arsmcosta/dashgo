import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Renato Costa</Text>
        <Text color="gray.300" fontSize="small">
          arsmcosta@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Renato Costa"
        src="https://github.com/arsmcosta.png"
      />
    </Flex>
  );
}
