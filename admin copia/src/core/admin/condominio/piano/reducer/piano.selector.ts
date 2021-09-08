/*
 * SpurtCommerce
 * version 2.2
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2021 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import {createSelector} from 'reselect';
import * as fromPiano from './piano.reducer';
import {AppState} from '../../../../app.state.interface';

export const getPianoState = (state: AppState) => state.piano;
// piano list
export const getPianoList = createSelector(getPianoState, fromPiano.getPianoList);
export const pianoListLoading = createSelector(getPianoState, fromPiano.getPianoListLoading);
export const pianoListLoaded = createSelector(getPianoState, fromPiano.getPianoListLoaded);
export const pianoListFailed = createSelector(getPianoState, fromPiano.getPianoListFailed);
// piano count
export const getPianoContdata = createSelector(getPianoState, fromPiano.getPianoCount);
export const pianoCountLoading = createSelector(getPianoState, fromPiano.getPianoCountLoading);
export const pianoCountLoaded = createSelector(getPianoState, fromPiano.getPianoCountLoaded);
export const pianoCountFailed = createSelector(getPianoState, fromPiano.getPianoCountFailed);
// piano add
export const getPianoAdd = createSelector(getPianoState, fromPiano.getPianoAdd);
export const pianoAddLoading = createSelector(getPianoState, fromPiano.getPianoAddLoading);
export const pianoAddLoaded = createSelector(getPianoState, fromPiano.getPianoAddLoaded);
export const pianoAddFailed = createSelector(getPianoState, fromPiano.getPianoAddFailed);
// piano update
export const getPianoUpdate = createSelector(getPianoState, fromPiano.getPianoUpdate);
export const pianoUpdateLoading = createSelector(getPianoState, fromPiano.getPianoUpdateLoading);
export const pianoUpdateLoaded = createSelector(getPianoState, fromPiano.getPianoUpdateLoaded);
export const pianoUpdateFailed = createSelector(getPianoState, fromPiano.getPianoUpdateFailed);
// piano delete
export const getPianoDelete = createSelector(getPianoState, fromPiano.getPianoDelete);
export const pianoDeleteLoading = createSelector(getPianoState, fromPiano.getPianoDeleteLoading);
export const pianoDeleteLoaded = createSelector(getPianoState, fromPiano.getPianoDeleteLoaded);
export const pianoDeleteFailed = createSelector(getPianoState, fromPiano.getPianoDeleteFailed);
