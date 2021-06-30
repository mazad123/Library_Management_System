
const login = async (req, res, next) => {
  try {
    return res.send('Working sucesss')
  } catch (error) {
    console.log(error);
  }
}

exports.login = login;