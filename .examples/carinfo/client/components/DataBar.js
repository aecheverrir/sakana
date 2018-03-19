import React from 'react';
import CountResults from './DataBar/CountResults';
import SortBy from './DataBar/SortBy';

export default class DataBar extends React.Component {
  render () {
    return (
    	<div>
    		<div> DataBar </div>
    		<CountResults />
    		<SortBy />
    	</div>
    );
  }
}