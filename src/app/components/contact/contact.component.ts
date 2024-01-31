import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Ripple, Input, initTE, Validation, Alert } from 'tw-elements';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { routerTransition } from '../../router.animations';

@Component({
	selector: 'app-contact',
	animations: [routerTransition],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	form: FormGroup = this.fb.group({
		from_name: '',
		from_email: '',
		message: '',
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		initTE({ Ripple, Input, Validation, Alert });
	}

	async send() {
		if (grecaptcha.getResponse() == '') {
			// @ts-ignore
			document
				.getElementById('requiredCaptcha')
				.classList.remove('hidden');
			// @ts-ignore
			document.getElementById('requiredCaptcha').classList.add('block');
			return;
		}
		const resultContainer = document.getElementById('result-container');
		const alertInstance = Alert.getInstance(resultContainer);

		alertInstance.show();

		let response = await emailjs.send(
			'service_be5qpgl',
			'template_oqy0z8h',
			{
				from_name: this.form.value.from_name,
				message: this.form.value.message,
				reply_to: this.form.value.from_email,
				'g-recaptcha-response': grecaptcha.getResponse(),
			},
			'98DFvURV_aXEP6HbH',
		);

		this.form.reset();
		grecaptcha.reset();
	}
}
