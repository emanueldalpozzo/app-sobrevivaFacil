# 🏠 Projeto: Sobrevivencia Fácil

## 🎯 Sobre o Projeto

"Sobrevivencia Fácil" é um aplicativo mobile desenvolvido para auxiliar pessoas na jornada de morar sozinho pela primeira vez. O app serve como um guia prático de 'sobrevivencia', oferecendo listas de tarefas domésticas, dicas de economia e organização, com o objetivo de tornar a transição para a vida independente mais simples e organizada.

Este projeto foi desenvolvido como parte da Avaliação 1 da disciplina de Programação para Dispositivos Móveis ministrada pelo professor Andres Jesse Porfirio, na Universidade Tecnológica Federal do Paraná (UTFPR) .

## 📸 Telas do Aplicativo

### Home
![alt text](/prints/home.png) 
![alt text](/prints/home-sheet.png)

###  Rotina
![alt text](/prints/rotina.png)

### Dicas
![alt text](/prints/dicas.png)


## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone [https://github.com/emanueldalpozzo/app-sobrevivaFacil.git]

# 2. Navegue até o diretório do projeto
cd sobrevivaFacil-app

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento do Expo
 npx expo start --clear

 # 5. Escolher a opção web ou android


## ✅ Checklist de Requisitos Avaliados

### 🧱 [1 ponto] Domínio do framework **Expo** e do fluxo de trabalho com **Git**

* [x] Criar o projeto utilizando **Expo + TypeScript**
* [x] Hospedar o projeto em um **repositório público no GitHub**
* [x] Criar um arquivo **`README.md`** na raiz do projeto contendo:

  * [x] Descrição do aplicativo: o que ele faz e para que serve
  * [x] **Prints de tela** das telas desenvolvidas
  * [x] **Seção com os comandos necessários** para executar o projeto
  * [x] Outras informações relevantes (opcional)

---

### ⚛️ [2 pontos] Criação de **componentes React**

* [x] Criar componentes React personalizados (quantos forem necessários). Onde foi aplicado: Principais telas(index.tsx, torina.tsx, dicas.tsx)
* [x] Ter **pelo menos um componente** que:

  * [x] Receba **props**. Aplicado no tarefaItem.tsx
  * [x] Possua **estado interno (useState)**. Aplicado no tarefaItem.tsx
* [x] Utilizar o **hook `useEffect`** em algum componente. Aplicado no dicas.tsx

---

### 🧭 [2.5 pontos] Domínio do **Expo Router**

* [x] Configurar corretamente o **Expo Router** no projeto. Aplicado no _layout.tsx pela navegação baseada em arquivos.
* [x] Criar **pelo menos 3 telas** no app
* [x] Permitir **navegação entre todas as telas** usando o Expo Router. Aplicado navegação baseada em arquivos.
* [x] Garantir que **pelo menos uma tela receba e trate parâmetros de navegação**. Aplicado na tela index.tsx que envia parâmetro para a dicas.tsx

---

### 🎨 [2.5 pontos] Aplicação de **Styles e Layouts**

* [x] Aplicar **StyleSheet** em todos os componentes. Aplicado em todas as telas
* [x] Criar uma interface **harmoniosa e compatível** com o propósito do app
* [ ] Definir um **Design System** (cores, espaçamentos, ícones, fontes, etc.)
* [ ] Buscar inspiração em referências de design (opcional):

  * 🔗 [UI Mobile no Pinterest](https://br.pinterest.com/amoedoandres/ui-mobile/)
  * 🔗 [Template Celular](https://br.pinterest.com/aluspiccinini/template-celular/)
  * 🔗 [Mobile App Design](https://br.pinterest.com/aniellec/mobile-app-design/)

---

### 📋 [1 ponto] Uso de **componente de lista**

* [x] Criar **uma tela** contendo um componente de listagem:

  * [x] `FlatList` ou `SectionList`. Utilizado na rotina.tsx(FlatList) e dicas.tsx(SectionList)
* [ ] Popular a lista com dados reais ou **dados fake** (ex: [Mockaroo](https://www.mockaroo.com/))

---

### ⚙️ [1 ponto] Uso de **ActionSheet**

* [x] Implementar pelo menos **uma ActionSheet**. Implementado no _layout.tsx 
* [x] Tratar corretamente os **eventos disparados** por ela. Utilizado no intsx.tsx(engrenagem).

---



