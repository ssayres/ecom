import React, { Component } from 'react';

class MegaMenuMobile extends Component {
  constructor() {
    super();
    this.state = {
      isPanelOpen1: false, // Estado para o primeiro botão
      isPanelOpen2: false, // Estado para o segundo botão
    };
  }

  togglePanel = (buttonNumber) => {
    // Use o parâmetro buttonNumber para identificar qual botão foi clicado
    this.setState((prevState) => ({
      [`isPanelOpen${buttonNumber}`]: !prevState[`isPanelOpen${buttonNumber}`], // Inverte o estado do botão especificado
    }));
  };

  render() {
    const { isPanelOpen1, isPanelOpen2 } = this.state;

    return (
      <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">
          {/* Botão 1 */}
          <button
            className={`accordionMobile ${isPanelOpen1 ? 'active' : ''}`}
            onClick={() => this.togglePanel(1)} // Passa 1 para identificar o primeiro botão
          >
            <img
              className="accordionMenuIconMobile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
              alt="Menu Icon"
            />
            &nbsp; Itens do Menu Dropdown 1
          </button>
          <div
            className={`panelMobile ${isPanelOpen1 ? 'open' : ''}`}
            style={{ maxHeight: isPanelOpen1 ? '1000px' : '0' }}
          >
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Teste de Menu 1
                </a>
              </li>
            </ul>
          </div>

          {/* Botão 2 */}
          <button
            className={`accordionMobile ${isPanelOpen2 ? 'active' : ''}`}
            onClick={() => this.togglePanel(2)} // Passa 2 para identificar o segundo botão
          >
            <img
              className="accordionMenuIconMobile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGA_p0QlrFrcHqSBI1-Bgh_vs0LSuvFvrpCGIY9PRbA&s"
              alt="Menu Icon"
            />
            &nbsp; Itens do Menu Dropdown 2
          </button>
          <div
            className={`panelMobile ${isPanelOpen2 ? 'open' : ''}`}
            style={{ maxHeight: isPanelOpen2 ? '1000px' : '0' }}
          >
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Teste de Menu 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenuMobile;
