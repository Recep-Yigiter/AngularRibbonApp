import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() {

  }

  ngAfterContentInit() {
    let selectedIndex: number =  parseInt(localStorage.getItem('selectedTabIndex'))  || 0;
    this.selectTab(this.tabs.toArray()[selectedIndex]);

  }

  selectTab(tab: TabComponent) {
 
    this.tabs.toArray().forEach(tab => (tab.active = false));
    let selectedIndex: number = this.tabs.toArray().indexOf(tab);
    localStorage.setItem('selectedTabIndex',selectedIndex.toString());
    tab.active = true;
  }
}
