export default {
  namespace: 'count', //相当于redux中子reducer被combine到rootReducer时的key值

  state: {
    record: 0,
    current: 0,
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
  },

  // 与count有关的两个reducer (pure funciont)
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent
      };
    },
    minus(state) {
      return {
        ...state,
        current: state.current
      };
    }
  },
};
