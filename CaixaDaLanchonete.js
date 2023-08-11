class CaixaDaLanchonete {
  constructor() {
    this.menu = {
      'cafe': { descricao: 'Café', valor: 3.00 },
      'chantilly': { descricao: 'Chantilly(extra do café)', valor: 1.50 },
      'suco': { descricao: 'Suco Natural', valor: 6.20 },
      'sanduiche': { descricao: 'Sanduíche', valor: 6.50 },
      'queijo': { descricao: 'Queijo(extra do Sanduíche)', valor: 2.00 },
      'salgado': { descricao: 'Salgado', valor: 7.25 },
      'combo1': { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
      'combo2': { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
    };

    this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    if (!this.formasDePagamento.includes(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    let total = 0;

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(',');

      if (!this.menu[codigo]) {
        return "Item inválido!";
      }

      const item = this.menu[codigo];

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }

      total += item.valor * quantidade;
    }

    if (total === 0) {
      return "Não há itens no carrinho de compra!";
    }

    if (metodoDePagamento === 'dinheiro') {
      total *= 0.95; // Aplica desconto de 5% para pagamento em dinheiro
    } else if (metodoDePagamento === 'credito') {
      total *= 1.03; // Aplica acréscimo de 3% para pagamento a crédito
    }

    return `R$ ${total.toFixed(2)}`;
  }
}

export { CaixaDaLanchonete };