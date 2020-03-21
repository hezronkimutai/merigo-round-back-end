export default req => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  const createUserQuery = { firstName, lastName, email, phoneNumber, password };
  const getUserQuery = { where: { id: req.params.userId } };
  const checkUserConflictQuery = {
    where: { email, phoneNumber }
  };
  return { createUserQuery, getUserQuery, checkUserConflictQuery };
};
