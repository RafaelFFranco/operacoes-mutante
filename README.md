# Laboratório: Teste de Mutação com a "Calculadora Mutante"

Trabalho prático de **Análise de Eficácia de Testes com Teste de Mutação** (StrykerJS) sobre uma
biblioteca de 50 funções matemáticas cuja suíte de testes original tinha alta cobertura de código e
baixa capacidade de detecção de defeitos.

## Resultado

| | Testes | Mutation score | Mortos | Sobreviventes | Sem cobertura | Cobertura (linhas) |
|---|---:|---:|---:|---:|---:|---:|
| **Antes** (suíte original) | 50 | **73,71%** | 154 (+3 timeout) | 44 | 12 | 98,64% |
| **Depois** (suíte aprimorada) | 82 | **98,12%** | 206 (+3 timeout) | 4 | 0 | 100% |

Meta do trabalho (> 98%) atingida, sem alterar nenhuma linha de `src/operacoes.js` — todo o ganho
veio da suíte de testes. Os 4 mutantes remanescentes estão todos na linha 19 (`fatorial`) e são
**mutantes equivalentes**: o `guard-clause` `if (n === 0 || n === 1) return 1;` é redundante, pois o
laço seguinte já devolve `1` para `n <= 1`. Nenhum teste pode distingui-los do original. A análise
completa está no relatório em PDF.

## Estrutura

```
src/operacoes.js                  código sob teste (NÃO alterado)
test/operacoes.test.js            50 testes originais + 32 testes dirigidos aos mutantes
stryker.conf.json                 configuração do StrykerJS (jest-runner, break em 98%)
docs/relatorio/
  relatorio-teste-mutacao.pdf     relatório escrito (4 páginas) — entrega principal
  relatorio.html                  fonte do relatório
  gerar-pdf.py                    regenera o PDF a partir do HTML
  imagens/                        recortes dos relatórios do Stryker usados no PDF
docs/relatorios/
  01-execucao-inicial/            relatório HTML + JSON da 1ª execução (73,71%)
  02-execucao-final/              relatório HTML + JSON da 2ª execução (98,12%)
  README.md                       saídas de console das duas execuções
```

## Como reproduzir

```bash
npm install
npm test                 # 82 testes
npm test -- --coverage   # cobertura (100%)
npm run mutate           # ou: npx stryker run
```

O relatório HTML é gerado em `reports/mutation/mutation.html`. A configuração usa
`thresholds.break = 98`, de modo que a análise falha se o *mutation score* cair abaixo da meta.

## Técnicas usadas para matar os mutantes

| Técnica | Exemplo | Mutadores eliminados |
|---|---|---|
| Oráculos específicos: asseverar a mensagem exata da exceção | `expect(() => divisao(5,0)).toThrow('Divisão por zero não é permitida.')` | `StringLiteral`, `ConditionalExpression` |
| Valores de fronteira | `expect(isMaiorQue(5,5)).toBe(false)`, `expect(fatorial(0)).toBe(1)` | `EqualityOperator` |
| Casos negativos (classe de equivalência oposta) | `expect(isPar(7)).toBe(false)`, `expect(isPrimo(9)).toBe(false)` | `ConditionalExpression`, `BooleanLiteral`, `BlockStatement` |
| Dados representativos | `medianaArray([5,1,3])`, `medianaArray([4,1,3,2])`, `celsiusParaFahrenheit(100)` | `MethodExpression`, `ArrowFunction`, `ArithmeticOperator` |
| Comportamento observável sem mudança de valor | instrumentar `reduce` em `produtoArray([])`; identidade de `-0`/`+0` em `clamp` | `ConditionalExpression`, `EqualityOperator` |

Cada teste adicionado indica, em comentário, a linha de `src/operacoes.js` e o mutador que elimina.
