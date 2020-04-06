## DRAGON BALL Z EXPLORER

##### Demo: https://stoic-agnesi-7d99c2.netlify.com/

## What it is
DBZExplorer is an application developed in ReactJS that with a modern and fun layout, brings the information of the Planets and Characters from the DBZ universe consuming DragonBallAPI created by the user Coswold =)

## How to run the project
First install NodeJS according to your O.S
Once installed open the directory in the terminal or vscode and run the following command

### `npm install --save`

Runs the app in the development mode.
### `npm start`

## Libraries Used
 
### Axios
Used to make HTTP requests

### Material UI React
Used in Drawer and Circular Loading

### JPList
Used because it facilitates the search and pagination of HTML elements

Styled-Components: Great for standardization in production. Allows you to use component-level styles in the application. They are written in a mixture of JavaScript and CSS.

## Bonus
A DragonBallAPI has CORS lock and requirements limit. To perform with a better quality and to be able to display the data do the following.
Crie um atalho do browser Google Chrome e coloque o seguinte codigo para desabilitar o CORS do browser. Lembrando que isso não é uma boa pratica. Mais necessario para conseguir rodar o projeto, pois essa implementacao depende do provedor da API.

### `"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security`

