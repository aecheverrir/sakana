import React from "react";
import Results from '../components/Results';
import ResultItem from '../components/Results/ResultItem';


export function getCarros(component) {
	fetch("/api/carros")
	.then(results => {
		return results.json();
	}).then(data => {
	   let components = data.map((car) => {
	   		return(<ResultItem  key={car._id} data={car} />);
	   });
	   component.setState({carros: components});
	});
}

export function getCarrosFilter(component, filtroCarro) {
	fetch("/api/carros/:filtroCarro?modelo=" + filtroCarro)
	.then(results => {
		return results.json();
	}).then(data => {
	   let components = data.map((car) => {
	   		return(<ResultItem  key={car._id} data={car}/>);
	   });
	   component.setState({carros: components});
	});
}
