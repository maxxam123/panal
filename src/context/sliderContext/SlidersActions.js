// GET
export const getSlidersStart = () => ({
  type: 'GET_SLIDERS_START',
});

export const getSlidersSuccess = (sliders) => ({
  type: 'GET_SLIDERS_SUCCESS',
  payload: sliders,
});

export const getSlidersFailure = () => ({
  type: 'GET_SLIDERS_FAILURE',
});

// DELETE
export const deleteSlidersStart = () => ({
  type: 'DELETE_SLIDERS_START',
});

export const deleteSlidersSuccess = (id) => ({
  type: 'DELETE_SLIDERS_SUCCESS',
  payload: id,
});

export const deleteSlidersFailure = () => ({
  type: 'DELETE_SLIDERS_FAILURE',
});

// CREATE
export const createSlidersStart = () => ({
  type: 'CREATE_SLIDERS_START',
});

export const createSlidersSuccess = (slider) => ({
  type: 'CREATE_SLIDERS_SUCCESS',
  payload: slider,
});

export const createSlidersFailure = () => ({
  type: 'CREATE_SLIDERS_FAILURE',
});
