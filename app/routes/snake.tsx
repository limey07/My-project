/* import { Direction, Food, Game, Snake } from './types';

const BLOCK_SIZE = 10;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

class Snake {
  private body: { x: number; y: number }[] = [];
  private direction: Direction = Direction.Right;

  constructor() {
    // Initialisiere den Schlangenkörper
    for (let i = 0; i < 5; i++) {
      this.body.push({ x: i + 5, y: 5 });
    }
  }

  public move() {
    // Bewege die Schlangenfigur in die aktuelle Richtung
    const head = this.getHead();
    let newHead: { x: number; y: number } = { x: head.x, y: head.y };
    switch (this.direction) {
      case Direction.Up:
        newHead.y -= 1;
        break;
      case Direction.Down:
        newHead.y += 1;
        break;
      case Direction.Left:
        newHead.x -= 1;
        break;
      case Direction.Right:
        newHead.x += 1;
        break;
    }

    // Füge den neuen Kopf hinzu und entferne den alten Schwanz
    this.body.pop();
    this.body.unshift(newHead);
  }

  public setDirection(direction: Direction) {
    // Ändere die Richtung der Schlangenfigur
    this.direction = direction;
  }

  public getHead(): { x: number; y: number } {
    return this.body[0];
  }

  public intersects(point: { x: number; y: number }): boolean {
    // Überprüfe, ob die Schlangenfigur mit einem Punkt auf dem Spielfeld kollidiert
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i].x === point.x && this.body[i].y === point.y) {
        return true;
      }
    }
    return false;
  }

  public grow() {
    // Vergrößere die Schlangenfigur um einen Block
    const tail = this.body[this.body.length - 1];
    const newBlock = { x: tail.x, y: tail.y };
    this.body.push(newBlock);
  }
}

<canvas id="canvas" width="400" height="400"></canvas>

class Food {
  private position: { x: number; y: number } = { x: 0, y: 0 };          

  public generatePosition() {
    // Generiere eine zufällige Position für das Futter auf dem Spielfeld
    this.position = {
      x: Math.floor(Math.random() * (CANVAS_WIDTH / BLOCK_SIZE)),
      y: Math.floor(Math.random() * (CANVAS_HEIGHT / BLOCK_SIZE)),
    };
  }

  public getPosition(): { x: number; y: number } {
    return this.position;
  }
}

class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private snake: Snake;
  private food: Food;
  private score: number = 0;
  private gameOver: boolean = false;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;

    // Initialisiere die Schlangenfigur und das Futter
    this.snake = new Snake();
    this.food = new Food();
    this.food.generatePosition();
  }
}
 */
