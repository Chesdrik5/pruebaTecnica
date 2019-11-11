import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FormE = (props) => {
  return (
      <div className="container">
        <Form>
            <FormGroup>
                <Label for="direccion">Dirección</Label>
                <Input type="text" name="text" id="direccion" />
            </FormGroup>
            <FormGroup>
                <Label for="costo">Costo</Label>
                <Input type="text" name="text" id="costo" />
            </FormGroup>
            <div class="row">
                <div class="col-md-4">
                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" name="text" id="nombre" />
                    </FormGroup>
                </div>
                <div class="col-md-4">
                    <FormGroup>
                        <Label for="apPat">Apellido Paterno</Label>
                        <Input type="text" name="text" id="apPat" />
                    </FormGroup>
                </div>
                <div class="col-md-4">
                    <FormGroup>
                        <Label for="apMat">Apellido Materno</Label>
                        <Input type="text" name="text" id="apMat" />
                    </FormGroup>
                </div>
            </div>
            <Button>Submit</Button>
        </Form>
      </div>
  );
}

export default FormE;