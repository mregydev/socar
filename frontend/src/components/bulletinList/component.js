import React from 'react';

import './styles.css';

import Messages from '../Messages'

import Loading from '../common/loading'

import BulletinItem from './item'
class BulltenListDetail extends React.Component {
   
  componentWillMount()
   {
     console.log("mounting")
     this.props.fetchBullten()
   }
  
  render() {

    let ListElements=this.props && this.props.items ?this.props.items.map(item=>
   <BulletinItem item={item}/>  ):null

    let LoadingElement=this.props && this.props.showloading?<Loading/>:null

    return (
      <div class='container'>
        {LoadingElement}
        {ListElements}
        </div>
    );
  }
}

export default BulltenListDetail;