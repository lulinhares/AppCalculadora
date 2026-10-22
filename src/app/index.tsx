import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { CalculatorButton } from "@/components/CalculatorButton";
import { useCalculator } from "@/hooks/useCalculator";

export default function Index() {
  const {
    display,
    handleNumber,
    handleDecimal,
    handleClear,
    handleBackspace,
    handleToggleSign,
    handlePercent,
    handleOperation,
    handleEqual,
  } = useCalculator();

  // Calcula o tamanho da fonte dinamicamente conforme a quantidade de dígitos
  function getFontSize(text: string) {
    const len = text.length;
    if (len <= 6) return 96; // Tamanho original até 6 dígitos
    if (len === 7) return 82;
    if (len === 8) return 72;
    if (len === 9) return 64;
    if (len === 10) return 56;
    return 46; // Para 11 dígitos ou mais
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text
          numberOfLines={1}
          style={[styles.number, { fontSize: getFontSize(display) }]}
        >
          {display}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton variant="special" onPress={handleBackspace}>
          <MaterialCommunityIcons name="backspace" size={24} color="white" />
        </CalculatorButton>
        <CalculatorButton label="AC" variant="special" onPress={handleClear} />
        <CalculatorButton label="%" variant="special" onPress={handlePercent} />
        <CalculatorButton variant="operator" onPress={() => handleOperation("/")}>
          <FontAwesome5 name="divide" size={24} color="white" />
        </CalculatorButton>
      </View>

      <View style={styles.row}>
        <CalculatorButton label="7" onPress={() => handleNumber("7")} />
        <CalculatorButton label="8" onPress={() => handleNumber("8")} />
        <CalculatorButton label="9" onPress={() => handleNumber("9")} />
        <CalculatorButton label="x" variant="operator" onPress={() => handleOperation("*")} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="4" onPress={() => handleNumber("4")} />
        <CalculatorButton label="5" onPress={() => handleNumber("5")} />
        <CalculatorButton label="6" onPress={() => handleNumber("6")} />
        <CalculatorButton label="-" variant="operator" onPress={() => handleOperation("-")} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="1" onPress={() => handleNumber("1")} />
        <CalculatorButton label="2" onPress={() => handleNumber("2")} />
        <CalculatorButton label="3" onPress={() => handleNumber("3")} />
        <CalculatorButton label="+" variant="operator" onPress={() => handleOperation("+")} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="+/-" onPress={handleToggleSign} />
        <CalculatorButton label="0" onPress={() => handleNumber("0")} />
        <CalculatorButton label="." onPress={handleDecimal} />
        <CalculatorButton label="=" variant="operator" onPress={handleEqual} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "black",
    paddingBottom: 60,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 16,
  },
  number: {
    color: "white",
    fontSize: 96,
    fontWeight: "300",
    width: "100%",
    textAlign: "right",
    paddingRight: 20,
  },
});



