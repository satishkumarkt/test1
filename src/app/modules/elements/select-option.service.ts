import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IOption} from 'ng-select';

@Injectable()
export class SelectOptionService {
  public static readonly PLAYER_ONE: Array<IOption> = [
    {value: '1', label: 'E.g. South African'},
  ];

  public static readonly BANK_NAMES: Array<IOption> = [
    {value: '1', label: 'Absa Bank Ltd '},
    {value: '2', label: 'African Bank Ltd '},
    {value: '3', label: 'BoE Private Clients'},
    {value: '4', label: 'Bidvest Bank Limited'},
  ];
  public static readonly ACCOUNT_TYPES: Array<IOption> = [
    {value: '1', label: 'Savings Account'},
    {value: '2', label: 'Current Account'},
  ];

    getCharacters(): Array<IOption> {
        return this.cloneOptions(SelectOptionService.PLAYER_ONE);
    }

    loadCharacters(): Observable<Array<IOption>> {
        return this.loadOptions(SelectOptionService.PLAYER_ONE);
    }

    getBankNames(): Array<IOption> {
        return this.cloneOptions(SelectOptionService.BANK_NAMES);
    }
    getAccountTypes(): Array<IOption> {
        return this.cloneOptions(SelectOptionService.ACCOUNT_TYPES);
    }

    getCharactersWithDisabled(): Array<IOption> {
        const characters: Array<IOption> = this.cloneOptions(SelectOptionService.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    }


    private loadOptions(options: Array<IOption>): Observable<Array<IOption>> {
        return new Observable((obs) => {
            setTimeout(() => {
                obs.next(this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    }

    private cloneOptions(options: Array<IOption>): Array<IOption> {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}
