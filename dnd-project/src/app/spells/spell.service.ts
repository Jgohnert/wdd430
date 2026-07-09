import { Injectable, EventEmitter } from '@angular/core';
import { Spell } from './spells.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpellService {
  spellSelectedEvent = new EventEmitter<Spell>();
  spellListChangedEvent = new BehaviorSubject<Spell[]>([]);
  spellChangedEvent = new EventEmitter<Spell[]>();

  spells: Spell [] =[];

  constructor(private http: HttpClient) {
  }

  getSpells() {
    this.http
      .get<Spell[]>(
        'http://localhost:3000/spells'
      )
      .subscribe((spells: Spell[]) => {

        this.spells = spells;
  
        this.spells.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
        
          this.spellListChangedEvent.next(this.spells.slice());
        },
        (error: any) => {
          console.error('An Error occured getting spells:', error);
        }
      )
    }

  getSpell(id: string): Spell {
    for (let spell of this.spells) {
      if (spell.id === id) {
        return spell;
      }
    }
    return null;
  }

  addSpell(spell: Spell) {
    if (!spell) {
      return;
    }

    // make sure id of the new spell is empty
    spell.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, spell: Spell }>('http://localhost:3000/spells',
      spell,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new spell to spells
          this.spells.push(responseData.spell);
        }
      );
  }

  updateSpell(originalSpell: Spell, newSpell: Spell) {
    if (!originalSpell || !newSpell) {
      return;
    }

    const pos = this.spells.findIndex(d => d.id === originalSpell.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new spell to the id of the old spell
    newSpell.id = originalSpell.id;
    newSpell._id = originalSpell._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/spells/' + originalSpell.id,
      newSpell, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.spells[pos] = newSpell;
        }
      );
  }

  deleteSpell(spell: Spell) {
    if (!spell) {
      return;
    }

    const pos = this.spells.findIndex(d => d.id === spell.id);

    if (pos < 0) {
      return;
    }

    // delete from database
    this.http.delete('http://localhost:3000/spells/' + spell.id)
      .subscribe(
        (response: Response) => {
          this.spells.splice(pos, 1);
          // this.sortAndSend();
        }
      );
  }
}
