```import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
@connect(({example})=>({
  data:example.data
}))
class IndexPage extends PureComponent{
  componentDidMount(){
    this.props.dispatch({
      type: 'example/fetch'
    });
  }
  state = {
    name:""
  }
  onChangehandle(e){
    this.setState({
      name:e.target.value
    })
  }
  render(){
    const {data} = this.props;
    console.log("data",data)
    return (
      <div className={styles.normal}>
        <input onChange={(e)=>this.onChangehandle(e)}/>
      </div>
    );
  }
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);
```

在routes 里 IndexPage 这个  console.log("data",data) 一直输出啊 我改变的是name  我要是想 render里 不让这个data 每次都能consle的话 咋整 渲染一遍就行  
