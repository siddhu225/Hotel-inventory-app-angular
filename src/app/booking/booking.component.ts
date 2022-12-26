import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import {MatAccordion} from '@angular/material/expansion';
import { CustomValidator } from './validators/customValidator';



@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private configService: ConfigService, private fb: FormBuilder) { }

  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  addGuestControl() {
    return this.fb.group({
      guestName: new FormControl('', [Validators.required]), age: new FormControl('')
    });
  }


  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: false }, { validators: [Validators.required] }),
      guestEmail: ['', {
        updateOn: 'change',
        validators: [Validators.required, Validators.email, CustomValidator.validateEmail]}],
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestDate: [''],
      address: this.fb.group({
        addressLine1: ['', { validators: [Validators.required]}],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zip: [''],
      }),
      guestCount: [''],
      guests: this.fb.array([
        this.addGuestControl()
      ])
    })
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }



}
