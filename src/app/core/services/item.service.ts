import { Injectable } from "@angular/core";
import { Item } from "../models";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: "Patrick Mahomes", role: "Quarterback" },
    { id: 2, name: "Travis Kelce", role: "Tight end" },
    { id: 3, name: "DeAndre Hopkins", role: "Wide receiver" },
    { id: 4, name: "Xavier Worthy", role: "Wide receiver" },
    { id: 5, name: "Kareem Hunt", role: "Running back" },
    { id: 6, name: "Carson Steele", role: "Running back" },
    { id: 7, name: "Carson Wentz", role: "Quarterback" },
    { id: 8, name: "Harrison Butker", role: "Placekicker" },
    { id: 9, name: "JuJu Smith-Schuster", role: "Wide receiver" },
    { id: 10, name: "Samaje Perine", role: "Running back" },
    { id: 11, name: "Chris Jones", role: "Defensive Tackle" },
    { id: 12, name: "Rafinha", role: "Midfielder" },
    { id: 13, name: "Cillessen", role: "Goalkeeper" },
    { id: 14, name: "Mascherano", role: "Defender" },
    { id: 15, name: "Paco Alcácer", role: "Forward" },
    { id: 16, name: "Jordi Alba", role: "Defender" },
    { id: 17, name: "Digne", role: "Defender" },
    { id: 18, name: "Sergi Roberto", role: "Midfielder" },
    { id: 19, name: "André Gomes", role: "Midfielder" },
    { id: 20, name: "Aleix Vidal", role: "Midfielder" },
    { id: 21, name: "Umtiti", role: "Defender" },
    { id: 22, name: "Mathieu", role: "Defender" },
    { id: 23, name: "Masip", role: "Goalkeeper" }
  );

  getItems(): Array<Item> {
    return this.items;
  }

  getItem(id: number): Item | undefined {
    return this.items.find((item) => item.id === id);
  }
}
