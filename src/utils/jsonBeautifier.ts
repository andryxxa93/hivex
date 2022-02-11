const jsonBeautifier = (target: string) => {
  return JSON.stringify(target, null, 3);
};

export default jsonBeautifier;
