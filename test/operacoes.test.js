const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });

  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

/*
 * =====================================================================================
 * SUITE APRIMORADA - testes escritos para "matar" os mutantes que sobreviveram
 * a primeira execucao do StrykerJS (mutation score inicial: 73.71%).
 *
 * Cada teste indica, em comentario, a linha de src/operacoes.js e o mutador
 * (mutator) do Stryker que ele elimina.
 * =====================================================================================
 */
describe('Suíte Aprimorada: testes dirigidos aos mutantes sobreviventes', () => {

  // === divisao (L8) ===
  describe('divisao', () => {
    // Mata StringLiteral L8 (mensagem -> ""): o teste original usava .toThrow()
    // sem argumento, portanto qualquer mensagem (inclusive vazia) o satisfazia.
    test('deve lançar erro com a mensagem exata na divisão por zero', () => {
      expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
  });

  // === raizQuadrada (L13) ===
  describe('raizQuadrada', () => {
    // Mata ConditionalExpression L13 (if -> false) e StringLiteral L13 (-> "").
    test('deve lançar erro com mensagem exata para número negativo', () => {
      expect(() => raizQuadrada(-4)).toThrow(
        'Não é possível calcular a raiz quadrada de um número negativo.'
      );
    });

    // Mata EqualityOperator L13 (n < 0 -> n <= 0): o zero é o valor de fronteira,
    // válido no original e rejeitado pelo mutante.
    test('deve aceitar o valor de fronteira zero', () => {
      expect(raizQuadrada(0)).toBe(0);
    });
  });

  // === fatorial (L18-L19) ===
  describe('fatorial', () => {
    // Mata ConditionalExpression L18 (if -> false) e StringLiteral L18 (-> "").
    test('deve lançar erro com mensagem exata para número negativo', () => {
      expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
    });

    // Mata EqualityOperator L18 (n < 0 -> n <= 0): com o mutante, fatorial(0)
    // lançaria exceção em vez de retornar 1.
    test('deve retornar 1 para o caso base zero', () => {
      expect(fatorial(0)).toBe(1);
    });

    // Documenta o segundo caso base (L19). Obs.: os mutantes da L19 são
    // EQUIVALENTES (ver relatório) - o guard-clause é redundante, pois o laço
    // já devolve resultado = 1 para n <= 1.
    test('deve retornar 1 para o caso base um', () => {
      expect(fatorial(1)).toBe(1);
    });
  });

  // === mediaArray (L25) ===
  describe('mediaArray', () => {
    // Mata ConditionalExpression L25 (if -> false): sem o guard-clause o
    // resultado seria 0/0 = NaN.
    test('deve retornar 0 para array vazio (e não NaN)', () => {
      expect(mediaArray([])).toBe(0);
      expect(Number.isNaN(mediaArray([]))).toBe(false);
    });
  });

  // === maximoArray / minimoArray (L34, L38) ===
  describe('maximoArray e minimoArray', () => {
    // Mata ConditionalExpression L34 (if -> false, que devolveria -Infinity)
    // e StringLiteral L34 (-> "").
    test('maximoArray deve lançar erro com mensagem exata para array vazio', () => {
      expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
    });

    // Mata ConditionalExpression L38 (if -> false, que devolveria +Infinity)
    // e StringLiteral L38 (-> "").
    test('minimoArray deve lançar erro com mensagem exata para array vazio', () => {
      expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
    });
  });

  // === isPar / isImpar (L43, L44) ===
  describe('isPar e isImpar', () => {
    // Mata ConditionalExpression L43 (-> true): faltava o caso negativo.
    test('isPar deve retornar false para um número ímpar', () => {
      expect(isPar(7)).toBe(false);
    });

    // Mata ConditionalExpression L44 (-> true) e ArithmeticOperator L44 (% -> *).
    test('isImpar deve retornar false para um número par', () => {
      expect(isImpar(8)).toBe(false);
    });
  });

  // === isPrimo (L73-L75) ===
  describe('isPrimo', () => {
    // Mata BooleanLiteral L73 (false -> true), ConditionalExpression L73
    // (if -> false) e EqualityOperator L73 (n <= 1 -> n < 1).
    test('deve retornar false para 1, 0 e negativos', () => {
      expect(isPrimo(1)).toBe(false);
      expect(isPrimo(0)).toBe(false);
      expect(isPrimo(-7)).toBe(false);
    });

    // Mata ConditionalExpression L74 (laço -> false), EqualityOperator L74
    // (i < n -> i >= n), BlockStatement L74 ({}), BooleanLiteral L75
    // (false -> true), ConditionalExpression L75 (if -> false) e
    // ArithmeticOperator L75 (n % i -> n * i).
    test('deve retornar false para um número composto', () => {
      expect(isPrimo(9)).toBe(false);
      expect(isPrimo(4)).toBe(false);
    });

    // Reforça a fronteira do laço: com i >= n, isPrimo(2) devolveria false.
    test('deve retornar true para o menor primo', () => {
      expect(isPrimo(2)).toBe(true);
    });
  });

  // === produtoArray (L84) ===
  describe('produtoArray', () => {
    // Mata ConditionalExpression L84 (if -> false). O valor de retorno é 1 nos
    // dois casos (reduce com acumulador inicial 1), logo o único comportamento
    // observável é o curto-circuito: o guard-clause deve evitar a travessia do
    // array. Instrumentamos reduce para asseverar esse contrato.
    test('deve retornar 1 para array vazio sem percorrer o array', () => {
      const vazio = [];
      let reduceChamado = false;
      vazio.reduce = function (...args) {
        reduceChamado = true;
        return Array.prototype.reduce.apply(this, args);
      };

      expect(produtoArray(vazio)).toBe(1);
      expect(reduceChamado).toBe(false);
    });
  });

  // === clamp (L88-L89) ===
  describe('clamp', () => {
    // Mata ConditionalExpression L88 (if -> false).
    test('deve devolver o mínimo quando o valor está abaixo do intervalo', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    // Mata ConditionalExpression L89 (if -> false).
    test('deve devolver o máximo quando o valor está acima do intervalo', () => {
      expect(clamp(50, 0, 10)).toBe(10);
    });

    // Mata EqualityOperator L88 (valor < min -> valor <= min). As duas versões
    // devolvem números numericamente iguais quando valor === min; a única
    // diferença observável em JS é a identidade de -0 vs +0 (Object.is), que é
    // exatamente a semântica usada por toBe. O contrato verificado é: um valor
    // já dentro do intervalo deve ser devolvido sem substituição.
    test('deve devolver o próprio valor (sem substituí-lo) na fronteira inferior', () => {
      expect(clamp(-0, 0, 10)).toBe(-0);
      expect(Object.is(clamp(-0, 0, 10), -0)).toBe(true);
    });

    // Mata EqualityOperator L89 (valor > max -> valor >= max), pelo mesmo motivo.
    test('deve devolver o próprio valor (sem substituí-lo) na fronteira superior', () => {
      expect(clamp(0, -10, -0)).toBe(0);
      expect(Object.is(clamp(0, -10, -0), 0)).toBe(true);
    });
  });

  // === isDivisivel (L92) ===
  describe('isDivisivel', () => {
    // Mata ConditionalExpression L92 (-> true).
    test('deve retornar false quando não há divisibilidade', () => {
      expect(isDivisivel(10, 3)).toBe(false);
    });
  });

  // === Conversões de temperatura (L93-L94) ===
  describe('celsiusParaFahrenheit e fahrenheitParaCelsius', () => {
    // Mata ArithmeticOperator L93 (9/5 -> 9*5 e celsius * 9 -> celsius / 9).
    // Os testes originais usavam 0 °C, valor em que o fator multiplicativo
    // é anulado.
    test('celsiusParaFahrenheit deve converter valores diferentes de zero', () => {
      expect(celsiusParaFahrenheit(100)).toBe(212);
      expect(celsiusParaFahrenheit(-40)).toBe(-40);
    });

    // Mata ArithmeticOperator L94 (5/9 -> 5*9 e * -> /). O teste original usava
    // 32 °F, valor em que o parêntese (fahrenheit - 32) zera o produto.
    test('fahrenheitParaCelsius deve converter valores diferentes de 32', () => {
      expect(fahrenheitParaCelsius(212)).toBe(100);
      expect(fahrenheitParaCelsius(-40)).toBe(-40);
    });
  });

  // === inverso (L96) ===
  describe('inverso', () => {
    // Mata ConditionalExpression L96 (if -> false, que devolveria Infinity)
    // e StringLiteral L96 (-> "").
    test('deve lançar erro com mensagem exata para zero', () => {
      expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
  });

  // === Comparações (L104-L106) ===
  describe('isMaiorQue, isMenorQue e isEqual', () => {
    // Mata ConditionalExpression L104 (-> true).
    test('isMaiorQue deve retornar false quando a < b', () => {
      expect(isMaiorQue(5, 10)).toBe(false);
    });

    // Mata EqualityOperator L104 (a > b -> a >= b): caso de igualdade.
    test('isMaiorQue deve retornar false quando a === b', () => {
      expect(isMaiorQue(5, 5)).toBe(false);
    });

    // Mata ConditionalExpression L105 (-> true).
    test('isMenorQue deve retornar false quando a > b', () => {
      expect(isMenorQue(10, 5)).toBe(false);
    });

    // Mata EqualityOperator L105 (a < b -> a <= b): caso de igualdade.
    test('isMenorQue deve retornar false quando a === b', () => {
      expect(isMenorQue(5, 5)).toBe(false);
    });

    // Mata ConditionalExpression L106 (-> true).
    test('isEqual deve retornar false para números diferentes', () => {
      expect(isEqual(7, 8)).toBe(false);
    });
  });

  // === medianaArray (L108-L112) ===
  describe('medianaArray', () => {
    // Mata ConditionalExpression L108 (if -> false) e StringLiteral L108 (-> "").
    test('deve lançar erro com mensagem exata para array vazio', () => {
      expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
    });

    // Mata MethodExpression L109 (.sort removido), ArrowFunction L109
    // (comparador -> () => undefined) e ArithmeticOperator L109 (a - b -> a + b).
    // O teste original usava um array JÁ ORDENADO, no qual ordenar ou não
    // produz o mesmo resultado.
    test('deve ordenar o array antes de calcular a mediana (tamanho ímpar)', () => {
      expect(medianaArray([5, 1, 3])).toBe(3);
    });

    // Mata BlockStatement L111 ({}), ConditionalExpression L111 (if -> false),
    // ArithmeticOperator L111 (% -> *) e os três ArithmeticOperator da L112
    // (/2 -> *2, + -> - e mid - 1 -> mid + 1), além de reforçar os mutantes
    // de ordenação da L109 no caminho de tamanho par.
    test('deve calcular a média dos dois centrais em array de tamanho par', () => {
      expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
    });

    // Garante que a função não altera o array recebido (protege o spread da L109).
    test('não deve modificar o array original', () => {
      const original = [5, 1, 3];
      medianaArray(original);
      expect(original).toEqual([5, 1, 3]);
    });
  });
});
