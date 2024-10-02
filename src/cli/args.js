const parseArgs = () => {
  const parsedArgs = process.argv.slice(2).reduce((res, arg, index, args) => {
    const isKey = (a) => a.startsWith("-");

    if (!isKey(arg)) return res;

    const key = arg.replace(/^-+/, "");
    const next = args[index + 1];
    res[key] = next && !isKey(next) ? next : true;

    return res;
  }, {});

  console.log(
    Object.entries(parsedArgs)
      .map(([key, value]) => `${key} is ${value}`)
      .join(", ")
  );
};

parseArgs();
