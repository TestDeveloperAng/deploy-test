import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: [ './courses.component.css' ]
})
export class CourseComponent {
	code = 'C4587';
	enrollStatus = false;
	studentName = '';

	@Input() course;

	detectName(e) {
		this.studentName = (<HTMLInputElement>event.target).value;
		if (this.studentName === '') {
			this.enrollStatus = false;
		}
	}

	enrollCourse(inputName: HTMLInputElement) {
		// console.log(e.value);
		// this.studentName = (<HTMLInputElement>inputName).value;
		this.enrollStatus = true;
	}

	unEnrollCourse(e) {
		this.enrollStatus = false;
	}

	@Output() courseBuyClicked = new EventEmitter();

	buycourse(e) {
		// console.log(e.srcElement.id);
		this.courseBuyClicked.emit(e.srcElement.id);
	}
}
