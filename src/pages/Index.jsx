import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, List, ListItem, Text, Box, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState("");

  const addCustomer = () => {
    if (newCustomer.trim() !== "") {
      setCustomers([...customers, newCustomer]);
      setNewCustomer("");
    }
  };

  const removeCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Target Customers List</Text>
        <HStack width="100%">
          <Input placeholder="Enter customer name" value={newCustomer} onChange={(e) => setNewCustomer(e.target.value)} />
          <Button onClick={addCustomer} colorScheme="teal">
            Add Customer
          </Button>
        </HStack>
        <Box width="100%">
          <List spacing={3}>
            {customers.map((customer, index) => (
              <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
                <Text>{customer}</Text>
                <IconButton aria-label="Remove customer" icon={<FaTrash />} colorScheme="red" onClick={() => removeCustomer(index)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
