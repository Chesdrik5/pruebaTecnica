import React, { Component } from 'react';

const url_base = "http://localhost:8000/api/propiedads/";

class EditPropiedad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }

        this.sendForm = this.sendForm.bind(this)
    }

    componentDidMount() {
        if(this.props.type == 'update') {
            const elements = document.querySelectorAll('.FormInput-Input')

            elements[0].value = this.props.item.direccion
            elements[1].value = this.props.item.costo

            this.setState({ form: { ...this.state.form, _id: this.props.item._id } })
        }
    }

    sendForm(ev) {ev.preventDefault()

        // Añadimos un if con la respectivs petición para editar un Post.
        if(this.props.type == 'update') {
            fetch(url_base, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            })
                .catch(err => console.error(err))
                .then(res => res.json())
                .then(item => this.props.updateItem(item))
        } else {
            fetch(url_base, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            })
                .catch(err => console.log(err))
                .then(res => res.json())
                .then(thing => console.log(thing))
        }
    }

    render () {
        return (
            <div className="container">
                <form className="PostForm">
                    <div className="FormInput">
                        <label htmlFor="direccion" className="FormInput-Label">Dirección</label>
                        <input
                            type="text"
                            className="FormInput-Input"
                            name="direccion"
                            onChange={(ev) => { this.setState({ form: { ...this.state.form, direccion: ev.target.value } }) }}/>
                    </div>
                    <div className="FormInput">
                        <label htmlFor="costo" className="FormInput-Label">Categorías</label>
                        <input
                            type="text"
                            className="FormInput-Input"
                            name="costo"
                            onChange={(ev) => { this.setState({ form: { ...this.state.form, costo: ev.target.value } }) }}
                        />
                    </div>  
                    <button onClick={this.sendForm} className="Form-Btn">Publicar Propiedad</button>
                </form>
            </div>
        );
    }
}

export default EditPropiedad;