import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Form } from "react-bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      number: null,
      balance: 0,
    };
  }
  refreshComponent = () => {
    this.setState({
      step: 1,
      number: null,
      balance: 0,
    });
  };
  setNumber = (event) => {
    this.setState({ number: event.target.value });
  };
  addBalance = () => {
    this.setState({
      balance:
        this.state.balance + parseInt(document.querySelector("#balance").value),
    });
  };
  render() {
    switch (this.state.step) {
      case 1:
        return (
          <div className="d-flex justify-content-center mt-2 m-md-5">
            <Card
              style={{ width: 500 }}
              className="d-flex justify-content-center"
            >
              <Card.Header> Введите свой номер </Card.Header>
              <Card.Body>
                <Card.Text>Пожалуйста введите ниже свой номер:</Card.Text>
                <Form.Control
                  type="tel"
                  placeholder="Номер"
                  className="mb-3"
                  onChange={this.setNumber}
                />
                <Button
                  variant="primary"
                  block
                  onClick={() => this.setState({ step: this.state.step + 1 })}
                >
                  {" "}
                  Подтвердить номер{" "}
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      case 2:
        return (
          <div className="d-flex justify-content-center mt-2 m-md-5">
            <Card
              style={{ width: 500 }}
              className="d-flex justify-content-center"
            >
              <Card.Header> Абонент +{this.state.number} </Card.Header>
              <Card.Body>
                <Card.Text>
                  Ваш баланс на данный момент - {this.state.balance} ₽
                </Card.Text>
                <Card.Text>
                  {" "}
                  Желаете его пополнить? Введите в форму ниже сумму, которую
                  желаете внести на счет:
                </Card.Text>
                <Form.Control
                  type="number"
                  min="1"
                  max="30000"
                  placeholder="Сумма"
                  className="mb-3"
                  id="balance"
                />
                <Button variant="primary" block onClick={this.addBalance}>
                  {" "}
                  Пополнить счет{" "}
                </Button>
                <Button
                  variant="danger"
                  block
                  onClick={() => this.setState({ step: this.state.step + 1 })}
                >
                  {" "}
                  Выйти из автомата{" "}
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      case 3:
        return (
          <div className="d-flex justify-content-center mt-2 m-md-5">
            <Card
              style={{ width: 500 }}
              className="d-flex justify-content-center"
            >
              <Card.Header> Работа с автоматом завершена </Card.Header>
              <Card.Body>
                <Button variant="primary" block onClick={this.refreshComponent}>
                  {" "}
                  Вернуться к выбору номера{" "}
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
    }
  }
}

export default App;
