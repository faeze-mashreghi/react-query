export const changeToSelectType = (all: any[], id: string, name: string) => {
  if (all?.length > 0) {
    return all?.map((item) => ({
      value: item[id],
      label: item[name],
    }));
  }
};
