import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
onSearch(arg0: string) {
throw new Error('Method not implemented.');
}

  placeholder = input('Buscar');
  value = output<string>();


}
