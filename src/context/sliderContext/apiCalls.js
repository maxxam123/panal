import axios from 'axios';
import {
  createSlidersFailure,
  createSlidersStart,
  createSlidersSuccess,
  deleteSlidersFailure,
  deleteSlidersStart,
  deleteSlidersSuccess,
  getSlidersFailure,
  getSlidersStart,
  getSlidersSuccess,
} from './SlidersActions';

// GET
export const getSliders = async (dispatch) => {
  dispatch(getSlidersStart());
  try {
    const res = await axios.get('http://localhost:5000/api/product1/');
    console.log('apicalls');
    console.log(res.data);
    dispatch(getSlidersSuccess(res.data));
  } catch (err) {
    dispatch(getSlidersFailure());
  }
};

// DELETE
export const deleteSliders = async (id, dispatch) => {
  dispatch(deleteSlidersStart());
  try {
    await axios.delete('http://localhost:5000/api/product1/' + id);
    console.log('apicalls');
    console.log(id);
    dispatch(deleteSlidersSuccess(id));
  } catch (err) {
    dispatch(deleteSlidersFailure());
  }
};

// CREATE
export const createSliders = async (inputs, dispatch) => {
  dispatch(createSlidersStart());
  try {
    const res = await axios.post('http://localhost:5000/api/product1/', inputs);
    console.log('apicalls');
    console.log(res.data);
    dispatch(createSlidersSuccess(res.data));
  } catch (err) {
    dispatch(createSlidersFailure());
  }
};
