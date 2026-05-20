import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

// If you're using Angular 6+ (check your package.json to find out), you can provide application-wide services in a different way.
// Instead of adding a service class to the providers[] array in AppModule , you can set the following config in @Injectable() :

// @Injectable({providedIn: 'root'})
// export class MyService { ... }

// Using this new syntax is completely optional, the traditional syntax (using providers[] ) 
// will still work. The "new syntax" does offer one advantage though: Services can be loaded 
// lazily by Angular (behind the scenes) and redundant code can be removed automatically. 
// This can lead to a better performance and loading speed - though this really only kicks 
// in for bigger services and apps in general.

@Injectable()

export class AccountsService {
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}