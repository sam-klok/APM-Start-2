import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
//import { EventEmitter } from "stream";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges{
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        console.log(`The rating ${this.rating} stars clicked`);
        this.ratingClicked.emit(`The rating ${this.rating} stars clicked`);
        //console.log('stars was clicked..');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75/5;
    }
}

