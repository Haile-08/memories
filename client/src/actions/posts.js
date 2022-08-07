import * as Api from "../api";

//action createors

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await Api.fetchpost();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
