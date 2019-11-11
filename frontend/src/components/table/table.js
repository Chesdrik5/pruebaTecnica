import React from 'react';
import { Table } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import { MdModeEdit } from 'react-icons/md';
import ModalD from '../modalDelete/modal.js';

const Tabla = () => (
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
                <tr>
                <th scope="row">algo</th>
                <th>algo</th>
                <th>algo</th>
                <th>
                <ButtonGroup>
                    <ModalD></ModalD>
                    <Button><MdModeEdit/></Button>
                </ButtonGroup>
                </th>
                </tr>
            </tbody>
        </Table>
    </div>
)

export default Tabla;