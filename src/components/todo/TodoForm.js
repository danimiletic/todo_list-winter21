import { Component } from 'react';

class TodoForm extends Component {
  state = { title: '', desc: '', complete: false }

  render() {
    const { title, desc } = this.state
    return (
      <form onSubmit> 
        <input
          // 3 items you need for an input, the rest is optional
          // name - the key of the field it is for 
          // value - where it is stored 
          // onChange - is a function that does the action where it will grab the users input and store it in state 
          name="title"
          value={title}
          onChange={this.handleChange}
          // optional 
          required 
          placeholder="Todo Title"
        />
        <input
          name="desc"
          value={desc}
          onChange={this.handleChange}
          required 
          placeholder="Todo Description"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default TodoForm;