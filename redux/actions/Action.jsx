const Add = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

// delete one quantity
export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};

export default Add;
