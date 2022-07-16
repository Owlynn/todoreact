import React from "react";
import "./ListItem.css"

// un composant, par défaut, peut prendre des props.
// pour qu'il en ait, il faut lui envoyer
// un composant reçoit des props du composant qui le render 

// commencer par le composant enfant de tous les autres (le plus petit)
// en faire un composant statique et avec données en dur
// puis alimtenter la donnée par les props (par le parent)
// remonter de composant en composant par les props
// trouver le niveau (dans l'arborescence) auquel est stocké la donnée

class ListItem extends React.Component {

    render(){
        return (
            <div className = "list-items" id={String(this.props.userInput)} key={this.props.userInput}>
                <input type="checkbox" name="item" defaultChecked={this.props.isChecked} onChange= {this.props.onChange} />
                <label htmlFor = {String(this.props.userInput)}> {this.props.userInput}</label>
                <button className='delete-item' onClick = {this.props.removeTask} buttonkey ={this.props.userInput}>X</button>
            </div>
        )
    }
}

export default ListItem;