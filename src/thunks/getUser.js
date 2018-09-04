

export const getUser = async (email, password) => async dispatch =>  {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (response.status !== 200) {
      alert('Email and/or password do not match, please try again');
      return {};
    } else {
      const results = await response.json();
      return results.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};