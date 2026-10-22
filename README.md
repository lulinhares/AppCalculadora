# 📱 App Calculadora (iOS Style)

Aplicativo mobile de calculadora desenvolvido com **React Native**, **Expo** e **Google Antigravity**, com layout inspirado no design clássico do iOS.

---

<div align="center">

![Calculadora]([https://github.com](https://github.com/user-attachments/assets/a7bef345-a0d6-4f25-a42f-31e89899bcf0)

</div>

---




## ✨ Funcionalidades

- ➕ **Operações Básicas:** Soma, subtração, multiplicação e divisão.
- 🔢 **Tratamento de Números:** Ponto decimal (`.`), porcentagem (`%`) e inversão de sinal (`+/-`).
- ⌫ **Edição:** Botão de *Backspace* para apagar um dígito por vez e botão *AC* para resetar.
- 📏 **Fonte Dinâmica/Responsiva:** O tamanho da fonte do visor se ajusta automaticamente a partir de 7 dígitos, garantindo que números longos nunca quebrem a linha.
- ⚡ **Alta Precisão:** Tratamento de dízimas e imprecisões de ponto flutuante do JavaScript e proteção contra divisão por zero.
- 🎨 **Componentes Reutilizáveis:** Código modular com separação de responsabilidades (Hook de lógica matemática e componente de botão customizado).

---

## 🛠️ Principais Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (SDK 57)
- [Google Antigravity](https://antigravity.google/)      
- [Expo Router](https://docs.expo.dev/router/introduction/) (Navegação baseada em rotas)
- [TypeScript](https://www.typescriptlang.org/)
- [@expo/vector-icons](https://icons.expo.fyi/)

---

## 📁 Estrutura do Projeto

```text
├── assets/             # Ícones, imagens e fontes
├── src/
│   ├── app/            # Rotas do Expo Router (Telas e Layouts)
│   │   ├── _layout.tsx # Configuração geral da navegação
│   │   └── index.tsx   # Tela principal da calculadora
│   ├── components/     # Componentes visuais (CalculatorButton)
│   └── hooks/          # Hooks customizados de lógica (useCalculator)
├── app.json            # Configuração do Expo
└── package.json        # Dependências e scripts do projeto
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado na sua máquina
- Aplicativo **Expo Go** instalado no seu celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   cd SEU-REPOSITORIO
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```

4. **Abra no seu dispositivo:**
   - **Android:** Abra o app **Expo Go** e escaneie o QR Code que aparece no terminal.
   - **iOS:** Abra a câmera padrão do iPhone e escaneie o QR Code para abrir no Expo Go.
