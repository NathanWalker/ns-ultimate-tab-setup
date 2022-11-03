import { Injectable } from "@angular/core";
import { Item } from "../models";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
    { id: 2, name: "Piqué", role: "Defender" },
    { id: 3, name: "Piqué", role: "Defender" },
    { id: 4, name: "I. Rakitic", role: "Midfielder" },
    { id: 5, name: "Sergio", role: "Midfielder" },
    { id: 6, name: "Denis Suárez", role: "Midfielder" },
    { id: 7, name: "Arda", role: "Midfielder" },
    { id: 8, name: "A. Iniesta", role: "Midfielder" },
    { id: 9, name: "Suárez", role: "Forward" },
    { id: 10, name: "Messi", role: "Forward" },
    { id: 11, name: "Neymar", role: "Forward" },
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

  getItem(id: number): Item {
    return this.items.find((item) => item.id === id);
  }
}
