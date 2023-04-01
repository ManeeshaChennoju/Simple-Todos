import {Component} from 'react'

class TodoItem extends Component {
  onDelete = () => {
    const {todoDetails, onDeleteTodo} = this.props
    const {id} = todoDetails
    onDeleteTodo(id)
  }

  render() {
    const {todoDetails} = this.props
    const {title} = todoDetails

    return (
      <li className="todo_List_container">
        <p className="todo"> {title} </p>
        <div>
          <button
            onClick={this.onDelete}
            type="button"
            className="deleteButton"
          >
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
