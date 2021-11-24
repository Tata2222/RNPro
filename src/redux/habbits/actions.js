import {types} from '@babel/core';
import {CREATE_HABBIT} from './types';

export const createHabbit = habbit => ({type: CREATE_HABBIT, payload: habbit});
