//import ValuesController from "./Controllers/ValuesController.js";
import ImgController from "./Controllers/ImgController.js"
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js"
import QuoteController from "./Controllers/QuoteController.js"
class App {
  ImgController = new ImgController
  todoController = new TodoController
  WeatherController = new WeatherController
  QuoteController = new QuoteController
}

window["app"] = new App();
