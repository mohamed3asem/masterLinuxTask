// this function uses closure to wrap any function inside it to catch any error instead of writing try catch in every function
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
