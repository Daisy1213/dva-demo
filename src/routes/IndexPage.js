import React from 'react';
import styles from './IndexPage.css';
import {connect} from 'dva';

class IndexPage extends React.Component {
  render() {
      console.log(this.props);
      const {count, dispatch} = this.props;
    return (
      <div className={styles.normal}>
        <div className={styles.record}>Highest Record: {count.record}</div>
        <div className={styles.current}>{count.current}</div>
        <div className={styles.button}>
          <button onClick={() => {
            dispatch({type: 'count/add'})
          }}>+
          </button>
        </div>
      </div>
    )
  }
}

// function IndexPage() {
//   console.log(this.props);
//   const {count, dispatch} = this.props;
//   return (
//     <div className={styles.normal}>
//       <div className={styles.record}>Highest Record: {count.record}</div>
//       <div className={styles.current}>{count.current}</div>
//       <div className={styles.button}>
//         <button onClick={() => {dispatch({type: 'count/add'})}}>+</button>
//       </div>
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (disptcha) => {
  return {
    addCount: disptcha({type: 'count/add'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
