import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const url_base = "http://localhost:8000/api/propiedads/";

class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
          objetos: {
            id: "",
            direccion: "",
            propietario: "",
            costo: ""
          },
          propList: []
        };
      }

    componentDidMount() {
        this.loadAll();
    }

    getData(data) {
        const res = data.map(item => {
          return {
            id: item.id,
            direccion: item.direccion,
            propietario: item.propietario,
            costo: item.costo,
          }
        });
        this.propList = res;
        console.dir(this.propList);
        return this.propList;
    }
    
    loadAll = () => {
        const datos = fetch(url_base).then(resolve => {
          return resolve.json();
        })
        .catch(err => console.error(err))
        .then(data => {
          const list = this.getData(data);
          this.setState({propList : list});
        });
    }

    renderTableData() {
        return this.state.propList.map(item => {
           return (
              <tr>
                 <td>{item.direccion}</td>
                 <td>{item.propietario}</td>
                 <td>{item.costo}</td>
                 <th>
                    <ButtonGroup>
                        <Button color="danger" onClick={() => this.handleDelete(item)}><MdDelete/></Button>
                        <Button><MdModeEdit/></Button>
                    </ButtonGroup>
                </th>
              </tr>
           )
        });
    }

    handleDelete = item => {
        console.dir(item);
        fetch(url_base +`${item.id}`, {
            method: 'DELETE',
        }
        ).then(res => this.loadAll());
    };

    render() {
        return (
            <div className="container">
            <Table>
                <thead>
                    <tr>
                    <th>Dirección</th>
                    <th>Propietario</th>
                    <th>Costo</th>
                    <th>Borrar/Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </Table>
        </div>
        );
    }
}

export default Tabla;