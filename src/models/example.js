
export default {

  namespace: 'example',

  state: {
    data:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({payload, callback}, {call, put}) {
      const list =[
        {
          id: 0,
          name: '新建'
        },
        {
          id: 1,
          name: '运行中'
        },
        {
          id: 2,
          name: '完成'
        },
        {
          id: 3,
          name: '取消'
        },
        {
          id: 4,
          name: '异常终止'
        }]
      yield put({
        type: 'save',
        payload: {
          data:list
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
