/**
 * Created by Admin on 18.09.2018.
 */
import React, {Component} from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);

        let check = function heckTodo() {
            let el = document.getElementById('check');
            let parent = el.parentNode;

            let a = parent.classList.contains("check");
            if (!a) {
                parent.setAttribute('class', 'check');
            } else {
                parent.setAttribute('class', 'noCheck');
            }
            console.log(a);

            //  this.classList.add('check');
        };
        window.onload = function () {
            let el = document.getElementById('check');
            let parent = el.parentNode;
            parent.addEventListener('click',check);
        }
    }



    removeTodo(id) {
        this.props.removeTodo(id);
    }


    render() {
        return (

            <div className="todoWrapper">
                {this.props.todo.text}
                <button className="checkTodo"
                        id="check"
                        onClick={(e) => this.checkTodo()}>check
                </button>
                <button className="removeTodo"
                        onClick={(e) => this.removeTodo(this.props.id)}>Remove
                </button>
            </div>


        );
    }
}