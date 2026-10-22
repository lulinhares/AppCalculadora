import { useState } from "react";

export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // Digitar um número
  function handleNumber(num: string) {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay((prev) => (prev === "0" ? num : prev + num));
    }
  }

  // Ponto decimal (.)
  function handleDecimal() {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay((prev) => prev + ".");
    }
  }

  // Limpar tudo (AC)
  function handleClear() {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  }

  // Apagar último dígito (Backspace)
  function handleBackspace() {
    if (waitingForOperand) return;

    setDisplay((prev) => {
      if (prev.length <= 1 || (prev.length === 2 && prev.startsWith("-"))) {
        return "0";
      }
      return prev.slice(0, -1);
    });
  }

  // Inverter sinal (+/-)
  function handleToggleSign() {
    setDisplay((prev) => {
      if (prev === "0") return prev;
      return prev.startsWith("-") ? prev.slice(1) : "-" + prev;
    });
  }

  // Porcentagem (%)
  function handlePercent() {
    const current = parseFloat(display);
    if (isNaN(current)) return;
    const result = current / 100;
    setDisplay(String(result));
  }

  // Executar a conta matemática
  function calculate(first: number, second: number, op: string): number | string {
    switch (op) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return second === 0 ? "Erro" : first / second;
      default:
        return second;
    }
  }

  // Escolher um operador (+, -, *, /)
  function handleOperation(nextOperator: string) {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
    } else if (operator && !waitingForOperand) {
      const result = calculate(prevValue, inputValue, operator);
      if (typeof result === "string") {
        setDisplay(result);
        setPrevValue(null);
        setOperator(null);
        setWaitingForOperand(true);
        return;
      }
      // Corrige imprecisões de ponto flutuante do JavaScript
      const cleanResult = parseFloat(result.toFixed(8));
      setDisplay(String(cleanResult));
      setPrevValue(cleanResult);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  }

  // Igual (=)
  function handleEqual() {
    const inputValue = parseFloat(display);

    if (operator && prevValue !== null && !waitingForOperand) {
      const result = calculate(prevValue, inputValue, operator);

      if (typeof result === "string") {
        setDisplay(result);
      } else {
        const cleanResult = parseFloat(result.toFixed(8));
        setDisplay(String(cleanResult));
      }

      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  }

  return {
    display,
    handleNumber,
    handleDecimal,
    handleClear,
    handleBackspace,
    handleToggleSign,
    handlePercent,
    handleOperation,
    handleEqual,
  };
}

