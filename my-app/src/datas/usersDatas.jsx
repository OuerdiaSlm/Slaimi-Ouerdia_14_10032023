//var usersDatas = {};
//export default usersDatas;

export const usersDatas = (data) => {
  return data.map((item) => ({
    ...item,
    selected: false
  }));
}
