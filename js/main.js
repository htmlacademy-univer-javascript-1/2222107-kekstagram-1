import './utils.js';
import './form.js';
import {setUserFormSubmit} from './form.js';
import {sendRequest} from './api.js';
import './pictures.js';
import {onSuccess, onFail} from './utils.js';
import {showError, showSuccess} from './alerts.js';

sendRequest(onSuccess, onFail, 'GET');
setUserFormSubmit(showSuccess, showError);
