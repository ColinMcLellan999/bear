import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import SUPERVISOR_FIELD from '@salesforce/schema/Bear__c.Supervisor__c';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

const bearFields = [SUPERVISOR_FIELD];
export default class BearSupervisor extends LightningElement {
    @api fieldsdisplay = [NAME_FIELD, EMAIL_FIELD];
    @api recordId; // Bear Id
	@wire(getRecord, { recordId: '$recordId', fields: bearFields })
	bear;
	get supervisorId() {
		return getFieldValue(this.bear.data, SUPERVISOR_FIELD);
	}
}