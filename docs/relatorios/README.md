# Evidências das execuções

Saídas de console das duas execuções, preservadas como evidência. Os relatórios completos
(HTML navegável e JSON) estão nas pastas `01-execucao-inicial/` e `02-execucao-final/`.

Ambiente: Windows 10, Node.js 22.17.0, npm 11.7.0, Jest 29.7.0, StrykerJS 10.0.0
(`@stryker-mutator/core` + `@stryker-mutator/jest-runner`).

---

## 1ª execução — suíte original (50 testes)

`npm test` → `Tests: 50 passed, 50 total`

`npm test -- --coverage`

```
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |   85.41 |    58.82 |     100 |   98.64 |
 operacoes.js |   85.41 |    58.82 |     100 |   98.64 | 112
```

`npx stryker run`

```
--------------|------------------|----------|-----------|------------|----------|----------|
              | % Mutation score |          |           |            |          |          |
File          |  total | covered | # killed | # timeout | # survived | # no cov | # errors |
--------------|--------|---------|----------|-----------|------------|----------|----------|
All files     |  73.71 |   78.11 |      154 |         3 |         44 |       12 |        0 |
 operacoes.js |  73.71 |   78.11 |      154 |         3 |         44 |       12 |        0 |
--------------|--------|---------|----------|-----------|------------|----------|----------|
ERROR MutationTestReportHelper Final mutation score 73.71 under breaking threshold 98,
setting exit code to 1 (failure).
```

Total de 213 mutantes: 157 detectados (154 mortos + 3 *timeout*) e **56 indetectados**
(44 sobreviventes + 12 sem cobertura).

---

## 2ª execução — suíte aprimorada (82 testes)

`npm test` → `Tests: 82 passed, 82 total`

`npm test -- --coverage`

```
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |
 operacoes.js |     100 |      100 |     100 |     100 |
```

`npm run mutate`

```
--------------|------------------|----------|-----------|------------|----------|----------|
              | % Mutation score |          |           |            |          |          |
File          |  total | covered | # killed | # timeout | # survived | # no cov | # errors |
--------------|--------|---------|----------|-----------|------------|----------|----------|
All files     |  98.12 |   98.12 |      206 |         3 |          4 |        0 |        0 |
 operacoes.js |  98.12 |   98.12 |      206 |         3 |          4 |        0 |        0 |
--------------|--------|---------|----------|-----------|------------|----------|----------|
INFO MutationTestReportHelper Final mutation score of 98.12 is greater than or equal to
break threshold 98
```

### Os 4 sobreviventes remanescentes (mutantes equivalentes)

Todos na linha 19 de `src/operacoes.js`, em `fatorial`:

```
[Survived] ConditionalExpression  src/operacoes.js:19:7   if (n === 0 || n === 1) → if (false)
[Survived] ConditionalExpression  src/operacoes.js:19:7   if (false || n === 1)
[Survived] ConditionalExpression  src/operacoes.js:19:18  if (n === 0 || false)
[Survived] LogicalOperator        src/operacoes.js:19:7   if (n === 0 && n === 1)
```

O `guard-clause` é redundante: para `n <= 1` o laço `for (let i = 2; i <= n; i++)` não executa
nenhuma iteração e `resultado` já vale `1`. Original e mutantes produzem o mesmo valor para todo o
domínio, sem efeitos colaterais — são **mutantes equivalentes**, indetectáveis por qualquer teste.

### Os 3 *timeouts* (contabilizados como detectados)

```
[Timeout] UpdateOperator      src/operacoes.js:21:27  i++ → i--            (laço infinito)
[Timeout] BlockStatement      src/operacoes.js:66:12  while(b) { } → {}    (laço infinito)
[Timeout] ArithmeticOperator  src/operacoes.js:66:27  a % b → a * b        (laço infinito)
```
