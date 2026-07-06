import { Component, output, input } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput {
placeholder= input();
value= output<string>();

}
