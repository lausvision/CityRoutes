const getVar = (name) => {
    const variable = process.env[name];
    if (!variable) {
      console.error(`${name} variable not set!!`);
      process.exit(1);
    }
    return variable;
  };
  
  const BASE_URL = getVar("BASE_URL");
  
  module.exports = {
    BASE_URL,
  };
  