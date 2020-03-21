export const fiveHundredHandler = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {            
      next({status:500,message:'Server error'});
    }
  };
};
