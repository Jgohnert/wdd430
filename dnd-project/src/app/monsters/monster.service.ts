import { Injectable, EventEmitter } from '@angular/core';
import { Monster } from './monsters.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  monsterSelectedEvent = new EventEmitter<Monster>();
  monsterListChangedEvent = new BehaviorSubject<Monster[]>([]);
  monsterChangedEvent = new EventEmitter<Monster[]>();

  maxMonsterId!: number
  monsters: Monster [] =[];

  constructor(private http: HttpClient) {
    this.maxMonsterId = this.getMaxId();
  }

  getMaxId(): number {
    let maxId = 0

    this.monsters.forEach(contact => {
      const currentId = parseInt(contact.id);

      if ( currentId > maxId ) {
        maxId = currentId
      }
    });

    return maxId;
  }

  getMonsters() {
    this.http
      .get<Monster[]>(
        'http://localhost:3000/monsters'
      )
      .subscribe((monsters: Monster[]) => {

        this.monsters = monsters;

        this.maxMonsterId = this.getMaxId();
  
        this.monsters.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
        
          this.monsterListChangedEvent.next(this.monsters.slice());
        },
        (error: any) => {
          console.error('An Error occured getting monsters:', error);
        }
      )
    }

    getMonster(id: string): Monster {
      for (let monster of this.monsters) {
        if (monster.id === id) {
          return monster;
        }
      }
      return null;
    }

    addMonster(monster: Monster) {
      if (!monster) {
        return;
      }
  
      // make sure id of the new monster is empty
      monster.id = '';
  
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
      // add to database
      this.http.post<{ message: string, monster: Monster }>('http://localhost:3000/monsters',
        monster,
        { headers: headers })
        .subscribe(
          (responseData) => {
            // add new monster to monsters
            this.monsters.push(responseData.monster);
          }
        );
    }
    
    updateMonster(originalMonster: Monster, newMonster: Monster) {
      if (!originalMonster || !newMonster) {
        return;
      }
  
      const pos = this.monsters.findIndex(d => d.id === originalMonster.id);
  
      if (pos < 0) {
        return;
      }
  
      // set the id of the new monster to the id of the old monster
      newMonster.id = originalMonster.id;
      newMonster._id = originalMonster._id;
  
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
      // update database
      this.http.put('http://localhost:3000/monsters/' + originalMonster.id,
        newMonster, { headers: headers })
        .subscribe(
          (response: Response) => {
            this.monsters[pos] = newMonster;
          }
        );
    }

    deleteMonster(monster: Monster) {
      if (!monster) {
        return;
      }
  
      const pos = this.monsters.findIndex(d => d.id === monster.id);
  
      if (pos < 0) {
        return;
      }
  
      // delete from database
      this.http.delete('http://localhost:3000/monsters/' + monster.id)
        .subscribe(
          (response: Response) => {
            this.monsters.splice(pos, 1);
          }
        );
    }
}
