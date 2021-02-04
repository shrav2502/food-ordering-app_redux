export const addNewCustomer = (name, contact, password) => {
  return {
    type: "ADD_NEW_CUSTOMER",
    payload: {
      name: name,
      contact: contact,
      password: password,
    },
  };
};
