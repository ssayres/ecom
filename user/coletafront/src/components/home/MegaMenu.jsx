import React, { Component } from 'react';

class MegaMenu extends Component {
  constructor() {
    super();
    this.state = {
      isPanelOpen1: false,
      isPanelOpen2: false,
      isPanelOpen3: false,
      // Adicione mais estados conforme necessário para cada botão
    };
  }

  togglePanel = (buttonNumber) => {
    this.setState((prevState) => ({
      [`isPanelOpen${buttonNumber}`]: !prevState[`isPanelOpen${buttonNumber}`],
    }));
  };

  render() {
    const { isPanelOpen1, isPanelOpen2, isPanelOpen3 } = this.state;

    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          {/* Botão 1 */}
          <button
            className={`accordion ${isPanelOpen1 ? 'active' : ''}`}
            onClick={() => this.togglePanel(1)}
          >
            <img
              className="accordionMenuIcon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
              alt="Menu Icon"
            />
            &nbsp; Itens do Menu Dropdown 1
          </button>
          <div
            className={`panel ${isPanelOpen1 ? 'open' : ''}`}
            style={{ maxHeight: isPanelOpen1 ? '1000px' : '0' }}
            >
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Teste de Menu 1
                </a>
              </li>
            </ul>
          </div>

          {/* Botão 2 */}
          <button
            className={`accordion ${isPanelOpen2 ? 'active' : ''}`}
            onClick={() => this.togglePanel(2)}
          >
            <img
              className="accordionMenuIcon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
              alt="Menu Icon"
            />
            &nbsp; Itens do Menu Dropdown 2
          </button>
          <div
            className={`panel ${isPanelOpen2 ? 'open' : ''}`}
            style={{ maxHeight: isPanelOpen2 ? '1000px' : '0' }}
          >
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Teste de Menu 2
                </a>
              </li>
            </ul>
          </div>

          {/* Botão 3 */}
          <button
            className={`accordion ${isPanelOpen3 ? 'active' : ''}`}
            onClick={() => this.togglePanel(3)}
          >
            <img
              className="accordionMenuIcon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
              alt="Menu Icon"
            />
            &nbsp; Itens do Menu Dropdown 3
          </button>
          <div
            className={`panel ${isPanelOpen3 ? 'open' : ''}`}
            style={{ maxHeight: isPanelOpen3 ? '1000px' : '0' }}
          >
            <ul>
              <li>
                <a href="#" className="accordionItem">
                  Teste de Menu 3
                </a>
              </li>
            </ul>
          </div>

          <button
          className={`accordion ${isPanelOpen1 ? 'active' : ''}`}
          onClick={() => this.togglePanel(1)}
        >
          <img
            className="accordionMenuIcon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
            alt="Menu Icon"
          />
          &nbsp; Itens do Menu Dropdown 1
        </button>
        <div
          className={`panel ${isPanelOpen1 ? 'open' : ''}`}
          style={{ maxHeight: isPanelOpen1 ? '1000px' : '0' }}
          >
          <ul>
            <li>
              <a href="#" className="accordionItem">
                Teste de Menu 1
              </a>
            </li>
          </ul>
        </div>

        {/* Botão 2 */}
        <button
          className={`accordion ${isPanelOpen2 ? 'active' : ''}`}
          onClick={() => this.togglePanel(2)}
        >
          <img
            className="accordionMenuIcon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
            alt="Menu Icon"
          />
          &nbsp; Itens do Menu Dropdown 2
        </button>
        <div
          className={`panel ${isPanelOpen2 ? 'open' : ''}`}
          style={{ maxHeight: isPanelOpen2 ? '1000px' : '0' }}
        >
          <ul>
            <li>
              <a href="#" className="accordionItem">
                Teste de Menu 2
              </a>
            </li>
          </ul>
        </div>

        {/* Botão 3 */}
        <button
          className={`accordion ${isPanelOpen3 ? 'active' : ''}`}
          onClick={() => this.togglePanel(3)}
        >
          <img
            className="accordionMenuIcon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
            alt="Menu Icon"
          />
          &nbsp; Itens do Menu Dropdown 3
        </button>
        <div
          className={`panel ${isPanelOpen3 ? 'open' : ''}`}
          style={{ maxHeight: isPanelOpen3 ? '1000px' : '0' }}
        >
          <ul>
            <li>
              <a href="#" className="accordionItem">
                Teste de Menu 3
              </a>
            </li>
          </ul>
        </div>

        <button
        className={`accordion ${isPanelOpen1 ? 'active' : ''}`}
        onClick={() => this.togglePanel(1)}
      >
        <img
          className="accordionMenuIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
          alt="Menu Icon"
        />
        &nbsp; Itens do Menu Dropdown 1
      </button>
      <div
        className={`panel ${isPanelOpen1 ? 'open' : ''}`}
        style={{ maxHeight: isPanelOpen1 ? '1000px' : '0' }}
        >
        <ul>
          <li>
            <a href="#" className="accordionItem">
              Teste de Menu 1
            </a>
          </li>
        </ul>
      </div>

      {/* Botão 2 */}
      <button
        className={`accordion ${isPanelOpen2 ? 'active' : ''}`}
        onClick={() => this.togglePanel(2)}
      >
        <img
          className="accordionMenuIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
          alt="Menu Icon"
        />
        &nbsp; Itens do Menu Dropdown 2
      </button>
      <div
        className={`panel ${isPanelOpen2 ? 'open' : ''}`}
        style={{ maxHeight: isPanelOpen2 ? '1000px' : '0' }}
      >
        <ul>
          <li>
            <a href="#" className="accordionItem">
              Teste de Menu 2
            </a>
          </li>
        </ul>
      </div>

      {/* Botão 3 */}
      <button
        className={`accordion ${isPanelOpen3 ? 'active' : ''}`}
        onClick={() => this.togglePanel(3)}
      >
        <img
          className="accordionMenuIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
          alt="Menu Icon"
        />
        &nbsp; Itens do Menu Dropdown 3
      </button>
      <div
        className={`panel ${isPanelOpen3 ? 'open' : ''}`}
        style={{ maxHeight: isPanelOpen3 ? '1000px' : '0' }}
      >
        <ul>
          <li>
            <a href="#" className="accordionItem">
              Teste de Menu 3
            </a>
          </li>
        </ul>
      </div>
      <button
      className={`accordion ${isPanelOpen1 ? 'active' : ''}`}
      onClick={() => this.togglePanel(1)}
    >
      <img
        className="accordionMenuIcon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
        alt="Menu Icon"
      />
      &nbsp; Itens do Menu Dropdown 1
    </button>
    <div
      className={`panel ${isPanelOpen1 ? 'open' : ''}`}
      style={{ maxHeight: isPanelOpen1 ? '1000px' : '0' }}
      >
      <ul>
        <li>
          <a href="#" className="accordionItem">
            Teste de Menu 1
          </a>
        </li>
      </ul>
    </div>

    {/* Botão 2 */}
    <button
      className={`accordion ${isPanelOpen2 ? 'active' : ''}`}
      onClick={() => this.togglePanel(2)}
    >
      <img
        className="accordionMenuIcon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
        alt="Menu Icon"
      />
      &nbsp; Itens do Menu Dropdown 2
    </button>
    <div
      className={`panel ${isPanelOpen2 ? 'open' : ''}`}
      style={{ maxHeight: isPanelOpen2 ? '1000px' : '0' }}
    >
      <ul>
        <li>
          <a href="#" className="accordionItem">
            Teste de Menu 2
          </a>
        </li>
      </ul>
    </div>

    {/* Botão 3 */}
    <button
      className={`accordion ${isPanelOpen3 ? 'active' : ''}`}
      onClick={() => this.togglePanel(3)}
    >
      <img
        className="accordionMenuIcon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
        alt="Menu Icon"
      />
      &nbsp; Itens do Menu Dropdown 3
    </button>
    <div
      className={`panel ${isPanelOpen3 ? 'open' : ''}`}
      style={{ maxHeight: isPanelOpen3 ? '1000px' : '0' }}
    >
      <ul>
        <li>
          <a href="#" className="accordionItem">
            Teste de Menu 3
          </a>
        </li>
      </ul>
    </div>
    <button
    className={`accordion ${isPanelOpen1 ? 'active' : ''}`}
    onClick={() => this.togglePanel(1)}
  >
    <img
      className="accordionMenuIcon"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
      alt="Menu Icon"
    />
    &nbsp; Itens do Menu Dropdown 1
  </button>
  <div
    className={`panel ${isPanelOpen1 ? 'open' : ''}`}
    style={{ maxHeight: isPanelOpen1 ? '1000px' : '0' }}
    >
    <ul>
      <li>
        <a href="#" className="accordionItem">
          Teste de Menu 1
        </a>
      </li>
    </ul>
  </div>

  {/* Botão 2 */}
  <button
    className={`accordion ${isPanelOpen2 ? 'active' : ''}`}
    onClick={() => this.togglePanel(2)}
  >
    <img
      className="accordionMenuIcon"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
      alt="Menu Icon"
    />
    &nbsp; Itens do Menu Dropdown 2
  </button>
  <div
    className={`panel ${isPanelOpen2 ? 'open' : ''}`}
    style={{ maxHeight: isPanelOpen2 ? '1000px' : '0' }}
  >
    <ul>
      <li>
        <a href="#" className="accordionItem">
          Teste de Menu 2
        </a>
      </li>
    </ul>
  </div>

  {/* Botão 3 */}
  <button
    className={`accordion ${isPanelOpen3 ? 'active' : ''}`}
    onClick={() => this.togglePanel(3)}
  >
    <img
      className="accordionMenuIcon"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
      alt="Menu Icon"
    />
    &nbsp; Itens do Menu Dropdown 3
  </button>
  <div
    className={`panel ${isPanelOpen3 ? 'open' : ''}`}
    style={{ maxHeight: isPanelOpen3 ? '1000px' : '0' }}
  >
    <ul>
      <li>
        <a href="#" className="accordionItem">
          Teste de Menu 3
        </a>
      </li>
    </ul>
  </div>

          {/* Adicione mais botões e painéis conforme necessário */}
        </div>
      </div>
    );
  }
}

export default MegaMenu;
