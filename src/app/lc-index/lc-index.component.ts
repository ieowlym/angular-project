import { Component, OnInit } from "@angular/core";
import { IInfo } from "./information";
import { IndexService } from "./lc-index.service";

@Component({
    selector: 'lc-index',
    templateUrl: './lc-index.component.html',
    styleUrls: ['../app.component.css'],
    providers: [IndexService]
})
export class IndexComponent implements OnInit {
    contents: IInfo[] =[
        {
            'header': 'Effortless multilingual communications',
            'content': 'Understand your guests perfectly with all dialogues auto-translated to their native languages. LendoChat minimizes possible errors that can be caused by verbal communications and makes your guests feel always welcomed to raise their needs.'
        },
        {
            'header': 'A complete online hotel guide',
            'content': 'Present all hotel offers and valuable information in different languages so guests can easily search and request orders on their phones without hassles. LendoChat works like an online shop to create more revenue from additional hotel services.'
        },
        {
            'header': 'Keeping in touch with guests all the time',
            'content': 'Stay connected and continue to serve your guests anytime and anywhere. Guests will feel more pleasant and secure than ever knowing that you always get their back and ready to help via LendoChat, given they are enjoying at the hotel spa or having a walk in the city.'
        },
    ];


    //constructor(private indexService: IndexService) {}

    ngOnInit() {
      //  this.contents = this.indexService.getInfo();

    }
}