import shared from './shared';
import _ from 'lodash';

export default function print() {
    console.log('from print');
    console.log('sdasds');
    //sdsd
    shared();
    console.log('lodash version' + _.VERSION);
}