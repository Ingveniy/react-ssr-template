import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import API from '../api';
import { getTodos } from '../redux/todos/actions';

const api = new API();

const Home = props => {
  console.log(props, 'props');
  useEffect(() => {
    props.getTodos();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      {JSON.stringify(props.todos)}
    </div>
  );
};

Home.fetchData = async () => {
  return {
    reducerName: 'todos',
    reducerFieldName: 'todos',
    data: await api.getTodos()
  };
};

const mapStateToProps = todos => ({ ...todos });
const mapDispatchToProps = (dispatch, {}) => {
  return bindActionCreators(
    {
      getTodos: getTodos()
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
